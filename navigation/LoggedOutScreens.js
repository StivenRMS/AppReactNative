import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";


const LoggedOutStack = createStackNavigator();

export default function LoggedOutScreens() {

    return (
        <LoggedOutStack.Navigator>
        <LoggedOutStack.Screen name="Login" component={Login} />
        
        </LoggedOutStack.Navigator>

    );


}