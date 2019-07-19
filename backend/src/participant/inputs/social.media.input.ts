import { InputType, Field } from 'type-graphql';

@InputType()
export class SocialMediaInput {
  @Field()
  url: string;

  @Field({ nullable: true })
  platform?: string;
}
