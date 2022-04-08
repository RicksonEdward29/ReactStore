import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function Button(){
      return(
      <View>
            <TouchableOpacity style={styles.btnContainer}>
                  <Text style={[styles.title, {fontSize: 16, color: 'white', lineHeight: 20}]}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
      </View>
      );
}

const styles = StyleSheet.create({
      container:{
            alignItems:'center',
            justifyContent: 'center',
      },
      btnContainer:{
            width: '90%',
            height: 50,
            backgroundColor: '#1FC730',
            marginHorizontal: '4%',
            borderRadius: 5,
            marginVertical: '5%',
            justifyContent: 'center',
            alignItems: 'center',
      },

});
