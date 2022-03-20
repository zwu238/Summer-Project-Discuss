import React from "react";
import PropTypes from "prop-types";
import { VStack, Center } from "native-base";
import { useReauthenticate } from "../hooks/use-reauthenticate";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { EmailAndPasswordForm } from "../../../components/EmailAndPasswordForm";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const ReauthenticateScreen = ({ navigation }) => {
  const [reauthenticate, { isLoading, error }] = useReauthenticate();

  const handleReauthenticate = async (values) => {
    try {
      await reauthenticate(values);
      navigation.navigate("UpdatePassword");
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
          <ErrorMessage error={error} />
          <EmailAndPasswordForm
            onSubmit={handleReauthenticate}
            isLoading={isLoading}
            buttonText="Re-authenticate"
          />
        </VStack>
      </Center>
    </ImageBackground>
  );
};

ReauthenticateScreen.propTypes = {
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
