import { InputType, Field } from 'type-graphql';
import { SocialMediaInput } from './social-media-input';

@InputType()
export class NewParticipantInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  picture?: string;

  @Field({
    nullable: true,
    description:
      'Participant status (e.g. Student, Coach, etc.). Default = Student',
  })
  status?: string;

  @Field(type => [SocialMediaInput], { nullable: true })
  socials?: SocialMediaInput[];
}
