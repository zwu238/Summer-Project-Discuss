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
} from "native-base";
import { useUserContext } from "../../../context/UserContext";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { GiftedChat, Time, Day } from "react-native-gifted-chat";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import { db } from "../../../api";
import AppContext from "./global";

export const FeedbackScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const myContext = useContext(AppContext);
  const { user } = useUserContext();

  const renderTime = (props) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: {
            color: "black",
          },
          right: {
            color: "black",
          },
        }}
      />
    );
  };

  const renderDay = (props) => {
    return <Day {...props} textStyle={{ color: "black" }} />;
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );

    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection("chats").add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      <GiftedChat
        messages={messages}
        renderTime={(prop) => renderTime(prop)}
        renderDay={(prop) => renderDay(prop)}
        renderAvatar={() => null} // does not display any user avatars
        maxInputLength={500}
        placeholder={"Type your feedback here"}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user.email,
          name: user.email,
        }}
      />
    </ImageBackground>
  );
};

FeedbackScreen.propTypes = {
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
