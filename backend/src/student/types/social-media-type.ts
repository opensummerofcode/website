import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class StudentSocial {
  @Field()
  url: string;

  @Field({ nullable: true })
  platform?: string;
}
