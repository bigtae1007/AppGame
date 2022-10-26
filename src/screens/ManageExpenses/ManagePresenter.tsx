import {useContext, useLayoutEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import {WIDTH} from '../../constants/Device';
import {GlobalStyles} from '../../constants/styles';
import {ExpensesContext, IDataDto} from '../../store/expense-context';
import {Form, IFormData} from './components/Form';

const ManagePresenter = ({id, navigation}: {id: string; navigation: any}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: id === undefined ? 'Add Expense' : 'Edit Expense',
    });
  }, [navigation, id]);
  const {addExpense, deleteExpense, updateExpense, expenses} =
    useContext(ExpensesContext);

  const handleCancle = () => {
    navigation.goBack();
  };
  const handleUpdate = (data: IDataDto, id: string) => {
    if (id !== undefined) {
      updateExpense(id, data);
    } else {
      addExpense(data);
    }
    navigation.goBack();
  };
  const handleDelete = () => {
    deleteExpense(id);
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <Form onCancle={handleCancle} onUpdate={handleUpdate} id={id} />
        <View style={styles.del_btn_container}>
          {id !== undefined && (
            <Pressable onPress={handleDelete}>
              <View style={styles.del_btn_view}>
                <Text style={styles.del_btn_text}>삭제하기</Text>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    </>
  );
};

export default ManagePresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary700,
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
  del_btn_container: {
    borderTopColor: GlobalStyles.colors.primary400,
    width: WIDTH - 30,
    borderTopWidth: 2,
    marginTop: 20,
  },
  del_btn_view: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  del_btn_text: {
    color: 'red',
  },
});
