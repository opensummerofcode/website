import { Field, InputType } from 'type-graphql';
import { GraphQLUpload } from 'apollo-server-core';

@InputType()
export class UpdateProjectInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  catchphrase?: string;

  @Field(type => GraphQLUpload, { nullable: true })
  logo?: any;

  @Field({ nullable: true })
  repository?: string;

  @Field({ nullable: true })
  website?: string;
}
