import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from '../../../../components/Input';
import {GlobalStyles} from '../../../constants/styles';

export const Form = () => {
  return (
    <View>
      <Text style={styles.title}>Your Expenese</Text>
      <View style={styles.inputContainer}>
        <Input
          label="amount"
          config={{keyboardType: 'decimal-pad', onChangeText: () => {}}}
          style={styles.input}
        />
        <Input
          label="date"
          config={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.input}
        />
      </View>
      <Input
        label="description"
        config={{multiline: true, onChangeText: () => {}}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
  },
  input: {
    flex: 0.47,
  },
  title: {
    color: GlobalStyles.colors.primary200,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
});
