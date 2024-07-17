import { AvailableQuestionTypes, Question, QuestionType } from "src/types";
import { cssQuestions } from "./css";
import { htmlQuestions } from "./html";
import { jsQuestions } from "./js";
import { reactQuestions } from "./react";
import { theoryQuestions } from "./theory";

export const questions: Omit<Question, 'id'>[] = [
  ...cssQuestions,
  ...htmlQuestions,
  ...jsQuestions,
  ...reactQuestions,
  ...theoryQuestions,
];

export const questionTypes: QuestionType[] = [
  { id: AvailableQuestionTypes.HTML, label: 'Вопросы по HTML' },
  { id: AvailableQuestionTypes.CSS, label: 'Вопросы по CSS' },
  { id: AvailableQuestionTypes.JS, label: 'Вопросы по JS' },
  { id: AvailableQuestionTypes.REACT, label: 'Вопросы по React' },
  { id: AvailableQuestionTypes.THEORY, label: 'Общие вопросы' },
];
