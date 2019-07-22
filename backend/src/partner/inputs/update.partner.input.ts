import { Field, InputType, ID } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class UpdatePartnerInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  url?: string;

  @Field(type => GraphQLUpload, { nullable: true })
  logo?: any;
}
