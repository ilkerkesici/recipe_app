import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Home, StockScreen} from 'screens';

const MainNavigator = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: 'white',
  },
  animationTypeForReplace: 'push',
};

function MainRoute() {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="HOME">
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="STOCK" component={StockScreen} />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName="HOME">
        <MainNavigator.Screen
          options={screenOptions}
          name="MAIN_STACK"
          component={MainRoute}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
