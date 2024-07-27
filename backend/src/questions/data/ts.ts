import { AvailableQuestionTypes, Question } from "../../types";

export const tsQuestions: Omit<Question, 'id'>[] = [
  {
    question: 'Дженерики',
    answer: `<b>Generics</b> - это параметризованные типы данных, то есть это типы данных в которые передаются параметры, которые определяют их.</br>
    Они нужны для описания похожих, но отличающихся какими-то характеристиками типов.
    `,
  },
  {
    question: 'Conditional types',
    answer: `<b>Conditional types</b> - "условные типы" позволяют определять типы в зависимости от условия (<i>type T0<T> = T extends number ? string : boolean;</i>).
    `
  },
].map(question => ({ ...question, type: AvailableQuestionTypes.TS }));

