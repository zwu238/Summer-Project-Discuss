import React, { useState } from "react";

import { Center, Spinner } from "native-base";
import { ErrorMessage } from "./components/ErrorMessage";
import { useUserContext } from "./context/UserContext";
import { GuestAppNavigator } from "./navigation/GuestAppNavigator";
import { UnverifiedAppNavigator } from "./navigation/UnverifiedAppNavigator";
import { VerifiedAppNavigator } from "./navigation/VerifiedAppNavigator";
import AppContext from "./features/feedback/screens/global";

export const App = () => {
  const { user, isLoading, error } = useUserContext();

  const [isHost, setIsHost] = useState(false);
  const [channel, setChannel] = useState("");

  const userSettings = {
    hostSetting: isHost,
    channelSetting: channel,
    setIsHost,
    setChannel,
  };

  if (error)
    return (
      <Center flex={1}>
        <ErrorMessage error={error} />
      </Center>
    );

  if (isLoading)
    return (
      <Center flex={1} accessibilityLabel="Loading user profile...">
        <Spinner />
      </Center>
    );

  if (user && user.emailVerified)
    return (
      <AppContext.Provider value={userSettings}>
        <VerifiedAppNavigator />
      </AppContext.Provider>
    );

  if (user) return <UnverifiedAppNavigator />;

  return <GuestAppNavigator />;
};
