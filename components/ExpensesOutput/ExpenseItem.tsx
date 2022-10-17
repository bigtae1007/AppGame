import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../src/constants/styles';
import {getFormattedDate} from '../../src/util/date';

export const ExpenseItem = ({item}: {item: any}) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text style={styles.desc_text}>{item.description}</Text>
          <Text style={styles.desc_text}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.price_view}>
          <Text style={styles.price_text}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 10,
    borderRadius: 6,
    marginTop: 15,
  },
  desc_text: {
    color: GlobalStyles.colors.primary50,
  },
  price_view: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  price_text: {
    color: GlobalStyles.colors.primary500,
  },
});
