import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";


const DataCard = (props) => {
  const { data } = props;
  const navigation = useNavigation();

  const Ruta = () => {
    navigation.navigate("SubCategory1");
    console.log("Ruta");
  };

  const goToDetalles = () => {
    //console.log(data.id);
    console.log(data.id);

    //navigation.navigate("SubCategory1");

    //usar el StackNavigator para ir a la pantalla de detalles
  };
  return (
    <TouchableWithoutFeedback onPress={Ruta} >
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Image source={{ uri: data.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default DataCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "grey",
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",

    /*position: "absolute",
        bottom: 2,
        right: 18,
        width:90,
        height:90,*/
  },
  name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
  },
});
