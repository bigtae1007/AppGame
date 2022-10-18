import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {DUMMY_EXPENSES} from '../../dummy';

const AllPresenter = () => {
  return (
    <>
      <ExpenseOutput expenses={DUMMY_EXPENSES} period="ToTal" />
    </>
  );
};

export default AllPresenter;
