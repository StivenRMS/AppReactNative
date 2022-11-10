import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SubCategory1 from "../screens/SubCategory1";
import HomeScreen2 from "../screens/HomeScreen2";

const Stack = createStackNavigator();

export default function MainStackNavigator({ navigation }) {
  return (
    ///se declaran las pantallas que se van a mostrar en el stack
    
    <Stack.Navigator initialRouteName="HomeScreen2">
      <Stack.Screen
      name="HomeScreen2"
      component={HomeScreen2}
      options={{headerShown: false}}/>
      <Stack.Screen
        name="SubCategory1"
        component={SubCategory1}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
    
  );
}
