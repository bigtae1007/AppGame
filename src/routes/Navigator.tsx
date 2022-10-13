import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import All from '../screens/AllExpenses';
import Manage from '../screens/ManageExpenses';
import Recent from '../screens/RecentExpenses';

type RootStackParamList = {
  All: undefined;
  BottomTab: NativeStackScreenProps<TabParamList>;
};

type TabParamList = {
  Manage: undefined;
  Recent: undefined;
};

const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<TabParamList>();

  const BottomTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Manage" component={Manage} />
        <Tab.Screen name="Recent" component={Recent} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All" component={All} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
