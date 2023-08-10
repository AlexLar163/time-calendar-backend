import { Test, TestingModule } from '@nestjs/testing';
import { LodashHelpers } from './lodash.helpers';

describe('LodashHelpers', () => {
  let provider: LodashHelpers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LodashHelpers],
    }).compile();

    provider = module.get<LodashHelpers>(LodashHelpers);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
