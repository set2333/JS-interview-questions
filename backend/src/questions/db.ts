import { Question, QuestionType } from "src/types";

export const questions: Omit<Question, 'id'>[] = [
  {
    type: 'html',
    question: 'Работа с формами',
    answer: 'Работа с формами происходит через тег form.',
  },
  {
    type: 'css',
    question: 'В чем отличие em и rem',
    answer: 'Это разные единицы измерения',
  },
  {
    type: 'theory',
    question: 'Альтернативы web-sockets',
    answer: `<b>Polling</b> - запросы через небольшой интервал времени.</br>
     <b>Long polling</b> - отправка запроса, который не завершиться пока не будет ответа.</br>
     <b>Event sourcing</b> - запрос с хитрыми параметрами.`,
  },
  {
    type: 'js',
    question: 'Что такое this?',
    answer: 'Это контекст выполнения',
  },
  {
    type: 'js',
    question: 'Что такое event loop?',
    answer: 'Это цикл',
  },
  {
    type: 'react',
    question: 'Для чего нужен хук useEffect',
    answer: 'Для side эфектов',
  },
];

export const questionTypes: QuestionType[] = [
  { id: 'js', label: 'Вопросы по JS' },
  { id: 'css', label: 'Вопросы по CSS' },
  { id: 'html', label: 'Вопросы по HTML' },
  { id: 'theory', label: 'Общие вопросы' },
  { id: 'react', label: 'Вопросы по React' },
];
