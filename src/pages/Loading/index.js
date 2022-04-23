import React from 'react';
import { SafeAreaView, Text, View, StyleSheet,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Loading({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
        <View>
            <Image style={styles.Logo} source={require('../../assets/Logomarca.png')}/>
            <Text style={styles.Title}>Pedido Carrefour - Em andamento</Text>
        </View>
        <View>
            <AntDesign style={styles.iconClock} name="clockcircle" size={24} color="black" />
        </View>
        <View>
            <Text style={{left:10, marginTop:-80, fontSize:25,}}>00:35:50</Text>
        </View>
        <View>
            <AntDesign style={styles.iconCircle} name="checkcircle" size={25} color="#32CD32" />
            <AntDesign style={styles.iconCircle} name="checkcircle" size={25} color="#32CD32" />
            <AntDesign style={styles.iconCircle} name="checkcircle" size={25} color="#32CD32" />
            <AntDesign style={styles.iconEllipsi} name="ellipsis1" size={55} color="#00FF00" />
            <AntDesign style={styles.iconEllipsi} name="ellipsis1" size={55} color="#00FF00" />
        </View>
        <View>
            <Text style={{fontSize:15, position:'absolute', textAlign:'center', position:'absolute', margin: -110, color:'#C0C0C0' }}>Mercadorias sendo separadas</Text>
            <Text style={{fontSize:15, position:'absolute', textAlign:'center', position:'absolute', margin: -15, left:-100, color:'#C0C0C0' }}>Mercadorias em transporte</Text>
            <Text style={{fontSize: 15, color:'black', textAlign:'center', position:'absolute', top: 80, right:-65, color:'#C0C0C0'}}>Mercadorias a caminho</Text>
        </View>
        <View>
            <View style={styles.screenSup}></View>
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        backgroundColor:'white',
        marginTop: -150,
    },
    Title:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: -25,
        textAlign:'center',   
    },
    Logo:{
        width:300,
        height:59,
        margin:80,
        top: 30,  
    },
    iconClock:{
        right:70,
        margin: 50, 
    },
    iconCircle:{
        right:150,
        margin:35,
    },
    iconEllipsi:{
        marginTop: -120,
        margin:-5,
        right:-30,
        
    },
    screenSup:{
        backgroundColor:'#363636',
        width:500,
        height:130,
        marginTop:-500,
    }
});

