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
}
