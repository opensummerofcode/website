import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantResolver } from './participant.resolver';

describe('ParticipantResolver', () => {
  let resolver: ParticipantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipantResolver],
    }).compile();

    resolver = module.get<ParticipantResolver>(ParticipantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
