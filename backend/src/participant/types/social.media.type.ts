import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SocialMedia {
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
