import React, { Component } from "react";
import {  Image, Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login ({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Logomarca.png')}
            style={styles.image}
        />
  { /* Nessa etapa defini o container dos ícones e dos campos inputs */}
            <View style={styles.containerP}>
              <FontAwesome5 name="user-alt" size={24} color="silver" />
              <TextInput
                style={styles.input}
                placeholder='Email'
              />
            </View>    
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'silver'}} />
              </View>
            <View style={styles.containerP}>   
            <MaterialCommunityIcons name="lock" size={24} color="silver" />
              <TextInput
                style={styles.input}
                placeholder='Senha'
                secureTextEntry={true}
              />
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'silver'}} />
          </View>         
            {/* aqui defini os botões */}
            <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          <View style={{flexDirection: 'row', marginBottom: 40}}> 
            <TouchableOpacity style={styles.buttonSenha}
            onPress={() => navigation.navigate('Senha')}>
              <Text 
                style={styles.textSenha}>ESQUECI A SENHA
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCadastro}
              onPress={() => navigation.navigate('Cadastro')}>
            <Text  
            style={styles.textCadastro}>CADASTRAR
            </Text>
            </TouchableOpacity>            
          </View> 
            
            <TouchableOpacity style={styles.buttonGoogle}>
              <Text style={styles.textButton}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFace}>
              <Text style={styles.textButton}>Entrar com Facebook</Text>
            </TouchableOpacity>
      </View>
  );
}
/* Estilização dos Componentes */
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#ffff",
    padding: 30,
  },
  containerP:{
    flexDirection: 'row',
    marginLeft: 20, 
  },
  image:{
    width: 350, 
    height: 250, 
    alignItems: "center",
    resizeMode:"contain",
  },
  input:{
    height: 25,
    fontSize: 18,
    color: "black",
    marginBottom: 15,
    marginLeft: 30,
  },
  buttonEntrar:{
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    width:350,
    backgroundColor:"#00C013",
    paddingTop:14,
    paddingBottom:14,
    marginTop:10,
    height: 56,
  },
  textButton:{
    fontSize:17,
    color:"#fff",
    fontWeight: "bold",
  },
  buttonSenha:{
    borderRadius:5,
    alignItems:"flex-start",
    justifyContent:"center",
    width:150,
    backgroundColor:"#FFF",
    paddingTop:5,
    paddingBottom:5,
    marginTop:10,
    height: 40,
  },
  textSenha:{
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#00C013",
    textDecorationLine: "underline",
  },
  buttonCadastro:{
    borderRadius:5,
    marginLeft: 50,
    justifyContent:"center",
    width:150,
    backgroundColor:"#FFF",
    paddingTop:5,
    paddingBottom:5,
    marginTop:10,
    height: 40,
  },
  textCadastro:{
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#00C013",
    textAlign: 'right',
    textDecorationLine: "underline",
  },
  buttonGoogle:{
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    width:350,
    backgroundColor:"#EA4335",
    paddingTop:14,
    paddingBottom:14,
    marginTop:100,
    marginBottom:10,
    height: 56,
  },
  buttonFace:{
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    width:350,
    backgroundColor:"#3B5997",
    paddingTop:14,
    paddingBottom:14,
    marginTop:10,
    height: 56,
  },
  icons:{
    marginLeft: 5,
  }
});
