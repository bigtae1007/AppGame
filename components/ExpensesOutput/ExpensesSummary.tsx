import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../src/constants/styles';

export const ExpensesSummary = ({
  expenses,
  period,
}: {
  expenses: any;
  period: any;
}) => {
  const sum = expenses.reduce((sum: any, item: any) => {
    return sum + item.amount;
  }, 0);

  return (
    <View style={styles.contianer}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.price_text}>$ {sum.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    padding: 5,
    marginHorizontal: 15,
  },
  period: {
    color: GlobalStyles.colors.primary200,
    fontWeight: 'bold',
  },
  price_text: {
    color: GlobalStyles.colors.primary800,
    fontWeight: 'bold',
  },
});
