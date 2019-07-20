import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Partner } from './types/partner.type';
import { PartnerService } from './partner.service';
import { NewPartnerInput } from './inputs/partner.input';

@Resolver('Partner')
export class PartnerResolver {
  constructor(private readonly partnerService: PartnerService) {}

  @Query(returns => [Partner], { nullable: true })
  partners(): Promise<Partner[]> {
    return this.partnerService.findAll();
  }

  @Mutation(returns => Partner)
  addPartner(@Args('input') input: NewPartnerInput): Promise<Partner> {
    return this.partnerService.create(input);
  }
}
