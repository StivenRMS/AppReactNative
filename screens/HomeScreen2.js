import React from "react";
import { SafeAreaView, Button, Text} from "react-native";
import { useEffect, useState } from "react";
import DataList from "../components/dataList";
import { getData, getInfoComerc } from "../api/Consulta";
import Encabezado from "../components/Encabezado";
import { useNavigation } from "@react-navigation/native";



const HomeScreen2=() =>{

 //SearchBar
const navigation = useNavigation();
useEffect(() => {
  navigation.setOptions({
    headerShown: true,
    headerLargeTitle: true,
    headerTitle: "Home",
    headerSearchBar: true,
    headerSearchBarPlaceholder: "Search",
  });
}, [navigation]);


const [data, setData] = useState([]);
const [infoComerc, setInfoComerc] = useState([]);
var comerciante_Id = "";


 console.log('Datos --->',data);
  //console.log('InfoComerc --->',infoComerc);
  //console.log('imagenApi --->',imagenApi);
 
 

  useEffect(() => {
    (async () => {
      await loaddata();
    })();
  }, []);

  /*useEffect(() => {
    (async () => {
      await loadDataComerciante(comerciante_Id);
    })();
  }, []);*/


  const loaddata = async () => {//consulta de datos de ofertas
    try {
      const response = await getData();// mos devuelve un array de objetos DEL API
      //console.log(result);
      const dataArray = [];
      for await (const dataAPi of response) {// sacmaos los datos que neceitamos
        dataArray.push({
          id_oferta: dataAPi.id_oferta,
          name: dataAPi.com_nombre,
          descripcion: dataAPi.descripcion,
          id_comerciante: dataAPi.id_comerciante,
          // aqui consultamos otra api para obyener la imagen
          imagen: await getInfoComerc(dataAPi.id_comerciante),

        });
      }
     
      setData([...data, ...dataArray]); 
     // console.log("id_comerciante",comerciante_Id)
    } catch (error) {
      console.error(error);
    }
    
  };
  

  


 
 // console.log('InfoComerc --->',comerciante_Id);
  return (
    //style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    <SafeAreaView>
  
      <DataList data={data} />
    </SafeAreaView>
  );
}

export default HomeScreen2;