import {useContext} from 'react';
import {Text} from 'react-native';
import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {DUMMY_EXPENSES} from '../../dummy';
import {ExpensesContext} from '../../store/expense-context';
import {getDateMinusDays} from '../../util/date';

const RecentPresenter = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentDate = () => {
    return expensesCtx.expenses.filter(v => {
      return v.date.toString() > getDateMinusDays(new Date(), 7).toString();
    });
  };

  console.log(recentDate());
  return (
    <>
      <ExpenseOutput expenses={recentDate()} period="7 days" />
    </>
  );
};

export default RecentPresenter;
