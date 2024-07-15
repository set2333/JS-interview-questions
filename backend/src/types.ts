export type QuestionType = {
  id: string;
  label: string;
}

export type Question = {
  id: string;
  type: QuestionType['id'];
  question: string;
  answer: string;
}