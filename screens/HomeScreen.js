import React from "react";
import { View, Text, Button } from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Vamos a Home2"
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
}
