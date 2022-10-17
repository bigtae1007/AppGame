import {Text} from 'react-native';
import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {DUMMY_EXPENSES} from '../../dummy';

const RecentPresenter = () => {
  return (
    <>
      <ExpenseOutput expenses={DUMMY_EXPENSES} period="7 days" />
    </>
  );
};

export default RecentPresenter;
