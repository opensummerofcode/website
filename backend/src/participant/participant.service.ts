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

  async addStatus(id: string, status: string): Promise<IParticipant> {
    const participant = await this.participantModel.findById(id);
    participant.status.push(status);
    return participant.save();
  }

  async removeStatus(id: string, status: string): Promise<IParticipant> {
    const participant = await this.participantModel.findById(id);
    participant.status.pull(status);
    return participant.save();
  }

  async updateSocials(id: string, socials): Promise<IParticipant> {
    const participant = await this.participantModel.findById(id);
    participant.socials = { ...participant.socials, ...socials };
    return participant;
  }

  async create(input: any): Promise<IParticipant> {
    const { picture } = input;
    if (picture) {
      const file = await this.fileService.store(await picture, 'participants');
      input = Object.assign(
        { picture: file.secure_url, picturePublicId: file.public_id },
        input,
      );
    }
    return this.participantModel.create(input);
  }

  async findAll(): Promise<IParticipant[]> {
    return this.participantModel.find();
  }

  async findOne(id: string): Promise<IParticipant> {
    return this.participantModel.findOne(id);
  }

  async update(id: string, input): Promise<IParticipant> {
    const participant = await this.participantModel
      .findById(id)
      .orFail(new Error('No participant found'));

    if (input.picture) {
      await this.fileService.delete(participant.picturePublicId);
      const file = await this.fileService.store(
        await input.logo,
        'participants',
      );
      input = Object.assign({
        logo: file.secure_url,
        logoPublicId: file.public_id,
        input,
      });
    }

    Object.assign(participant, input);

    return participant.save();
  }
}
