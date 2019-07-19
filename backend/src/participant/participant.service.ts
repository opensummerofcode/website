import { Injectable } from '@nestjs/common';
import { IParticipant } from './interfaces/participant.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService } from '../file/file.service';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel('Participant')
    private readonly participantModel: Model<IParticipant>,
    private readonly fileService: FileService,
  ) {}

  async create(input: any): Promise<IParticipant> {
    const { picture } = input;
    if (picture) {
      const file = await this.fileService.store(await picture, 'participants');
      input.picture = file.secure_url;
    }
    return this.participantModel.create(input);
  }

  async findAll(): Promise<IParticipant[]> {
    return this.participantModel.find();
  }
}
