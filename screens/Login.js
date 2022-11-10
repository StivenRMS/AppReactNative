import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getName } from "../api/ConsUsername";
import useAuthContext from "../src/hooks/useAuthContext";
import {getAutenticacion} from '../api/Autenticacion';

//declaramos las varables que vamos a usar

function Login({ navigation }) {
  const [spinerInterr, setSpinner] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuthContext();
  const [passwordUser, setPass] = useState(""); // se guarda la contraseña del usuario correcta
  const [usernameUser, setUser] = useState(""); // se guarda el usuario correcto
  //console.log("Este es el Usuario =>", usernameUser);
  //console.log("Este es el Password =>", passwordUser);
  //console.log("spinnerInterr =>", spinerInterr);
  var pass1="";
  var usu1="";
  //const json_Array = [];
  //console.log("Json =>", crear_json());
  

  const autenti_Api = async (x) => {
    try {
      const response= await getAutenticacion(x);
      console.log("Response =>", response);
    }
    catch (error) {
      console.log("Error =>", error);
    }
  } 


  const signin = async (x,y) => {
    setSpinner(true);
    setError("");
    try {
      const response = await getName(x);
      setTimeout(async() => {
      const nameArray = [];
      const { username, password } = y;
      for (const nameApi of response) {
        nameArray.push({
          name: nameApi.usuario_fname,
          name1: nameApi.usuario_nombre,
          image: nameApi.usuario_avatar,
          id: nameApi.usuario_id,
          email: nameApi.usuario_email,
          password: nameApi.usuario_clave,
        });
      }
      console.log(nameArray);
      nameArray.forEach((element) => {
        setUser(element.name1);
        setPass(element.password);
        pass1 =element.password;
        usu1 =element.name1;
      }
      );
      
      console.log("Este es el Usuario =>", usernameUser);
      console.log("Este es el Password =>", passwordUser);
      console.log("spinnerInterr =>", spinerInterr);
      if(usu1 == "" || pass1 == "")
      {setError("Verificar nombre de Usuario"), setSpinner(false)}else{
      if (usu1 === username || pass1 === password) {
        setSpinner(false);
        login();
        setError("Correcto");
      } else {
        setSpinner(false);
        setError("Usuario o contraseña incorrecta");
      }}}, 1000);
    } catch (error) {
      setSpinner(false);
      setError("ay algo mal");
    
  };};
 

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      console.log("Formulario enviado ...");
      setError("");
      signin(formValue.username, formValue);
        
      
    },
  });

  function validationSchema() {
    return {
      username: Yup.string().required("El Usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    };
  }

  /*function crear_json(formValue){
    var json = {
      "user": formValue.username,
      "pass": formValue.password,
    };
    json_Array.push(json);
    
    return json_Array;
  }*/
return (
  <View style={styles.container}>
    <Text style={styles.title}>Inicio de Sesión</Text>
    <TextInput
      style={styles.input}
      placeholder="usuario"
      value={formik.values.username}
      onChangeText={(text) => formik.setFieldValue("username", text)}
      autoCapitalize="none"
    />
    

    <TextInput
      style={styles.input}
      placeholder="password"
      value={formik.values.password}
      onChangeText={(text) => formik.setFieldValue("password", text)}
    />
    <Button
      style={{ color: "#ff5c5c" }}
      title="Entrar"
      onPress={formik.handleSubmit}
    />
    <ActivityIndicator
      size="large"
      color="#ff5c5c"
      animating={spinerInterr}
    />
    <Text style={styles.error}>{formik.errors.username}</Text>
    <Text style={styles.error}>{formik.errors.password}</Text>
    <Text style={styles.error}>{error}</Text>

    <StatusBar style="auto" />
  </View>
);
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: -100,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  error: {
    color: "red",
    marginTop: 16,
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Login;