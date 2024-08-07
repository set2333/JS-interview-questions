import { AvailableQuestionTypes, Question } from "../../types";

export const reactQuestions: Omit<Question, 'id'>[] = [
  {
    question: 'Вывод списков',
    answer: `Вывод списка можно осуществить с помощью метода массива <b>map</b>, который должен возвращать массив jsx элементов.</br>
    В случае если элементы могут добавляться/удаляться или менять свое расположение, в каждом элементе должен содержаться пропс <b>key</b>.</br>
    Не стоит передавать в качестве <b>key</b> индекс массива (это кстати поведение реакт по умолчанию, но это подойдет только для неизменяемых списков).</br>
    <b>key</b> должен быть уникален для каждого элемента. Не стоит генерировать его на лету (например <i>key={Math.random()}</i>), 
    так как значения будут меняться при каждом рендере, и весь список будет рендериться заново. 
    К тому же будет сбрасываться пользовательский ввод (например если компонент содержал input).</br>
    `,
  },
  {
    question: 'Хук useState',
    answer: `<b>useState</b> - добавляет переменную состояния к компоненту. При его изменении происходит рендеринг компонента.</br>
    В качестве аргумента передается начальное состояние. Можно передать функцию. В этом случае она будет вызвана только в первый раз, при начальной инициализации.</br>
    Хук возвращает массив. В первом элементе содержится состояние, по втором функция для изменения состояния.</br>
    В функцию изменения состояния можно передавать новое значение, или другую функцию, которая принимает предидущее значение и возвращает новое.</br>
    Новое значение станет доступным только при следующем рендере.</br>
    Можно передавать состояние в пропс <b>key</b>. Это позволяет полностью сбросить все состояния в компоненте для которого задан этот пропс.
    `,
  },
  {
    question: 'Хук useEffect',
    answer: `Это хук для синхронизации компонента с внешними системами. 
    Здесь могут располагаться запросы к серверу, подключение/отключение listeners, создание подключении с сервером или api браузера.</br>
    В хук передается функция, которая и выполняет эти действия. Она может возвращать функцию, которая будет осуществлять отписку от событий, закрытие соединений и т.д.</br>
    Вторым аргументом передается массив зависимостей.</br>
    Если аргумент не передавать, то хук отрабатывает при каждом рендере.</br>
    Если пустой массив, то хук отработает только при первом рендере. Функция отписки отработает при размонтировании компонента.</br>
    Если в массиве есть зависимости, то хук отрабатывает при их изменении.</br>
    В этом случае работа происходит вот так: 
    Запускается функция эффект при первом рендере, при изменении зависимости запускается функция отписки со старыми значениями, затем функция эффекта с новыми значениями, и т.д.</br>
    Если мы определяем объект или функцию в нашем компоненте и передаем в зависимости, то могу происходить нежелательные вызовы хука. 
    В этом случае необходимо обернуть созданную сущность в <b>useCallback/useMemo</b>.</br>
    Хук имеет синхронную версию <b>useLayoutEffect</b>. Иногда помогает избежать ненужных рендеров, но работает медленнее. Предпочтительнее использовать <b>useEffect</b></br>.
    <b>useEffect</b> работает только на клиенте.
    `,
  },
  {
    question: 'Хук useRef',
    answer: `<b>useRef</b> - позволяет хранить значение, которые не используется для рендеринга.</br>
    Возвращает объект со свойством <b>current</b>, в котором и содержится значение.</br>
    Значение можно менять, но рендеринг при этом происходить не будет, однако само значение сохраняется между рендерингами, в отличии от обычных переменных.</br>
    Можно использовать для хранения идентификаторов таймеров. Так же можно передавать в пропс <b>ref</b>. В этом случае будет содержать ссылку на DOM элемент. 
    Затем можно использовать таке методы как <b>focus()</b>, <b>scrollTo()</b>.</br>
    Для того чтобы можно было передавать пропс <b>ref</b> в собственные компонент его нужно обернуть в <b>forwardRef(Component, ref)</b>.
    `,
  },
  {
    question: 'Разница между Conrext и State Managers',
    answer: `<b>Context</b> - способ передачи данных во все компоненты без проброски props. Используют для передачи настроек интерфейса, тем, языка.</br>
    <b>Context</b> передает значение. В результате все компоненты которые его используют будут перерисованы при изменении этого значения.</br>
    <b>State Managers</b> - используются для управления данными (чтение, запись). При из использовании передается экземпляр хранилища. 
    Это позволяет компонентам подписываться на изменение только необходимых данных, что предотвращает ненужные рендеры.</br>
    <b>State Managers</b> позволяют реализовывать более сложную логику, использовать промежуточное ПО (Middleware). 
    Они могут иметь специальные расширения для браузера, позволяющие упростить отладку. Так же  <b>State Managers</b> не являются частью <b>React</b>, в отличии от <b>Context</b>.</br>
    Так же <b>State Managers</b> используют <b>Context</b> для подключения.
    `,
  },
].map(question => ({ ...question, type: AvailableQuestionTypes.REACT }));

