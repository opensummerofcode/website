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

  async create(input): Promise<IProject> {
    const logo = await this.saveLogo(input.logo);
    input.logo = logo;
    return this.projectModel.create(input);
  }

  private async saveLogo(logo): Promise<string> {
    const file = logo && (await this.fileService.store(await logo, 'projects'));
    return file && file.secure_url;
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
      Object.assign(update, logo && { logo }),
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
}
