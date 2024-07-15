import { Controller, Get, Param, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question, QuestionType } from 'src/types';

@Controller('questions')
export class QuestionsController {
  constructor(private servece: QuestionsService) {}

  @Get('types')
  getQuestionTypes(): QuestionType[] {
    return this.servece.getQuestionTypes();
  }

  @Get()
  getQuestionsByType(@Query('type') questionType: string): Question[] {
    return this.servece.getQuestionsByType(questionType);
  }
}
