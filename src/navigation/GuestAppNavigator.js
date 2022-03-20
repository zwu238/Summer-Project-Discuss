import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { GuestWelcomeScreen } from "../features/guest-welcome/screens/GuestWelcomeScreen";
import { SignInScreen } from "../features/sign-in/screens/SignInScreen";
import { SignUpScreen } from "../features/sign-up/screens/SignUpScreen";
import { ForgotPasswordScreen } from "../features/forgot-password/screens/ForgotPasswordScreen";
import { View, Text, StyleSheet } from "react-native";

const Stack = createStackNavigator();

export const GuestAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GuestWelcome"
      component={GuestWelcomeScreen}
      options={{
        title: "",
        headerTransparent: true,
        headerLeft: () => null,
        animationEnabled: "true",
      }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ title: "Sign In", animationEnabled: "true" }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ title: "Create Account", animationEnabled: "true" }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{ title: "Forgot Password", animationEnabled: "true" }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
  },
  backgroundColour: {
    backgroundColor: "#b2c7d8",
  },
});
