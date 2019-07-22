import { Field, ObjectType, ID } from 'type-graphql';
import { SocialMedia } from './social.media.type';

@ObjectType()
export class Participant {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  picture?: string;

  @Field(type => [String])
  status: string[];

  @Field(type => [SocialMedia], { nullable: true })
  socials?: SocialMedia[];
}
