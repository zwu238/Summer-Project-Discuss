import React from "react";
import PropTypes from "prop-types";
import { Center, VStack, Button } from "native-base";
import { useSignIn } from "../hooks/use-sign-in";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { EmailAndPasswordForm } from "../../../components/EmailAndPasswordForm";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const SignInScreen = ({ navigation }) => {
  const [signIn, { isLoading, error }] = useSignIn();

  const handlePressOnForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={1}>
        <VStack space={4} alignItems="center" w="90%">
          <ErrorMessage error={error} />
          <EmailAndPasswordForm
            onSubmit={signIn}
            isLoading={isLoading}
            buttonText="Sign in"
          />
          <Button onPress={handlePressOnForgotPassword} style={styles.button}>
            Forgot password
          </Button>
        </VStack>
      </Center>
    </ImageBackground>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
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
