/**
 * Gramática
 * Contiene descripción corta y 3 sub-categorías
 */

import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native'; //varios elementos

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View style={{ alignItems: 'flex-start' }} >
            <Image source={props.source} style={{ width: w, height: h }} />
        </View>
    );
}

const Boton = (props) => {
    return (
        <TouchableOpacity 
            style={{
                borderColor:'gray', 
                borderWidth:1, 
                borderRadius:4, 
                padding:6, 
                backgroundColor:'whitesmoke', 
                margin:4,
                alignItems:'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{fontFamily:'OpenSans-Regular', fontSize:16}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const BotonImgTxt = (props) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 0,
                borderRadius: 4,
                padding: 4,
                backgroundColor: 'whitesmoke',
                margin: 6,
                alignItems: 'center',
                flexDirection: 'row', //horizontal
                shadowColor: 'black',
                shadowRadius: 8, //solo iOS
                elevation: 6,
            }}
            onPress={props.onPress}
        >
            <Imgn source={props.source} width={64} />

            <Text style={{flex: 1, fontFamily: 'OpenSans-Regular', fontSize: 16, marginLeft: 32 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

/*<Image source={require('../assets/logo.png')} style={{width:320, height:60}} resizeMode='contain'/>*/
function Gramatica({ navigation }) {
    return (
        <View style={{
            flex:1, 
            //alignItems:'stretch', 
            //justifyContent:'flex-start', 
            //backgroundColor:'white', 
            //padding:24
        }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
            <ScrollView contentContainerStyle={{ padding: 24 }}>
                <Text style={styles.titulo}>
                    GRAMÁTICA
                </Text>
                <Text style={styles.autor}>
                    Por Gabriela Lucas, José Santiago y Juan M. Díaz
                </Text>
                <Text style={styles.texto}>
                    En esta sección encontrarás información lingüística sobre la estructura de las palabras 
                    del idioma <Text style={styles.cursiva}>tutunakú</Text> en la variante central del Sur.
                </Text>
                
                <BotonImgTxt source={require('../assets/_10/gra.png')} title="Grafías" onPress={() => navigation.navigate('Grafias')} />
                <BotonImgTxt source={require('../assets/_10/pro.png')} title="Pronombres posesivos" onPress={() => navigation.navigate('Pronombres')} />
                <BotonImgTxt source={require('../assets/_10/pre.png')} title="Prefijos posesivos" onPress={() => navigation.navigate('Prefijos')} />
            </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        // Título normal
        fontSize:20, fontFamily:'OpenSans-Bold', backgroundColor: '#FFFFFFd0'
    },
    texto: {
        // Texto normal
        fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24, backgroundColor: '#FFFFFFd0'
    },
    cursiva: {
        // Usar dentro de un bloque normal para cambiar a cursiva
        fontStyle:'italic', fontWeight:'normal'
    },
    autor: {
        // Texto de bajo peso para nombres de autores
        fontSize:16, fontFamily:'OpenSans-Light', backgroundColor: '#FFFFFFd0'
    },
    tutunaku: {
        // Texto en cursivas para bloques escritos solo en tutunakú
        fontSize:16, fontFamily:'OpenSans-Italic', marginTop:24, marginBottom:24
    }
});

export default Gramatica;