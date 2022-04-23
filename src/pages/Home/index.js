import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,SafeAreaView, TextInput, Page} from 'react-native';
import { MaterialIcons,Feather,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import Mercadoria from '../../component/Mercadoria';
import { withTheme } from 'styled-components';


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
            <Text style={{
                  color: 'white', 
                  fontSize: 22, 
                  textAlign:'center', 
                  marginRight: 135, 
                  marginVertical: 10}}> Carrefour </Text>
            <View style={{ 
                  borderWidth: 1,
                  borderColor: "thistle",
                  borderRadius: 40,
                  borderColor: 'green',
                  backgroundColor: 'green',
                  width: 180,
                  height: 50,
                  marginLeft: 205,
                  marginTop: -50,
            }}
            />
            <MaterialIcons style={styles.cart} name="shopping-cart"
                  size={30}
                  color="#00C013" onPress={()=>navigation.navigate('Pagamento')}>
            </MaterialIcons>
            </SafeAreaView>
            <Text style={{marginLeft: 255, marginTop: -45, fontSize: 18, color: 'white'}}> 5  |   R$ 89,99</Text>
            <TextInput style={styles.textPg}>
            <Ionicons
            name="md-search-sharp" 
            size={18} 
            color="#9A9A9A"
            />
            Pesquisar Produtos
            </TextInput>
      </View>
      <Image
      source={require('../../assets/banner.png')}
      style={styles.banner}
      resizeMode="cover"
      />
      <View style={styles.line}/>
      <ScrollView>
            <Text style={[styles.text, {marginVertical: '1%', marginHorizontal:'5%',}]}>Produtos</Text>
            <View style={{flexDirection:'column', padding: 25, marginHorizontal: '5%'}}>
                  <TouchableOpacity style={[{borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}]}>
                        <Mercadoria img={require('../../assets/img1.png')} cost="R$89,99" onClick={()=>navigation.navigate('Detail')}>
                        Whisky Escocês 750ml
                        </Mercadoria>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 130, marginTop: 10, marginBottom: -10, paddingTop: 3}]}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnContainer, {borderColor: '#C4C4C4', borderRadius: 15, borderWidth: 1, marginTop: 30}]}>
                        <Mercadoria img={require('../../assets/img2.png')} cost="R$49,99" onClick={()=>navigation.navigate('Detail')}>
                        Fraldinha Kg
                        </Mercadoria>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 130, marginTop: 10, marginBottom: -10, paddingTop: 3}]}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnContainer, {borderColor: '#C4C4C4', borderRadius: 15, borderWidth: 1, marginTop: 30}]}>
                        <Mercadoria img={require('../../assets/img3.png')} cost="R$29,99" onClick={()=>navigation.navigate('Detail')}>
                        Pernil
                        </Mercadoria>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 130, marginTop: 10, marginBottom: -10, paddingTop: 3}]}>+</Text>
                  </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column', padding: 25, marginHorizontal: '5%'}}>
                  <TouchableOpacity style={[{borderColor: '#C4C4C4', borderRadius: 10, borderWidth: 1}]}>
                        <Mercadoria img={require('../../assets/img4.png')} cost="R$2,99">
                        Gengibre
                        </Mercadoria>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 130, marginTop: 10, marginBottom: -10, paddingTop: 3}]}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnContainer, {borderColor: '#C4C4C4', borderRadius: 15, borderWidth: 1, marginTop: 30}]}>
                        <Mercadoria img={require('../../assets/img5.png')} cost="R$4,99">
                        Batata Baroa
                        </Mercadoria>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 130, marginTop: 10, marginBottom: -10, paddingTop: 3}]}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnContainer, {borderColor: '#C4C4C4', borderRadius: 15, borderWidth: 1, marginTop: 30}]}>
                        <Mercadoria img={require('../../assets/img6.png')} cost="R$12,90">
                        Pimentão Amarelo
                        </Mercadoria>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 130, marginTop: 10, marginBottom: -10, paddingTop: 3}]}>+</Text>
                  </TouchableOpacity>
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
      banner:{
            marginLeft: 35,
      },
      header:{
            marginBottom: 7
      },
      body:{
            backgroundColor: '#313131',
            top: 20,
      },
      cart:{
            color: 'white',
            bottom: 40,
            left: 215
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
            marginTop: 50,
            paddingTop:10,
            paddingBottom:10,
            width: 370,
            color:'#9A9A9A',
            fontSize: 16,
            textAlign:'center',
            backgroundColor:'white',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#9A9A9A',
            marginLeft: 10,
      },
});