import { Test, TestingModule } from '@nestjs/testing';
import { PartnerResolver } from './partner.resolver';

describe('PartnerResolver', () => {
  let resolver: PartnerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartnerResolver],
    }).compile();

    resolver = module.get<PartnerResolver>(PartnerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
