import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SocialMedia {
  @Field()
  url: string;

  @Field({ nullable: true })
  platform?: string;
}
