import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerResolver } from './partner.resolver';

@Module({
  providers: [PartnerService, PartnerResolver]
})
export class PartnerModule {}
