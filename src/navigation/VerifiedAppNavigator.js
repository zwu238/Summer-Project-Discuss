import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../features/home/screens/HomeScreen";
import { ReauthenticateScreen } from "../features/update-password/screens/ReauthenticateScreen";
import { UpdatePasswordScreen } from "../features/update-password/screens/UpdatePasswordScreen";
import { View, Text, StyleSheet } from "react-native";
import { JoinScreen } from "../features/feedback/screens/JoinScreen";
import { CreateScreen } from "../features/feedback/screens/CreateScreen";
import { FeedbackScreen } from "../features/feedback/screens/FeedbackScreen";
import AppContext from "../features/feedback/screens/global";
import { useContext } from "react";

const Stack = createStackNavigator();

export const VerifiedAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => null,
          animationEnabled: "true",
        }}
      />
      <Stack.Screen
        name="Reauthenticate"
        component={ReauthenticateScreen}
        options={{ title: "Sign in", animationEnabled: "true" }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePasswordScreen}
        options={{ title: "Update Password", animationEnabled: "true" }}
      />
      <Stack.Screen
        name="Join"
        component={JoinScreen}
        options={{ title: "Enter your code", animationEnabled: "true" }}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: "Host your discussion", animationEnabled: "true" }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{ title: "", animationEnabled: "true" }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  backgroundColour: {
    backgroundColor: "#b2c7d8",
  },
});
