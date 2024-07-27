import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { questions, questionTypes } from './data';
import { Question, QuestionType } from 'src/types';

const makeId = (element: Omit<Question, 'id'>): Question => ({
  ...element,
  id: randomUUID(),
});


@Injectable()
export class QuestionsService {
  questions: Question[] = [];
  questionTypes: QuestionType[] = [];

  constructor() {
    this.questions = questions.map(makeId);
    this.questionTypes = questionTypes;
  }

  async getQuestionsByType(typeId: string): Promise<Question[]> {
    return this.questions.filter(({ type }) => type === typeId);
  }

  async getQuestionTypes(): Promise<QuestionType[]> {
    return this.questionTypes;
  }
}
