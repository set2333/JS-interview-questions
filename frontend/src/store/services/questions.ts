import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER } from '../../consts';

type QuestionType = {
  id: string;
  label: string;
}

type Question = {
  id: string;
  type: QuestionType['id'];
  question: string;
  answer: string;
}

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER.PROTOCOL}://${SERVER.HOST}:${SERVER.PORT}/questions` }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], string>({ query: (type) => `?type=${type}` }),
    getQuestionTypes: builder.query<QuestionType[], string>({ query: () => 'types' }),
  }),
});
