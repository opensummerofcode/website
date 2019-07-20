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

  async saveLogo(logo): Promise<string> {
    const file = logo && (await this.fileService.store(await logo, 'projects'));
    return file && file.secure_url;
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
}
