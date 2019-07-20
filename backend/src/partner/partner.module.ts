import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerResolver } from './partner.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnerSchema } from './schemas/partner.schema';
import { FileModule } from '../file/file.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Partner', schema: PartnerSchema }]),
    FileModule,
  ],
  providers: [PartnerService, PartnerResolver],
})
export class PartnerModule {}
