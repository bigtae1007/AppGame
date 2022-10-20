import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const HeaderRight = ({onPress}: any) => {
  return (
    <Pressable onPress={onPress}>
      <View style={style.view}>
        <Text style={style.text}>+</Text>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
