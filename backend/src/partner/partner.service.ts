import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPartner } from './interfaces/partner.interface';
import { FileService } from '../file/file.service';

@Injectable()
export class PartnerService {
  constructor(
    @InjectModel('Partner') private readonly partnerModel: Model<IPartner>,
    private readonly fileService: FileService,
  ) {}

  async findAll(): Promise<IPartner[]> {
    return this.partnerModel.find();
  }

  async findOne(id: string): Promise<IPartner> {
    return this.partnerModel.findById(id);
  }

  async create(input): Promise<IPartner> {
    const file = await this.fileService.store(await input.logo, 'partners');
    input.logo = file.secure_url;
    input.logoPublicId = file.public_id;
    return this.partnerModel.create(input);
  }

  async update(id: string, input): Promise<IPartner> {
    let partner = await this.partnerModel.findById(id);
    if (input.logo) {
      await this.fileService.delete(partner.logoPublicId);
      const file = await this.fileService.store(await input.logo, 'partners');
      input.logo = file.secure_url;
      input.logoPublicId = file.public_id;
    }

    partner = Object.assign(partner, input);

    return partner.save();
  }

  async delete(id: string): Promise<IPartner> {
    const partner = await this.partnerModel
      .findByIdAndDelete(id)
      .orFail(new Error('Partner not found!'));

    await this.fileService.delete(partner.logoPublicId);

    return partner;
  }
}
