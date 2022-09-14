import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

interface props {
  children: string;
  onPress?: () => void;
}

export default function PrimaryButton(props: props) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: 'black'}}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#490226',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  //  ios 이벤트 설정하기
  pressed: {
    opacity: 0.75,
  },
});
