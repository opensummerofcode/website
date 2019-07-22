import { InputType, Field } from 'type-graphql';

@InputType()
export class SocialMediaInput {
  @Field({ nullable: true })
  twitter?: string;
  @Field({ nullable: true })
  facebook?: string;
  @Field({ nullable: true })
  instagram?: string;
  @Field({ nullable: true })
  github?: string;
  @Field({ nullable: true })
  youtube?: string;
  @Field({ nullable: true })
  behance?: string;
  @Field({ nullable: true })
  linkedin?: string;
}
