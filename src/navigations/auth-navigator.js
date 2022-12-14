import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoarding, SignIn, SignUp } from "@scenes";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
