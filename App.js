import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/context/AuthContext";
import SwitchAuthScreens from "./navigation/SwitchAuthScreens";


import "react-native-gesture-handler";



function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <SwitchAuthScreens />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
