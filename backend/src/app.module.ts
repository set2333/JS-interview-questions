import { Module } from '@nestjs/common';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { QuestionPgService } from './questions/question-pg.service';

@Module({
  imports: [],
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionPgService],
})
export class AppModule {}
