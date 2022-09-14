import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

interface Props {
  pickNumber: (number: number) => void;
}

export default function StartGameScreen({pickNumber}: Props) {
  const [enterNumber, setEnterNumber] = useState('');

  const handleNumberInput = (text: string) => {
    setEnterNumber(text);
  };

  const resetInput = () => {
    setEnterNumber('');
  };

  const handleConfirm = () => {
    const inputNumber = parseInt(enterNumber);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert('메시지', ' 내용', [
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => {
            resetInput();
          },
        },
        {
          text: 'NO',
          style: 'cancel',
          onPress: () => {
            resetInput();
          },
        },
      ]);
      return;
    }
    pickNumber(parseInt(enterNumber));
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        // 첫글자 대문자
        autoCapitalize="none"
        // 자동 수정 등
        autoCorrect={false}
        onChangeText={handleNumberInput}
        value={enterNumber}
      />
      <View style={styles.containerButton}>
        <View>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#72063c',
    borderRadius: 8,
    alignItems: 'center',
    // android 그림자 영역
    elevation: 4,
    // IOS 그림자
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    /*<----------------------------------------> */
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButton: {
    flexDirection: 'row',
  },
});
