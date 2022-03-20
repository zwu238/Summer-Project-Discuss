import React from "react";
import PropTypes from "prop-types";
import { VStack, Center } from "native-base";
import { useUpdatePassword } from "../hooks/use-update-password";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { UpdatePasswordForm } from "../components/UpdatePasswordForm";

export const UpdatePasswordScreen = ({ navigation }) => {
  const [updatePassword, { isLoading, error }] = useUpdatePassword();

  const handleUpdatePassword = async (values) => {
    try {
      await updatePassword(values);
      navigation.popToTop();
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
          <UpdatePasswordForm
            onSubmit={handleUpdatePassword}
            isLoading={isLoading}
          />
        </VStack>
      </Center>
    </ImageBackground>
  );
};

UpdatePasswordScreen.propTypes = {
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
