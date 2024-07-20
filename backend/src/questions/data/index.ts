import { AvailableQuestionTypes, Question, QuestionType } from "src/types";
import { cssQuestions } from "./css";
import { htmlQuestions } from "./html";
import { jsQuestions } from "./js";
import { reactQuestions } from "./react";
import { theoryQuestions } from "./theory";
import { tsQuestions } from "./ts";

export const questions: Omit<Question, 'id'>[] = [
  ...cssQuestions,
  ...htmlQuestions,
  ...jsQuestions,
  ...reactQuestions,
  ...theoryQuestions,
  ...tsQuestions,
];

export const questionTypes: QuestionType[] = [
  { id: AvailableQuestionTypes.HTML, label: 'HTML' },
  { id: AvailableQuestionTypes.CSS, label: 'CSS' },
  { id: AvailableQuestionTypes.JS, label: 'JS' },
  { id: AvailableQuestionTypes.REACT, label: 'React' },
  { id: AvailableQuestionTypes.TS, label: 'TypeScript' },
  { id: AvailableQuestionTypes.THEORY, label: 'Общие вопросы' },
];
