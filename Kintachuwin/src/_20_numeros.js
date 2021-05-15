/**
 * Números
 * Contiene una lista de botones que llevan a una pantalla con descripción,
 * imagen (tabla) y un botón para reproducir audio.
 * Esa pantalla puede ser la misma, pero al presionar el botón se pasan
 * parámetros de modo que se muestre contenido diferente.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { playLocalSound, Imgn, BotonImgTxt, Styles } from './mis-componentes';

function Numeros({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems: 'stretch',
            //justifyContent: 'flex-start',
            //backgroundColor: 'white',
            //padding: 24
        }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Text style={Styles.titulo}>
                        NÚMEROS
                    </Text>
                    <Text style={Styles.autor}>
                        Por José Santiago y Juan M. Díaz
                    </Text>
                    <Text style={Styles.texto}>
                        Cuando se cuenta en el idioma <Text style={Styles.cursiva}>tutunakú</Text>,
                        los números siempre van acompañados por un prefijo que está determinado la
                        forma o aspecto del elemento que se está contando. Estos prefijos solo se
                        utilizan para contar de 1 al 20, después del 20 no es necesario usarlos.
                        {"\n\n"}
                        Aquí te presentamos 24 prefijos que sirven para contar un sinfín de cosas.
                        Podrás aprender la escritura y pronunciación en la variante central alto.
                        {"\n\n"}
                        ¿Qué quieres aprender a contar?
                    </Text>

                    <BotonImgTxt source={require('../assets/_21/ak_f.jpg')} title="Unidades de medición (Ak)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/akg_f.jpg')} title="Elementos de forma esférica (Akg)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/akga_f.jpg')} title="Plantas (Akga)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/akgsti_f.jpg')} title="Rebanadas o gajos (Akgsti)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/cha_f.jpg')} title="Chiles (Cha)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/chaykgalha_f.jpg')} title="Personas (Cha y Kgalha)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/kgalh_f.jpg')} title="Similares a carne o machetes (Kgalh)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/kgampa_f.jpg')} title="Canciones (Kgampa)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/kgan_f.jpg')} title="Elementos alargados (Kgan)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/kge_f.jpg')} title="Cosas rollizas (Kge)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/kilh_f.jpg')} title="Cosas con aberturas (Kilh)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/laka_f.jpg')} title="Lugares (Laka)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/lakga_f.jpg')} title="Elementos planos (Lakga)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/mak_f.jpg')} title="Superficies o cosas delgadas (Mak)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/mus_f.jpg')} title="Elementos que cuelgan (Mus)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/pa_f.jpg')} title="Objetos que tienen panza (Pa)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/pekg_f.jpg')} title="Hojas, billetes o recipientes vacíos (Pekg)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/pix_f.jpg')} title="Manojos (Pix)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/puak_f.jpg')} title="Montones (Pu’ak)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/pukgalh_f.jpg')} title="Cultivos o macetas (Pukgalh)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/pun_f.jpg')} title="Metates (Pun)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/puu_f.jpg')} title="Pares, enteros o completos (Puu)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/tan_f.jpg')} title="Animales (Tan)" onPress={() => navigation.navigate('Contar')} />
                    <BotonImgTxt source={require('../assets/_21/tuu_f.jpg')} title="Jicarazos o cazos (Tuu)" onPress={() => navigation.navigate('Contar')} />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Numeros;
