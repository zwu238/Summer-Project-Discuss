import React from "react";
import PropTypes from "prop-types";
import { VStack, Center, Button } from "native-base";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export const GuestWelcomeScreen = ({ navigation }) => {
  const handlePressOnSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handlePressOnSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={2}>
        <View style={styles.textLocation}>
          <Text style={styles.textLogo}>Discuss</Text>
        </View>
        <VStack space={4} alignItems="center" w="90%">
          <Center>
            <View style={{ marginBottom: 20 }}>
              <Image
                source={require("../../../../assets/favicon.png")}
                style={{ width: 30, height: 30, alignSelf: "center" }}
              />
            </View>
            <Button onPress={handlePressOnSignIn} style={styles.button}>
              Sign In
            </Button>
          </Center>
          <Center>
            <Button onPress={handlePressOnSignUp} style={styles.button}>
              Sign Up
            </Button>
          </Center>
        </VStack>
      </Center>
    </ImageBackground>
  );
};

GuestWelcomeScreen.propTypes = {
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
  textLogo: {
    fontSize: 40,
    color: "white",
  },
  textLocation: {
    marginBottom: 300,
  },
});
