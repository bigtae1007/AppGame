import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface props {
  children: string;
}

export default function PrimaryButton(props: props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
});
