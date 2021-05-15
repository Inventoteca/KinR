/**
 * Menú principal
 * Muestra un mesaje de bienvenida y tiene botones de las categorías principales.
 * Cada botón tiene un icono para identificarlo fácilmente.
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
    ScrollView,
    ImageBackground,
    StyleSheet,
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
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 4,
                padding: 6,
                backgroundColor: 'whitesmoke',
                margin: 4,
                alignItems: 'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 16 }}>
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

// justifyContent: 'center'
// resizeMode='contain'
/*<Image source={require('../assets/logo.png')} style={{width:320, height:60}} resizeMode='contain'/>*/
function Principal({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems:'stretch', 
            //justifyContent:'flex-start', 
            //backgroundColor: 'white',
            //padding: 24
        }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover'}}>
            <ScrollView contentContainerStyle={{ padding: 24 }}>
                <Text style={styles.titulo}>
                    ¡HOLA, <Text style={styles.cursiva}>TLEN, SKGATLEN!</Text>
                </Text>
                <Text style={styles.texto}>
                    Nos da gusto que te acerques a conocer el idioma y la cultura <Text style={styles.cursiva}>tutunakú.</Text>
                    El contenido de esta App considera la variante de Tuxtla, Puebla y Filomeno Mata, Veracruz.
                    Esperamos pronto agregar más variantes de este idioma a nuestro contenido.{"\n\n"}
                    ¡Que lo disfrutes!
                </Text>

                <BotonImgTxt source={require('../assets/_01/m1.png')} title="Gramática" onPress={() => navigation.navigate('Gramatica')} />
                <BotonImgTxt source={require('../assets/_01/m2.png')} title="Números" onPress={() => navigation.navigate('Numeros')} />
                <BotonImgTxt source={require('../assets/_01/m3.png')} title="Vocabulario" onPress={() => navigation.navigate('Vocabulario')} />
                <BotonImgTxt source={require('../assets/_01/m4.png')} title="Animales" onPress={() => navigation.navigate('Animales')} />
                <BotonImgTxt source={require('../assets/_01/m5.png')} title="Plantas" onPress={() => navigation.navigate('Plantas')} />
                <BotonImgTxt source={require('../assets/_01/m6.png')} title="Audiovisuales" onPress={() => navigation.navigate('Audiovisuales')} />
                <BotonImgTxt source={require('../assets/_01/m7.png')} title="Leyendas" onPress={() => navigation.navigate('Cuentos')} />
                <BotonImgTxt source={require('../assets/_01/m8.png')} title="Galería" onPress={() => navigation.navigate('Galeria')} />
                <BotonImgTxt source={require('../assets/_01/m9.png')} title="Conócenos" onPress={() => navigation.navigate('Conocenos')} />
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

export default Principal;