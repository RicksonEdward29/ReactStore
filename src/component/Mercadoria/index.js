import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button} from 'react-native';


export default function Mercadoria(props){

      function filterDesc(desc){
            if(desc.lenght < 27){
                  return desc;
            }
            return `${desc.substring(0, 20)}...`;
      }

      return(
      <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
            source={props.img}
            style={styles.mercadImg}
            />
            <Text style={styles.mercadText}>
                  {filterDesc(props.children)}
            </Text>
            <Text style={styles.mercadText}>
                  {props.cost}
            </Text>
            
      </TouchableOpacity>
      );
}
const styles = StyleSheet.create({
      container:{
            paddingVertical: '2%',
            alignItems: 'center',
            justifyContent: 'center',
      },
      mercadImg:{
            width: 70,
            height: 70
      },
      mercadText:{
            fontSize: 12,
      },
      input:{
        textAlign: 'center',
        flexDirection: 'row',
        height: 38,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center'
      },
});