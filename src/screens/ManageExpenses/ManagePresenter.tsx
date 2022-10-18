import {useLayoutEffect} from 'react';
import {Text} from 'react-native';
import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {DUMMY_EXPENSES} from '../../dummy';

const ManagePresenter = ({
  id,
  navigation,
}: {
  id: string | undefined;
  navigation: any;
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: id === undefined ? 'Add Expense' : 'Edit Expense',
    });
  }, [navigation, id]);
  return (
    <>
      <Text>12345</Text>
    </>
  );
};

export default ManagePresenter;
