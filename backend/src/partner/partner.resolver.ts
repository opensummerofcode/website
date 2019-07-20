import { Resolver, Query } from '@nestjs/graphql';
import { Partner } from './types/partner.type';
import { PartnerService } from './partner.service';

@Resolver('Partner')
export class PartnerResolver {
  constructor(private readonly partnerService: PartnerService) {}

  @Query(returns => [Partner], { nullable: true })
  partners(): Promise<Partner[]> {
    return this.partnerService.findAll();
  }
}
