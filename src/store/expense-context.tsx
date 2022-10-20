import {createContext, useReducer} from 'react';
import {DUMMY_EXPENSES} from '../dummy';

export interface IDataDto {
  id: string;
  description: string;
  amout: number;
  date: Date;
}

type IType = 'ADD' | 'UPDATE' | 'DELETE';

export const ExpensesContext = createContext({
  expenses: [{date: '', amount: 0}],
  addExpense: (paload: IDataDto) => {},
  updateExpense: (id: string, payload: IDataDto) => {},
  deleteExpense: (id: string) => {},
});

const expensesReducer = (
  state: IDataDto[],
  action: {type: IType; payload: any},
) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {...action.payload}];

    case 'UPDATE':
      const newState = state.map(v => {
        return v.id === action.payload.id ? action.payload : v;
      });
      return newState;
    case 'DELETE':
      const deleteStae = state.filter(v => v.id !== action.payload.id);
      return deleteStae;
    default:
      return state;
  }
};

const ExpenseContextProvider = ({children}: any) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addFn = (payload: IDataDto) => {
    dispatch({type: 'ADD', payload});
  };
  const updateFn = (id: string, payload: IDataDto) => {
    dispatch({type: 'UPDATE', payload: {id, payload}});
  };
  const deleteFn = (id: string) => {
    dispatch({type: 'DELETE', payload: id});
  };

  const value = {
    expenses: expensesState,
    addExpense: addFn,
    updateExpense: updateFn,
    deleteExpense: deleteFn,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
