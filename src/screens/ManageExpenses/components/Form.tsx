import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import {Input} from '../../../../components/Input';
import {GlobalStyles} from '../../../constants/styles';
import {IDataDto} from '../../../store/expense-context';

export interface IFormData {
  date: Date;
  description: string;
  amount: number;
}

interface FormProps {
  onUpdate: (data: IDataDto, id: string) => void;
  onCancle: () => void;
  id: string;
}

export const Form = ({onUpdate, onCancle, id}: FormProps) => {
  const [formData, setFormData] = useState<IFormData>({
    description: '',
    amount: 0,
    date: new Date(),
  });

  const onChangeHandler = (key: string, value: string) => {
    if (key === 'amount') {
      setFormData(item => ({...item, [key]: Number(value)}));
    }
    if (key === 'description') {
      setFormData(item => ({...item, [key]: value}));
    }
    if (key === 'date') {
      setFormData(item => ({...item, [key]: new Date(value)}));
    }
  };

  const onSubmitHandler = () => {
    let newDate;
    if (id !== undefined) {
      newDate = {...formData, id: id};
    } else {
      newDate = {...formData, id: new Date() + 'a'};
    }
    onUpdate(newDate, id);
  };

  return (
    <>
      <View>
        <Text style={styles.title}>Your Expenese</Text>
        <View style={styles.inputContainer}>
          <Input
            label="amount"
            config={{
              keyboardType: 'decimal-pad',
              onChangeText: onChangeHandler.bind(this, 'amount'),
            }}
            style={styles.input}
          />
          <Input
            label="date"
            config={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              onChangeText: onChangeHandler.bind(this, 'date'),
            }}
            style={styles.input}
          />
        </View>
        <Input
          label="description"
          config={{
            multiline: true,
            onChangeText: onChangeHandler.bind(this, 'description'),
          }}
        />
      </View>
      <View style={styles.btn_container}>
        <Button onPress={onCancle} flat="ok" style={styles.btn_style}>
          Cancle
        </Button>
        <Button onPress={onSubmitHandler} style={styles.btn_style}>
          {id !== undefined ? 'Update' : 'Add'}
        </Button>
      </View>
    </>
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
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_style: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
