import React, { useState } from "react";
import {  Image, Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";




const Cadastro = ({ navigation }) => {

    //const navigation = useNavigation();

       // const [nome, setNome] = useState('');
    //const [email, setEmail] = useState('');
      //  const [senha, setSenha] = useState('');
        //const [senhaConfirm, setSenhaConfirm] = useState('');
    

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Logomarca.png')}
            style={styles.image}
        />
        <View >
            <TextInput 
                style={styles.input}
                placeholder='Digite seu Nome Completo'
                 //value={nome}
                 //onChangeText={t=>setNome(t)}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite seu Email'
                 //value={email}
                 //onChangeText={t=>setEmail(t)}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite sua Senha'
                 //value={senha}
                 //onChangeText={t=>setSenha(t)}
            />
            <TextInput
                style={styles.input}
                placeholder='Confirme sua Senha'
                 //value={senhaConfirm}
                 //onChangeText={t=>setSenhaConfirm(t)}
            />
        </View>   
            <TouchableOpacity style={styles.buttonEntrar}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

            
      </View>
    );
}
export default Cadastro;
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
    marginBottom: 25,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
  buttonEntrar:{
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    width:250,
    backgroundColor:"#00C013",
    paddingTop:0,
    paddingBottom:0,
    marginTop:25,
    height: 56,
    alignSelf: 'center'
  },
  textButton:{
    fontSize:20,
    color:"#fff",
    fontWeight: "bold",
  },
  
});