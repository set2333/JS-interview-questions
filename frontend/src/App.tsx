import { Flex } from 'antd';
import { Question } from './components/Question';
import { QuestionList } from './components/QuestionList';
import { QuestionsMenu } from './components/QuestionsMenu';

function App() {
  return (
    <div>
      <QuestionsMenu />
      <Flex>
        <QuestionList />
        <Question />
      </Flex>
    </div>
  );
}

export default App;
