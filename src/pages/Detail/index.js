import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Button from '../../component/Button';


export default function Detail({ navigation }) {
      navigation.setOptions({
            headerTitle: 'Detalhes'
      })

      return (
            <ScrollView>
                  <Image
                        source={require('../../assets/img1.png')}
                        style={styles.image}
                        resizeMode="cover"
                  />
                  <View>
                        <View>
                              <Text style={[styles.title, { fontSize: 30, color: '#000' }]}>Whisk Garrafa 750 ml</Text>
                        </View>
                        <View>
                              <Text style={[styles.title, { fontSize: 14, color: '#313131' }]}>Marca: Ballantine's</Text>
                        </View>
                        <View>
                              <Text style={[styles.title, { fontSize: 24, color: '#085FE2' }]}>R$89,90</Text>
                        </View>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#9A9A9A', textAlign: 'center', marginLeft: 120, marginTop: 10, marginBottom: -67, paddingTop: 3}]}>-</Text>
                        <TextInput style={[{width: 35, height:30, color: 'black', textAlign: 'center', marginLeft: 170, marginTop: 35, marginBottom: -10, paddingTop: 3}]}>0</TextInput>
                        <Text style={[{color: 'white', width: 35, height:30, borderRadius: 5, backgroundColor: '#1FC730', textAlign: 'center', marginLeft: 220, marginBottom: -10, marginTop: -20, paddingTop: 3}]}>+</Text>
                  </View>
                  <Button/>
                  <View style={styles.textContent}>
                        <Text style={[styles.textTitle, {marginHorizontal: '2%'}]}>
                              Informações: Whisk Escocês 750 Ml
                        </Text>
                        <Text style={styles.textContent}>
                              Faça a diferença com esta extraordinária bebida. Aprecie e sirva a seus convidados uma bebida que reúne qualidade e aroma inigualável.Criado em 1910 pela família Ballantine¿s e até hoje mantém suas características inconfundíveis: sutil, doce e com um toque final de baunilha.
                              São mais de 40 maltes e grãos, que são cuidadosamente selecionados de 4 diferentes regiões icônicas escocesas, compõem seu blend. Tais ingredientes garantem ao Ballantines Finest um sabor bem balanceado e com leves tons de chocolate, maça e baunilha, conta com graduação alcoólica de 40%. 
                              Um drink que esbanja luxo e sofisticação. Aproveite!
                        </Text>
                  </View>
            </ScrollView>
      );
}

const styles = StyleSheet.create({
      container: {
            width: '100%',
            backgroundColor: '#fff',
      },
      image: {
            width: '100%',
            height: 500,
      },
      title: {
            textAlign:'center',
            paddingHorizontal: '2%',
      },
      textContent:{
            lineHeight: 22,
            marginVertical: '2%',
            paddingHorizontal: '2%',
      },
});