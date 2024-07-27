import { Controller, Get, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionPgService } from './question-pg.service';
import { Question, QuestionType } from 'src/types';

const ProviderMap = {
  ['pg']: QuestionPgService,
  ['file']: QuestionsService,
};

@Controller('questions')
export class QuestionsController {
  service: QuestionsService | QuestionPgService;

  constructor() {
    this.service = new ProviderMap[process.env.USED_PROVIDER];
  }

  @Get('types')
  async getQuestionTypes(): Promise<QuestionType[]> {
    return await this.service.getQuestionTypes();
  }

  @Get()
  async getQuestionsByType(@Query('type') questionType: string): Promise<Question[]> {
    return await this.service.getQuestionsByType(questionType);
  }
}
