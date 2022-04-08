import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,SafeAreaView, TextInput, Page} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import Mercadoria from '../../component/Mercadoria';
import { Ionicons } from '@expo/vector-icons'; 


export default function Home() {
      const navigation = useNavigation();
      return (
      <View style={styles.container}>
            <View style={styles.header}>
            <SafeAreaView
            style={styles.body}> 
            <Feather style={styles.feather}
                  name="arrow-left"
                  size={30}
                  color="#1FC730"
            />
            <Text style={{color: 'white', fontSize: 26, marginLeft: '20%'}}>Carrefour</Text>
            <MaterialIcons style={styles.cart}
                  name="shopping-cart"
                  size={30}
                  color="#00C013"
            />
            </SafeAreaView>
            
      
            <View style={styles.textContainer}>
                  <Text style={styles.text}>Lista</Text>
                  <Text style={[styles.text, {color: '#DDD' }]}>-</Text>
                  <Text style={styles.text}>Produtos</Text>
                  <TouchableOpacity style={{position:'absolute' , right: 0, alignSelf: 'center'}}>
                        <MaterialIcons
                              name="filter-list"
                              size={24}
                              color="#000"
                        />
                  </TouchableOpacity>
            </View>
      </View>
      
      <TextInput style={styles.textPg}>
      <Ionicons 
      name="md-search-sharp" 
      size={24} 
      color="black"
      />
      Pesquisar Produtos
      </TextInput>
      
      <View style={styles.line}/>
      <ScrollView>
            <Text style={[styles.text, {marginVertical: '1%', marginHorizontal:'1%',}]}>Produtos</Text>
            
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <Mercadoria img={require('../../assets/img1.png')} cost="R$89,99" onClick={()=>navigation.navigate('Detail')}>
                  Whisky Escocês 750ml
                  </Mercadoria>
                  <Mercadoria img={require('../../assets/img2.png')} cost="R$49,99" onClick={()=>navigation.navigate('Detail')}>
                  Patinho
                  </Mercadoria>
                  <Mercadoria img={require('../../assets/img3.png')} cost="R$19,99">
                  Pernil
                  </Mercadoria>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <Mercadoria img={require('../../assets/img4.png')} cost="R$2,99">
                  Gengibre
                  </Mercadoria>
                  <Mercadoria img={require('../../assets/img5.png')} cost="R$4,99">
                  Batata Baroa
                  </Mercadoria>
                  <Mercadoria img={require('../../assets/img6.png')} cost="R$12,90">
                  Pimentão Amarelo
                  </Mercadoria>
            </View>

      </ScrollView>

      </View>
      );
}

const styles = StyleSheet.create({
      container:{
            flex:1,
            width:'100%',
            backgroundColor: '#FFF'
      },
      header:{
            marginBottom: 7
      },
      body:{
            backgroundColor: '#313131',
            top: 25,
      },
      cart:{
            bottom: 25,
            left: 300
      },
      feather:{
          top: 40,
          left: 25,
      },
      textContainer:{
            flexDirection: 'row',
            marginVertical: '15%',
            marginHorizontal:'5%'
      },
      text:{
            fontSize: 26,            
      },
      line:{
            borderBottomColor:'rgba(49, 49, 49, 0.4)',
            borderBottomWidth:1,
            marginTop:10
      },
      textPg:{
            paddingTop:10,
            paddingBottom:10,
            width: '70%',
            color:'white',
            textAlign:'center',
            backgroundColor:'#9A9A9A',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#000',
            marginLeft: 55,
      },
});