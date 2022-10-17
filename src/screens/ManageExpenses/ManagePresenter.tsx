import {Text} from 'react-native';
import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {DUMMY_EXPENSES} from '../../dummy';

const ManagePresenter = () => {
  return (
    <>
      <ExpenseOutput expenses={DUMMY_EXPENSES} period="ToTal" />
    </>
  );
};

export default ManagePresenter;
