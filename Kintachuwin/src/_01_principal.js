/**
 * Menú principal
 * Muestra un mesaje de bienvenida y tiene botones de las categorías principales.
 * Cada botón tiene un icono para identificarlo fácilmente.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground,
} from 'react-native';
// importar componentes personalizados
import { BotonImgTxt, Styles } from './mis-componentes';

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
                <Text style={Styles.titulo}>
                    ¡HOLA, <Text style={Styles.cursiva}>TLEN, SKGATLEN!</Text>
                </Text>
                <Text style={Styles.texto}>
                    Nos da gusto que te acerques a conocer el idioma y la cultura <Text style={Styles.cursiva}>tutunakú.</Text>
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

export default Principal;