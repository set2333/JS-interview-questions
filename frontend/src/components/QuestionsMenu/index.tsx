import { FC } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { questionsApi } from '../../store/services/questions';
import { ACTIONS } from '../../store';
import { useDispatch } from 'react-redux';

type MenuItem = Required<MenuProps>['items'][number];

export const QuestionsMenu: FC = () => {
  const { data } = questionsApi.useGetQuestionTypesQuery('');
  const dispatch = useDispatch();
  const items: MenuItem[] = data?.map(({ id, label }) => ({ key: id, label })) || [];

  return (
    <Menu
      mode="horizontal"
      items={items}
      onClick={(event: { key: string }) => dispatch(ACTIONS.setCurrentQuestionType(event?.key))}
    />
  );
};
