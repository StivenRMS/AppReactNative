import { View, Text, Button, StyleSheet, FlatList, Platform } from "react-native";
import React from "react";
import DataCard from "./DataCard";


export default function dataList(props) {
  const { data } = props;
  return (
    <View>
      <FlatList
        style={styles.FlatListStyle}
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => String(data.id_oferta)}
        renderItem={({ item }) => <DataCard data={item} />}
      />
      <View style={styles.buttonView}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FlatListStyle: {
    top:  Platform.os=== "android" ? "50%" : "35%",
  },

  titleCompany: {
    fontSize: 45,
    textAlign: "center",

    color: "#fff",
    fontWeight: "600",
  },
  titleSign: {
    fontSize: 35,
    textAlign: "right",

    color: "black",
    fontWeight: "500",
    marginRight: 250,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    paddingStart: 10,
    width: "80%",
    height: 50,
    marginTop: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 0.5,
  },
  button: {
    width: "80%",
    height: 90,
    marginTop: 10,
    
    
  },
  buttonView: {
    //top: "70%",

    bottom: "-55%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
   

  },
});


