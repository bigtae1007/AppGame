import {useLayoutEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import {ExpenseOutput} from '../../../components/ExpensesOutput/ExpenseOutput';
import {WIDTH} from '../../constants/Device';
import {GlobalStyles} from '../../constants/styles';
import {DUMMY_EXPENSES} from '../../dummy';

const ManagePresenter = ({
  id,
  navigation,
}: {
  id: string | undefined;
  navigation: any;
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: id === undefined ? 'Add Expense' : 'Edit Expense',
    });
  }, [navigation, id]);

  const handleCancle = () => {
    navigation.goBack();
  };
  const handleUpdate = () => {
    navigation.goBack();
  };
  const handleDelete = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.btn_container}>
          <Button onPress={handleCancle} flat="ok" style={styles.btn_style}>
            Cancle
          </Button>
          <Button onPress={handleUpdate} style={styles.btn_style}>
            Update
          </Button>
        </View>
        <View style={styles.del_btn_container}>
          <Pressable onPress={handleDelete}>
            <View style={styles.del_btn_view}>
              <Text style={styles.del_btn_text}>삭제하기</Text>
            </View>
          </Pressable>
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
