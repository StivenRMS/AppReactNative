import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Detalles Screen</Text>
            <Button
                title="Ir a detalles... otra vez"
                onPress={() => navigation.push("Detalles")}
            />
            <Button title="Ir a Home" onPress={() => navigation.navigate("Home")} />
            <Button title="Regresar" onPress={() => navigation.goBack()} />
        </View>
    );
}
