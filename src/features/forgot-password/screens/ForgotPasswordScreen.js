import React from "react";
import PropTypes from "prop-types";
import { Center, VStack, Text } from "native-base";
import { usePasswordReset } from "../hooks/use-password-reset";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { EmailForm } from "../components/EmailForm";
import { StyleSheet, ImageBackground } from "react-native";

export const ForgotPasswordScreen = ({ navigation }) => {
  const [sendPasswordReset, { isLoading, error }] = usePasswordReset();

  const handlePasswordReset = async (values) => {
    try {
      await sendPasswordReset(values);
      navigation.navigate("SignIn");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={1}>
        <VStack space={4} alignItems="center" w="90%">
          <Text>
            Please, enter your email address. You will receive link to create a
            new password via email.
          </Text>
          <ErrorMessage error={error} />
          <EmailForm onSubmit={handlePasswordReset} isLoading={isLoading} />
        </VStack>
      </Center>
    </ImageBackground>
  );
};

ForgotPasswordScreen.propTypes = {
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
