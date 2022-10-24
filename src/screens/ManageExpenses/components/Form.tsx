import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../../../components/Input';

export const Form = () => {
  return (
    <View>
      <Input
        label="amount"
        config={{keyboardType: 'decimal-pad', onChangeText: () => {}}}
      />
      <Input
        label="date"
        config={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="description"
        config={{multiline: true, onChangeText: () => {}}}
      />
    </View>
  );
};
