import React from "react";
import useAuthContext from "../src/hooks/useAuthContext";
import BottomTabNavigator from "../navigation/TabNavigator";
import Login from "../screens/Login";



function SwitchAuthScreens() {
  const { isLoggedIn } = useAuthContext();
  if (isLoggedIn) {
    return <BottomTabNavigator />;
  }
  return <Login />;
}


export default SwitchAuthScreens;
