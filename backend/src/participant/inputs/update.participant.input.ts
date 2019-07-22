import { InputType, Field } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class UpdateParticipantInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => GraphQLUpload, { nullable: true })
  picture?: any;
}
