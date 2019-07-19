import { Field, ObjectType, ID } from 'type-graphql';
import { StudentSocial } from './social-media-type';

@ObjectType()
export class Student {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  picture?: string;

  @Field(type => [StudentSocial], { nullable: true })
  socials?: StudentSocial[];
}
