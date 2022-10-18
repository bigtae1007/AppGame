import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Pressable} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import All from '../screens/AllExpenses';
import Manage from '../screens/ManageExpenses';
import Recent from '../screens/RecentExpenses';
import {HeaderRight} from '../UI/HeaderRight';

type RootStackParamList = {
  Manage: {id: string} | undefined;
  BottomTab: NativeStackScreenProps<TabParamList>;
};

type TabParamList = {
  All: undefined;
  Recent: undefined;
};

const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<TabParamList>();

  const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          tabBarActiveTintColor: GlobalStyles.colors.error50,
          tabBarInactiveTintColor: 'grey',
          tabBarInactiveBackgroundColor: GlobalStyles.colors.primary400,
          headerRight: () => (
            <HeaderRight
              onPress={() => {
                navigation.navigate('Manage');
              }}
            />
          ),
        })}>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All',
          }}
        />
        <Tab.Screen
          name="Recent"
          component={Recent}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Manage" component={Manage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
