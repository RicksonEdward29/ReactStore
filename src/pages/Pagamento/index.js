import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

export default function Pagamento({ navigation }){
    return(
        <SafeAreaView>
        <View style={styles.spaceHigher}>
            <Text style={styles.text}>CARREFOUR</Text>
            <AntDesign style={styles.iconArrow} name="arrowleft" size={30} color="#32CD32" />
            <Feather style={styles.iconCart} name="shopping-cart" size={25} color="#F0FFF0" />
            <TouchableOpacity style={styles.buttonHigher} onPress={() => navigation.navigate('Loading')}>
                    <Text style={{fontSize: 20, color: 'white',}}>12 | R$ 209,84</Text>
            </TouchableOpacity>
        <View>
            <Text style={styles.textPay}>Pagamento na entrega</Text>
            <AntDesign style={styles.iconCredit} name="creditcard" size={24} color="green" />
            <Text style={{fontSize: 20, color: "#32CD32", left: 55, top: 15,}}>Cartão de Débito ou Crédito</Text>
            <AntDesign style={styles.iconBarcode} name="barcode" size={24} color="black" />
            <Text style={styles.textMoney}>Dinheiro</Text>
            <View style={styles.lineHigher}></View>
            <Text style={styles.textPayapp}>Pagamento pelo aplicativo</Text>
            <Text style={styles.textCard}>Cartão de Débito ou Crédito</Text>
            <AntDesign style={styles.iconCredit} name="creditcard" size={24} color="green" />
            <View style={styles.lineMidle}></View>
            <Text style={styles.textDelivery}>Endereço de entrega:</Text>
            <Entypo style={styles.iconMap} name="location-pin" size={24} color="#32CD32" />
            <Text  style={styles.textAdress}>
            R. Padre Anchieta, 226 - Mercês, Curitiba - PR, 80430-060
            </Text>
            <Text style={styles.textEdit}>Editar</Text>
            <View style={styles.lineDown}></View>
            <Text style={styles.textTimedelivery}>Tempo de entrega:</Text>
            <Text style={styles.textMinutes}>60 minutos</Text>
            <TouchableOpacity style={styles.buttonDown} onPress={() => navigation.navigate('Loading')}>
                    <Text style={{fontSize: 25, color: 'white', top: 10,}}>Finalizar pedido</Text>
            </TouchableOpacity>
        </View>
            <View style={styles.quadrado}></View>
            </View>  
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',   
    },
    spaceHigher:{
        width: 500,
        height: 100,
        backgroundColor: '#363636',
    },
    text:{
        fontSize: 20,
        color:"white",
        left: 140,
        top: 10,
    },
    iconArrow:{
        top: -20,
        left: 10,
    },
    buttonHigher:{
        alignItems:'center',
        backgroundColor:'#32CD32',
        paddingBottom: 0,
        width: 180,
        top: -25,
        left: 45,
        borderRadius: 20,
    },
    textoButton:{
        backgroundColor:'white',
    },
    iconCart:{
        left: 10,
        top: 0,
    },
    textPay:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 10,
    },
    iconCredit:{
        top: 45,
        left: 15,
    },
    textCard:{
        fontSize: 20,
        color:"blue",
        left: 55,
        top: 25,
    },
    iconBarcode:{
        top: 45,
        left: 15,
    },
    textMoney:{
        fontSize: 20,
        color:"#32CD32",
        left: 55,
        top: 20,   
    },
    lineHigher:{
        width: 500,
        height: 2,
        top: 35,
        backgroundColor:'grey',
    },
    textPayapp:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 50,
    },
    iconCredit:{
        top: 40,
        left: 15,
    },
    textCard:{
        fontSize: 20,
        color:"#32CD32",
        left: 55,
        top: 65,
    },
    lineMidle:{
        width: 500,
        height: 2,
        top: 65,
        backgroundColor:'grey',
    },
    textDelivery:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 75,
    },
    iconMap:{
        top: 50,
        left: 300,  
    },
    textAdress:{
        fontSize: 15,
        color:"#32CD32",
        left: 15,
        top: 70,  
    },
    textEdit:{
        fontSize: 20,
        top: 2,
        left: 330,
        color:'#32CD32',
    },
    lineDown:{
        width: 500,
        height: 2,
        top: 95,
        backgroundColor:'grey',
    },
    textTimedelivery:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 110,
    },
    textMinutes:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 210,
        top: 82,
    },
    buttonDown:{
        alignItems:'center',
        backgroundColor:'#32CD32',
        paddingBottom: 20,
        width: 300,
        top: 90,
        left: 50,
        borderRadius: 15,
    }
});
