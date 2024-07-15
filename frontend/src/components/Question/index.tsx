import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { RootState } from '../../store';
import { questionsApi } from '../../store/services/questions';

export const Question: FC = () => {
  const { currentQuestion, currentQuestionType } = useSelector(
    (state: RootState) => state.currentQuestion
  );
  const { data } = questionsApi.useGetQuestionsQuery(currentQuestionType);
  const { question, answer } = data?.find(({ id }) => id === currentQuestion) || {};

  return (
    <>
      {question && answer && (
        <Card title={question} style={{ width: '80%' }}>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </Card>
      )}
    </>
  );
};
