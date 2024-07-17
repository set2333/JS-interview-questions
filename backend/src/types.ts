export enum AvailableQuestionTypes {
  CSS = 'css',
  HTML = 'html',
  JS = 'js',
  REACT ='react',
  THEORY = 'theory',
}

export type QuestionType = {
  id: AvailableQuestionTypes;
  label: string;
}

export type Question = {
  id: string;
  type: QuestionType['id'];
  question: string;
  answer: string;
}