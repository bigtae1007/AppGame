import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameScreen from '../screens/GameScreen';
import StartGameScreen, {Main} from '../screens/StartGameScreen';
import GameOverScreen from '../screens/GameOverScreen';

const Stack = createNativeStackNavigator<Main>();

const RouteNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartGame"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="GameOver" component={GameOverScreen} />
        <Stack.Screen name="StartGame" component={StartGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigate;
