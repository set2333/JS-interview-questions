import { AvailableQuestionTypes, Question } from "src/types";

export const cssQuestions: Omit<Question, 'id'>[] = [
  {
    question: 'В чем отличие em и rem',
    answer: `<b>em</b> - размер относительно родительского размера. Например если у родителя размер шрифта 20px, а у потомка 0.8em, то его размер будет равен 16px.</br>
    <b>rem</b> - расчет размера такой же как и для em, но вместо родителя используется размер для тега <b>html</b>`,
  },
  {
    question: 'Что такое БЭМ',
    answer: `<b>БЭМ (Блок, Элемент, Модификатор)</b> — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки.</br>
    <b>Блок</b> - Функционально независимый компонент страницы. Представлены атрибутом class. Название отвечает на вопрос <i>Что это? (menu, header, footer)</i></br>
    <b>Элемент</b> -  часть блока, которая не может использоваться в без него. Имя элемента отделяется от имени блока двумя подчеркиваниями (<i>имя-блока__имя-элемента</i>)</br>
    Элемент может быть вложен в другой элемент, но в названии это не отражается. Там он всегда часть блока.</br>
    <b>Модификатор</b> - определяющая внешний вид, состояние или поведение. Имя отделяется одинарным подчеркиванием. Должно отвечать на вопрос <i>Какой</i> (Какой размер, какая тема, какой цвет)</br>
    Модификатор можно использовать только с блоком или элементом, но не самостоятельно.
    `,
  },
  {
    question: 'Вес селекторов',
    answer: `Вес записывается в виде a, b, c, d, где:
    <ul>
      <li>a — встроенные стили</li>
      <li>b — селектор по идентификатору</li>
      <li>c — селектор классов, псевдоклассов и атрибутов</li>
      <li>d — селектор по тегу и псевдоэлементу</li>
    </ul>
    <b>!important</b> - имеет наивысший приоритет.
    `,
  },
].map(question => ({ ...question, type: AvailableQuestionTypes.CSS }));

