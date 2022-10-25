import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalStyles} from '../src/constants/styles';

export const Input = ({
  label,
  config,
  style,
}: {
  label: string;
  config: any;
  style?: any;
}) => {
  let inputStlyes: any = [styles.input];

  if (config && config.multiline) {
    inputStlyes.push(styles.inputMultiline);
  }
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStlyes} {...config} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    color: GlobalStyles.colors.primary100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 5,
    padding: 10,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
