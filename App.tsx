import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/routes/Navigator';
import ExpenseContextProvider from './src/store/expense-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ExpenseContextProvider>
        <Navigator />
      </ExpenseContextProvider>
    </SafeAreaView>
  );
};

export default App;
