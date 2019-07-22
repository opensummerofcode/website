import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Partner } from './types/partner.type';
import { PartnerService } from './partner.service';
import { NewPartnerInput } from './inputs/partner.input';
import { UpdatePartnerInput } from './inputs/update.partner.input';

@Resolver('Partner')
export class PartnerResolver {
  constructor(private readonly partnerService: PartnerService) {}

  @Query(returns => [Partner], { nullable: true })
  partners(): Promise<Partner[]> {
    return this.partnerService.findAll();
  }

  @Query(returns => Partner, { nullable: true })
  partner(@Args('id') id: string): Promise<Partner> {
    return this.partnerService.findOne(id);
  }

  @Mutation(returns => Partner)
  addPartner(@Args('input') input: NewPartnerInput): Promise<Partner> {
    return this.partnerService.create(input);
  }

  @Mutation(returns => Partner)
  updatePartner(
    @Args('id') id: string,
    @Args('input') input: UpdatePartnerInput,
  ): Promise<Partner> {
    return this.partnerService.update(id, input);
  }
}
