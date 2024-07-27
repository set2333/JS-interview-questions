import { Injectable } from '@nestjs/common';
import { Client, QueryResult } from 'pg';
import { Question, QuestionType } from 'src/types';

@Injectable()
export class QuestionPgService {
  client: Client;
  questions: Question[] = [];
  questionTypes: QuestionType[] = [];

  constructor() {
    this.client = new Client({
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      host: process.env.PG_HOST,
      port: +process.env.PG_PORT,
    });
    this.client.connect();
  }

  async getQuestionsByType(typeId: string): Promise<Question[]> {
    const { rows }: QueryResult<Question> = await this.client.query(`
      select questions.id, questionTypes.value as type, questions.question, questions.answer from questions
      join questionTypes on questions.type = questionTypes.id
      where questionTypes.value = $1
    `, [typeId]);

    return rows;
  }

  async getQuestionTypes(): Promise<QuestionType[]> {
    const { rows }: QueryResult<QuestionType> = await this.client.query(`select Label, Value as Id from questionTypes`);

    return rows;
  }
}
