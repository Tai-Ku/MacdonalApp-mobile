import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignScreen, SplashScreen, WelComeScreen} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelComeScreen} />
        <Stack.Screen name="Signin" component={SignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
