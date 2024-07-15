import { FC } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { questionsApi } from '../../store/services/questions';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS, RootState } from '../../store';

type MenuItem = Required<MenuProps>['items'][number];

export const QuestionList: FC = () => {
  const dispatch = useDispatch();
  const currentQuestionType = useSelector(
    (state: RootState) => state.currentQuestion.currentQuestionType
  );
  const { data } = questionsApi.useGetQuestionsQuery(currentQuestionType);
  const items: MenuItem[] = data?.map(({ id, question }) => ({
    key: id,
    label: question,
  })) || [];

  return (
    <Menu
      mode="vertical"
      items={items}
      style={{ width: '20%' }}
      onClick={(event:  { key: string }) => dispatch(ACTIONS.setCurrentQuestion(event?.key))}
    />
  );
};
