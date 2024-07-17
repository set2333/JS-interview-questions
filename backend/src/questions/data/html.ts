import { AvailableQuestionTypes, Question } from "src/types";

export const htmlQuestions: Omit<Question, 'id'>[] = [
  {
    question: 'Работа с формами',
    answer: `Работа с формами происходит через тег <b>form</b>. В него можно обернуть теги <b>input</b> с атрибутами <b>type=(text|password|number)</b> и <b>name</b> - имя поля.
    Также добавляется <b>input</b> с типом <b>submit</b>, который и производит отправку формы.</br>
    Возможно использовать следующие теги: <b>input</b>, <b>select</b>, <b>label</b>, <b>button</b>, <b>textarea</b>.
    Не стоит использовать блочные теги (<b>div</b>).
    <h4>Атрибуты тега форм</h4>
    <ul>
      <li><b>action</b> - адрес отправки формы</li>
      <li><b>method</b> - http метод (GET, POST)</li>
      <li><b>target</b> - окно в котором будет открыт результат отправки данных формы</li>
      <li><b>name</b> - имя формы</li>
      <li><b>autocomplete</b> - может ли браузер запоминать введённые пользователем данные</li>
      <li><b>enctype</b> - способ кодирования данных формы</li>
      <li><b>novalidate</b> - указывает, что данные формы не нужно проверять на корректность</li>
      <li><b>onsubmit</b> - обработчик отправки формы</li>
    </ul>
    В JS можно обратиться у форме например так: <b>document.forms[formName]</b>.</br>
    Далее можно добавить слушатель события <b>addEventListener('submit', handler)</b></br>
    Для отмены отправки формы можно использовать <b>preventDefault()</b>. Обычно это используют для валидации данных формы.
    `,
  },
].map(question => ({ ...question, type: AvailableQuestionTypes.HTML }));

