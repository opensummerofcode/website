import { InputType, Field } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { SocialMediaInput } from './social.media.input';

@InputType()
export class NewParticipantInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(type => GraphQLUpload, { nullable: true })
  picture?: any;

  @Field(type => [String], {
    nullable: true,
    description:
      'Participant status (e.g. student, coach, etc.). Default = student',
  })
  status?: string[];

  @Field(type => SocialMediaInput, { nullable: true })
  socials?: SocialMediaInput;
}
