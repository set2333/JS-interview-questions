import { Test, TestingModule } from '@nestjs/testing';
import { QuestionPgService } from './question-pg.service';

describe('QuestionPgService', () => {
  let service: QuestionPgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionPgService],
    }).compile();

    service = module.get<QuestionPgService>(QuestionPgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
