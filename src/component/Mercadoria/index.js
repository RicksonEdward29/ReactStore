import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';


export default function Mercadoria(){

      function filterDesc(desc){
            if(desc.lenght < 27){
                  return desc;
            }
            return `${desc.substring(0, 20)}...`;
      }

      return(
      <TouchableOpacity style={styles.container}>
            <Image 
            source={require('../../assets/img1.png')}
            style={styles.mercadImg}
            />
            <Text style={styles.mercadText}>
                  {filterDesc('Whisk Escocês 750ml')}
            </Text>
            <Text style={styles.mercadText}>
                  R$89,99
            </Text>
            <Text>
            +
            </Text>
            <TextInput/>
            <Text>
            -
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
      }
});