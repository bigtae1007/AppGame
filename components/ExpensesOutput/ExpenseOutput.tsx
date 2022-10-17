import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../src/constants/styles';
import {DUMMY_EXPENSES} from '../../src/dummy';
import {ExpensesList} from './ExpensesList';
import {ExpensesSummary} from './ExpensesSummary';

interface ExpenseOutputProps {
  expenses: any;
  period: any;
}

export const ExpenseOutput = ({expenses, period}: ExpenseOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} period={period} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    paddingVertical: 15,
  },
});
