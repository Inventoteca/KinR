/**
 * Cuentos (el título se muestra como Leyendas)
 * Contiene una serie de botones con imágen y el título del cuento.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native'; //varios elementos
import { Imgn, BotonImgTxt, Styles } from './mis-componentes'; //importar componentes personalizados

function Cuentos({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <BotonImgTxt source={require('../assets/_70/cn1.jpg')} onPress={() => navigation.navigate('Cuento1')} title="CHICHINI’ CHU MPAPA’" />
                    <BotonImgTxt source={require('../assets/_70/cn2.jpg')} onPress={() => navigation.navigate('Cuento2')} title="KIWI’ AKGOWA" />
                    <BotonImgTxt source={require('../assets/_70/cn3.jpg')} onPress={() => navigation.navigate('Cuento3')} title="LUWA’ CHU LA LAKATAWILAKAN NCHICHINI’" />
                    <BotonImgTxt source={require('../assets/_70/cn4.jpg')} onPress={() => navigation.navigate('Cuento4')} title="AKXNI’ LA LAKATAWILAKAN MPAPA’" />
                    <BotonImgTxt source={require('../assets/_70/cn5.jpg')} onPress={() => navigation.navigate('Cuento5')} title="XINTILHNI’" />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Cuentos;