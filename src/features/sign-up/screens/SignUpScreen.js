import React from "react";

import { Center, VStack } from "native-base";
import { useSignUp } from "../hooks/use-sign-up";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { EmailAndPasswordForm } from "../../../components/EmailAndPasswordForm";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const SignUpScreen = () => {
  const [signUp, { isLoading, error }] = useSignUp();

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={1}>
        <VStack space={4} alignItems="center" w="90%">
          <ErrorMessage error={error} />
          <EmailAndPasswordForm
            onSubmit={signUp}
            isLoading={isLoading}
            withPasswordConfirmation={true}
          />
        </VStack>
      </Center>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
  },
  backgroundColour: {
    backgroundColor: "#b2c7d8",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
