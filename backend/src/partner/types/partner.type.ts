import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class Partner {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  logo: string;
}
