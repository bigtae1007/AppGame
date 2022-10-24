import {useContext} from 'react';
import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {ExpensesContext} from '../../store/expense-context';

const AllPresenter = () => {
  const {expenses} = useContext(ExpensesContext);
  return (
    <>
      <ExpenseOutput expenses={expenses} period="ToTal" />
    </>
  );
};

export default AllPresenter;
