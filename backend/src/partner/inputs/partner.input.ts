import { Field, InputType, ID } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class NewPartnerInput {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field(type => GraphQLUpload)
  logo: any;
}
