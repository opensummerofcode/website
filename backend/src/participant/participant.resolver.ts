import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver('Participant')
export class ParticipantResolver {
  @Query(returns => String)
  hello() {
    return 'Hi man!';
  }
}
