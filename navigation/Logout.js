import React, { useEffect } from "react";
import useAuthContext from "../src/hooks/useAuthContext";
import { Alert } from "react-native";


//funcion para saber cuando este activa este tab


function Logout( {navigation}) {

  
  const { logout} = useAuthContext();
  const createTwoButtonAlert = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
        { text: "OK", onPress: () => logout() },
      ],
      { cancelable: false }
    );
  }

  createTwoButtonAlert();
  
  



  return null;

}

export default Logout;