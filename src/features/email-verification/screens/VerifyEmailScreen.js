import React from "react";
import { VStack, Center, Heading, Text, Button } from "native-base";
import { useSendVerification } from "../hooks/use-send-verification";
import { useUserContext } from "../../../context/UserContext";
import { useSignOut } from "../../../hooks/use-sign-out";
import { StyleSheet, ImageBackground } from "react-native";

export const VerifyEmailScreen = () => {
  const { reload: reloadUser, isLoading: isReloadingUser } = useUserContext();
  const [sendVerification, { isLoading: isResendingVerification }] =
    useSendVerification();
  const [signOut, { isLoading: isSigninOut }] = useSignOut();

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={1}>
        <VStack space={4} alignItems="center" w="90%">
          <Heading>Check your email</Heading>
          <Text>
            We sent you an email with instructions on how to verify your email
            address. Click on the link in the email to get started.
          </Text>
          <Button
            onPress={reloadUser}
            isLoading={isReloadingUser}
            style={styles.button}
          >
            Done
          </Button>
          <Button
            onPress={sendVerification}
            isLoading={isResendingVerification}
            style={styles.button}
          >
            Resend
          </Button>
          <Button
            onPress={signOut}
            isLoading={isSigninOut}
            style={styles.button}
          >
            Cancel
          </Button>
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
