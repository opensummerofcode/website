import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver('Student')
export class StudentResolver {
  @Query(returns => String)
  hello() {
    return 'Hi man!';
  }
}
