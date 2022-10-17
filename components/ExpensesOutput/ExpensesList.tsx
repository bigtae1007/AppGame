import React from 'react';
import {FlatList, Text} from 'react-native';
import {ExpenseItem} from './ExpenseItem';

export const ExpensesList = ({expenses}: {expenses: any}) => {
  return <FlatList data={expenses} renderItem={ExpenseItem} />;
};
