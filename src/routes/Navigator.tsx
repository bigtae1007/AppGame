import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {GlobalStyles} from '../constants/styles';
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
        <Tab.Screen
          name="Manage"
          component={Manage}
          options={{
            title: 'Manage Expenses',
            tabBarLabel: 'Manage',
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.error50,
            tabBarInactiveTintColor: 'grey',
            tabBarInactiveBackgroundColor: GlobalStyles.colors.primary400,
          }}
        />
        <Tab.Screen
          name="Recent"
          component={Recent}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.error50,
            tabBarInactiveTintColor: 'grey',
            tabBarInactiveBackgroundColor: GlobalStyles.colors.primary400,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab" screenOptions={{}}>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="All" component={All} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
