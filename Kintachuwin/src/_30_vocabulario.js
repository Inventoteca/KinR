/**
 * Vocabularios
 * Contiene una descripción y botones para elegir diferentes sub-categorías.
 * Las imágenes de los botones están en orden alfabético.
 * Las imágenes de las sub-categorías están en carpetas ordenadas conforme
 * se agregaron.
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

function Vocabulario({ navigation }) {
    return (
        <View style={{flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
            <ScrollView contentContainerStyle={{ padding: 24 }}>
                <Text style={Styles.titulo}>
                    VOCABULARIO
                </Text>
                <Text style={Styles.autor}>
                    Por Gabriela Lucas,  Juan M. Díaz y Citlal Solano
                </Text>
                <Text style={Styles.texto}>
                    En esta sección encontrarás vocabulario básico en idioma 
                    <Text style={Styles.cursiva}> tutunakú</Text>, incluyendo su escritura
                    y audios para practicar su pronunciación en la variante central del Sur.
                </Text>

                <BotonImgTxt source={require('../assets/_30/v01.png')} title="Adverbios de lugar" onPress={() => navigation.navigate('Adver')} />
                <BotonImgTxt source={require('../assets/_30/v02.png')} title="Colores" onPress={() => navigation.navigate('Colores')} />
                <BotonImgTxt source={require('../assets/_30/v03.png')} title="Elementos naturales" onPress={() => navigation.navigate('Elementos')} />
                <BotonImgTxt source={require('../assets/_30/v04.png')} title="Integrantes de la familia" onPress={() => navigation.navigate('Familia')} />
                <BotonImgTxt source={require('../assets/_30/v05.png')} title="Lugares" onPress={() => navigation.navigate('Lugares')} />
                <BotonImgTxt source={require('../assets/_30/v06.png')} title="Partes del cuerpo" onPress={() => navigation.navigate('Cuerpo')} />
                <BotonImgTxt source={require('../assets/_30/v07.png')} title="Sabores y olores" onPress={() => navigation.navigate('Sabores')} />
                <BotonImgTxt source={require('../assets/_30/v08.png')} title="Sentimientos" onPress={() => navigation.navigate('Senti')} />
                <BotonImgTxt source={require('../assets/_30/v09.png')} title="Tiempo" onPress={() => navigation.navigate('Tiempo')} />
                <BotonImgTxt source={require('../assets/_30/v10.png')} title="Utensilios de cocina" onPress={() => navigation.navigate('Cocina')} />
            </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Vocabulario;