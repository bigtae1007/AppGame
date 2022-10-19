import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../src/constants/styles';

interface ButtonProps {
  onPress: () => void;
  children: string;
  flat?: string;
  style: {};
}
const Button = ({children, onPress, flat, style}: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        style={({pressed}) => pressed && styles.press}
        onPress={onPress}>
        <View
          style={flat !== undefined ? styles.flat_btn_view : styles.btn_view}>
          <Text
            style={flat !== undefined ? styles.flat_btn_text : styles.btn_text}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn_view: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btn_text: {
    color: 'white',
  },
  flat_btn_view: {
    backgroundColor: GlobalStyles.colors.primary200,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  flat_btn_text: {
    color: 'white',
  },
  press: {
    opacity: 0.6,
  },
});
