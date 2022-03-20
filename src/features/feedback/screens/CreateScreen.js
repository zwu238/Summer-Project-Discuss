import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  VStack,
  Center,
  Heading,
  Button,
  HStack,
  Stack,
  Flex,
  Input,
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "./global";

export const CreateScreen = ({ navigation }) => {
  const { user } = useUserContext();
  const [value, onChangeValue] = React.useState("");
  const myContext = useContext(AppContext);

  const handlePress = () => {
    var channelName = value;
    myContext.setIsHost(true);
    myContext.setChannel(channelName);
    navigation.navigate("Feedback");
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <Center flex={3}>
        <Flex>
          <FormControl isRequired>
            <FormControl.Label> Host Group Name </FormControl.Label>
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
              Create
            </Button>
          </View>
        </Flex>
        <Text>{myContext.isHost} </Text>
      </Center>
    </ImageBackground>
  );
};

CreateScreen.propTypes = {
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
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
