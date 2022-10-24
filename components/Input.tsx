import React from 'react';
import {Text, TextInput, View} from 'react-native';

export const Input = ({label, config}: {label: string; config: {}}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...config} />
    </View>
  );
};
