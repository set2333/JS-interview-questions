import { AvailableQuestionTypes, Question } from "../../types";

export const problemQuestions: Omit<Question, 'id'>[] = [
  {
    question: 'Что выведет alert?',
    answer: `<pre><code>alert(str);
let str = "Hello";</code></pre>
    </br>Будет ошибка, так как переменная объявленна через <b>let</b>, и поэтому она не всплывет. А объявленна она после вызова.
    Если бы использовалось объявление через <b>var</b>, то alert вывел бы <b>undefined</b>.`,
  },
  {
    question: 'Что выведет sayHi при вызове через setTimeout?',
    answer: `<pre><code>let name = "Вася";

function sayHi() {
  alert(name);
}

setTimeout(function() {
  let name = "Петя";
  sayHi();
}, 1000);
    </code></pre>
    В момент вызова функция <b>SayHi()</b> внутри себя не находит переменную <b>name</b> и вспоминает, что она была определена в глобальной области</b>.`,
  },
  {
    question: 'Что выведет это выражение?',
    answer: `<pre><code>let a = new Array(1,2), b = new Array(3);
alert(a[0] + b[0]);
    </code></pre>
    Да. В переменной <b>а</b> у нас будет массив из двух чисел, а в переменной <b>b</b> — просто пустой массив из трёх элементов.`,
  },
  {
    question: 'Что выведет этот код?',
    answer: `<pre><code>for(let i=0; i<10; i++) {
  setTimeout(function() {
    alert(i);
  }, 100);
}
    </code></pre>
    Числа от 0 до 9. Так как <b>i</b> объявленно через <b>let</b>, в каждой функции внутри setTimeout свой экземпляр <b>i</b>. Если объявить <b>i</b> через <b>var</b>, то будет выведенно 10 раз число 10`,
  },
  {
    question: 'Чему равно 2 & & 1 & & null & & 0 & & undefined?',
    answer: `null. Логическое И остановиться на первом ложном значении и вернет его.`,
  },
  {
    question: 'Чему равна сумма [] + 1 + 2?',
    answer: `Строке "12". Пустой массив приравнивается к строке, а после этого и все выражение становиться строкой.`,
  },
  {
    question: 'Что выведет этот код?',
    answer: `<pre><code>let a = (1,5 - 1) * 2;
alert(a);
  </code></pre>
  Ответ 8. Оператор запятая вернет самый правый операнд. То есть <b>a</b> равен (5 - 1) * 2 = 8`,
  },
].map(question => ({ ...question, type: AvailableQuestionTypes.PROBLEM }));

