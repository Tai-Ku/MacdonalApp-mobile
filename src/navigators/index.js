import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgotPasswordScreen,
  RegisterPhone,
  SignScreen,
  SignUpScreen,
  SplashScreen,
  WelComeScreen,
} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName="Splash"
        initialRouteName="RegisterPhone">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelComeScreen} />
        <Stack.Screen name="Signin" component={SignScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
        <Stack.Screen name="RegisterPhone" component={RegisterPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
