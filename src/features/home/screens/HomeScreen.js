import React from "react";
import PropTypes from "prop-types";
import {
  VStack,
  Center,
  Heading,
  Button,
  HStack,
  Stack,
  Flex,
} from "native-base";
import { useUserContext } from "../../../context/UserContext";
import { useSignOut } from "../../../hooks/use-sign-out";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const { user } = useUserContext();
  const [signOut, { isLoading }] = useSignOut();

  const handlePressOnUpdatePassword = () => {
    navigation.navigate("Reauthenticate");
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={3}>
        <Heading style={styles.topText}>Welcome to Discuss</Heading>

        <Flex style={styles.center}>
          <Button
            onPress={() => navigation.navigate("Join")}
            isLoading={isLoading}
            size="lg"
            style={styles.button}
          >
            Join Discussion!
          </Button>
        </Flex>
        <Flex style={styles.center}>
          <Button
            onPress={() => navigation.navigate("Create")}
            isLoading={isLoading}
            size="lg"
            style={styles.button}
          >
            Create Discussion!
          </Button>
        </Flex>

        <Flex style={styles.homeLayout}>
          <HStack space={5} alignItems="center" w="80%">
            <Button onPress={handlePressOnUpdatePassword} style={styles.button}>
              Update password
            </Button>
            <Button
              onPress={signOut}
              isLoading={isLoading}
              style={styles.button}
            >
              logout
            </Button>
          </HStack>
        </Flex>
      </Center>
    </ImageBackground>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    fontWeights: "medium",
    fontSize: 30,
  },

  homeLayout: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  backgroundColour: {
    backgroundColor: "#b2c7d8",
  },
  topText: {
    marginTop: 40,
    color: "white",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
