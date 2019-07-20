import { Field, InputType } from 'type-graphql';

@InputType()
export class NewProjectInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  catchphrase?: string;

  @Field({ nullable: true })
  logo?: string;

  @Field({ nullable: true })
  repository?: string;

  @Field({ nullable: true })
  website?: string;
}
