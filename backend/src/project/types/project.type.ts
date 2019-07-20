import { ObjectType, Field } from 'type-graphql';
import { Partner } from '../../partner/types/partner.type';
import { Participant } from '../../participant/types/participant.type';

@ObjectType()
export class Project {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  catchphrase?: string;

  @Field({ nullable: true })
  logo?: string;

  @Field({ nullable: true })
  repository?: string;

  @Field({ nullable: true })
  website?: string;

  @Field(type => [Partner], { nullable: true })
  partners?: Partner[];

  @Field(type => [Participant], { nullable: true })
  team?: Participant[];

  @Field(type => [Project], { nullable: true })
  linkedTo?: Project[];
}
