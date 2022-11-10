import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  StackNavigation from "./StackNavigator";
import Logout from "./Logout";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen2 from "../screens/HomeScreen2";
import CardScreen from "../screens/CardScreen";




const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    ///se declaran las pantallas que se van a mostrar en el tab
    <Tab.Navigator initialRouteName="HomeScreen2">
      <Tab.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Card",
          tabBarIcon: () => <Icon name="credit-card" size={30} color="black" />,
        }}
      />

      <Tab.Screen
        name="HomeScreen2"
        component={StackNavigation}
        //activar el tabnavigator cuando este en esta pantalla
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: () => renderHome(), 
          /*Icon name="home" size={30} color="black" />*/
        }}
      />
      <Tab.Screen
        name="Exit"
        component={Logout}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="sign-out-alt" size={30} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;


function renderHome(){
  return(
    <Image
    source={require('../src/assets/home.png')}
    style={{width: 75, height: 75, top: -15}}
    />
  )
}
