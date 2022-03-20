import PropTypes from "prop-types";
import {
  VStack,
  Center,
  Heading,
  HStack,
  Stack,
  Flex,
  Input,
  Button,
  FormControl,
} from "native-base";
import { useUserContext } from "../../../context/UserContext";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import AppContext from "./global";
import { db } from "../../../api";

export const JoinScreen = ({ navigation }) => {
  const { user } = useUserContext();
  const [value, onChangeValue] = React.useState("");
  const myContext = useContext(AppContext);

  const handlePress = () => {
    var searchString = value;
    db.collection(searchString)
      .get()
      .then((snap) => {
        if (!snap.empty) {
          myContext.setChannel(value);
          navigation.navigate("Feedback");
        } else {
        }
      });
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={3}>
        <Flex>
          <FormControl isRequired>
            <FormControl.Label> Enter Host Name </FormControl.Label>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyLabel={"next"}
                onChangeText={(text) => onChangeValue(text)}
                value={value}
              />
            </View>
          </FormControl>

          <View>
            <Button onPress={handlePress} size="lg" style={styles.button}>
              Join
            </Button>
          </View>
          <Text></Text>
        </Flex>
      </Center>
    </ImageBackground>
  );
};

JoinScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    fontWeights: "medium",
    fontSizes: 92,
  },

  homeLayout: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  backgroundColour: {
    backgroundColor: "#b2c7d8",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    marginBottom: 36,

    display: "block",
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
