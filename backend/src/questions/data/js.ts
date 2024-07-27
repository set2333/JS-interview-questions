import { AvailableQuestionTypes, Question } from "../../types";

export const jsQuestions: Omit<Question, 'id'>[] = [
  {
    question: 'preventDefault',
    answer: `<b>event.preventDefault</b> метод для отмены стандартного поведения при обработке события.</br>
    Может применяться для отмены отправки формы, если она содержит некорректные данные, или для отмены перехода на другую страницу при клике на ссылку.</br>
    Не все события можно отменить. Проверить эту возможность можно в свойстве <b>event.cancelable</b>.
    `,
  },
  {
    question: 'Что такое this',
    answer: `Это контекст выполнения. В случае если мы работаем с объектом, то <b>this</b> будет указывать на этот объект. 
    В обычном коде <b>this</b> будет ссылаться на глобальный объект (<b>window</b>, или <b>global</b> для nodejs).</br>
    Если мы объявим метод объекта через <b>function</b>, то <b>this</b> в этой функции будет сам объект, 
    но если метод объявлен через стрелочную функцию, то <b>this</b> будет ссылаться на контекст выполнения вызывающего кода.
    Это происходит потому, что у стрелочных функций не контекста.</br>
    Можно вызвать функцию с явным указанием контекста. Для этого существуют методы <b>call(context, ...args)</b> и <b>apply(context, [...args])</b></br>
    Также можно привязать контекст к функции через метод <b>bind(context, ...args)</b>. Не возможно привязать контекст повторно, и не возможно привязать контекст к стрелочной функции.
    `,
  },
  {
    question: 'Что такое event loop',
    answer: `Это цикл событий. Нужен для организации асинхронного кода. Является часть среды (браузер, nodejs).</br>
    Сначала выполняется синхронный код. Затем приходит очередь микро-тасков. 
    Это таски из <b>Promise</b>, <b>queueMicrotask</b> и <b>Intersection Observer</b> (api для отслеживания пересечения блока с другим блоком или областью видимости). 
    Если микро-таски порождают другие микро-таски, то очередь выполнения продолжится, пока они не выполнятся все (ну или приложение ляжет).</br>
    Дальше идет очередь макро-тасков. Туда попадают остальные задачи (<b>fetch, eventListenrs, setTimeout</b> и все остальное из browser-api). 
    После выполнения одной макро-задачи, опять проверяется очередь микро-тасков. Затем получаеться следующий макро-таск. И так происходит бесконечно.
    `,
  },
  {
    question: 'Всплытие/погружение',
    answer: `При возникновении какого-либо события сначала происходит фаза <b>Погружения</b>. 
    Событие отрабатывает в последовательности <i>window -> document -> html -> body -> parent -> target</i>.</br>
    Зате происходит фаза <b>Всплытия</b>. 
    При этой фазе событие происходит в обратной последовательности (<i>target -> parent -> body -> html -> document -> window</i>).</br>
    Для того, что бы узнать где произошло событие, в обработчике действия есть аргумент <b>event.target</b>.
    Текущий элемент доступен в <b>event.currentTarget</b>.</br>
    С помощью <b>event.stopPropagation</b> можно остановить дальнейшее всплытие. Но обработка продолжиться на текущем уровне.</br>
    Для того, что бы полностью остановить обработку есть метод <b>event.stopImmediatePropagation</b>.</br>
    Фаза погружения обычно не используется, но если необходимо обрабатывать события на этой фазе, 
    при регистрации события <b>addEventListener</b> передается третий аргумент <b>{ capture: true }</b>.</br>
    Посмотреть какая фаза произошла можно в аргументе <b>event.eventPhase</b>.
    `,
  },
].map(question => ({ ...question, type: AvailableQuestionTypes.JS }));

