import React, { useState } from "react";
import {  Image, Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";



const Senha = ({ navigation }) => {

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Logomarca.png')}
            style={styles.image}
        />
        <View >
            <TextInput 
                style={styles.input}
                placeholder='Digite seu Email'
                
            />
            <TextInput
                style={styles.input}
                placeholder='Digite a Nova Senha'
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder='Confirme sua Nova Senha'
                secureTextEntry={true}
            />
        </View>   
            <TouchableOpacity style={styles.buttonAlterarSenha}>
              <Text style={styles.textButton}>Confirmar Alteração</Text>
            </TouchableOpacity> 
      </View>
    );
}
export default Senha;
/* Estilização dos Componentes */
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#ffff",
      padding: 30,
    },
    image:{
      width: 350, 
      height: 250, 
      alignItems: "center",
      resizeMode:"contain",
    },
    input:{
      height: 35,
      fontSize: 16,
      color: "black",
      marginBottom: 35,
      marginLeft: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'silver',
    },
    buttonAlterarSenha:{
      borderRadius:15,
      width:250,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#00C013",
      paddingTop:0,
      paddingBottom:0,
      marginTop:25,
      height: 56,
      alignSelf: "center"
    },
    textButton:{
      fontSize:18,
      color:"#fff",
      fontWeight: "bold",
    },
});