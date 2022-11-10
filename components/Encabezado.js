import { View, Image, StyleSheet, Platform} from 'react-native'
import React from 'react'
import encabezado from '../src/assets/encabezado.png'

export default function Encabezado() {
  return (
    <View style={styles.imagenView}>
      <Image source={encabezado} style={styles.imag}/>
    </View>
  )
}

const styles = StyleSheet.create({

    imagenView: {
       top: Platform.os=== "android" ? "-30%" : "-25%",
         borderRadius: 15,
         backgroundColor: "red",
            flex: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            
            
    },
    imag:{
        width: 350,
        height: 500,
        resizeMode: 'contain',
    }

    })

