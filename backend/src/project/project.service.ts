import { Injectable } from '@nestjs/common';
import { IProject } from './interfaces/project.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService } from '../file/file.service';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<IProject>,
    private readonly fileService: FileService,
  ) {}

  async findAll(): Promise<IProject[]> {
    return this.projectModel.find();
  }

  async findOne(projectId: string): Promise<IProject> {
    return this.projectModel.findById(projectId);
  }

  async create(input): Promise<IProject> {
    const logo = await this.saveLogo(input.logo);
    return this.projectModel.create(Object.assign(input, logo));
  }

  private async saveLogo(logo): Promise<object> {
    const file = logo && (await this.fileService.store(await logo, 'projects'));
    return file && { logo: file.secure_url, logoPublicId: file.public_id };
  }

  private async populate(project: IProject, field: string) {
    const populated = await project.populate(field).execPopulate();
    return populated[field];
  }

  private async push(
    projectId: string,
    element: string,
    field: string,
  ): Promise<IProject> {
    return this.update({ projectId, update: { $push: { [field]: element } } });
  }

  private async pop(
    projectId: string,
    element: string,
    field: string,
  ): Promise<IProject> {
    return this.update({ projectId, update: { $pull: { [field]: element } } });
  }

  async update({ projectId, update }): Promise<IProject> {
    const logo = await this.saveLogo(update.logo);
    return this.projectModel.findByIdAndUpdate(
      projectId,
      Object.assign(update, logo && logo),
      {
        new: true,
      },
    );
  }

  async bind(projectId1: string, projectId2: string): Promise<IProject> {
    const field = 'linkedTo';
    await this.push(projectId2, projectId1, field);
    return this.push(projectId1, projectId2, field);
  }

  bonds(project: IProject) {
    return this.populate(project, 'linkedTo');
  }

  addPartner(projectId: string, partnerId: string): Promise<IProject> {
    return this.push(projectId, partnerId, 'partners');
  }

  partners(project: IProject): Promise<IProject> {
    return this.populate(project, 'partners');
  }

  addParticipant(projectId: string, participantId: string): Promise<IProject> {
    return this.push(projectId, participantId, 'team');
  }

  team(project: IProject) {
    return this.populate(project, 'team');
  }

  async unbind(projectId1: string, projectId2: string): Promise<IProject> {
    const field = 'linkedTo';
    await this.pop(projectId2, projectId1, field);
    return this.pop(projectId1, projectId2, field);
  }

  removeParticipant(
    projectId: string,
    participantId: string,
  ): Promise<IProject> {
    return this.pop(projectId, participantId, 'team');
  }

  removePartner(projectId: string, partnerId: string): Promise<IProject> {
    return this.pop(projectId, partnerId, 'partners');
  }

  async delete(projectId: string): Promise<IProject> {
    const project = await this.projectModel
      .findByIdAndDelete(projectId)
      .orFail(() => new Error('Project not found'));

    project.linkedTo.forEach(async link => {
      await this.pop(link, projectId, 'linkedTo');
    });

    if (project.logoPublicId) {
      await this.fileService.delete(project.logoPublicId, 'projects');
    }

    return project;
  }
}
