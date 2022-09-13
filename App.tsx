import {StyleSheet, View} from 'react-native';
import RouteNavigate from './route/Navigate';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RouteNavigate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
