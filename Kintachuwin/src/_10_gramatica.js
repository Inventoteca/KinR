/**
 * Gramática
 * Contiene descripción corta y 3 sub-categorías
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native';
// importar componentes personalizados
import { Imgn, BotonImgTxt, Styles } from './mis-componentes';

/*<Image source={require('../assets/logo.png')} style={{width:320, height:60}} resizeMode='contain'/>*/
function Gramatica({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems:'stretch', 
            //justifyContent:'flex-start', 
            //backgroundColor:'white', 
            //padding:24
        }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Text style={Styles.titulo}>
                        GRAMÁTICA
                </Text>
                    <Text style={Styles.autor}>
                        Por Gabriela Lucas, José Santiago y Juan M. Díaz
                </Text>
                    <Text style={Styles.texto}>
                        En esta sección encontrarás información lingüística sobre la estructura de las palabras
                    del idioma <Text style={Styles.cursiva}>tutunakú</Text> en la variante central del Sur.
                </Text>

                    <BotonImgTxt source={require('../assets/_10/gra.png')} title="Grafías" onPress={() => navigation.navigate('Grafias')} />
                    <BotonImgTxt source={require('../assets/_10/pro.png')} title="Pronombres posesivos" onPress={() => navigation.navigate('Pronombres')} />
                    <BotonImgTxt source={require('../assets/_10/pre.png')} title="Prefijos posesivos" onPress={() => navigation.navigate('Prefijos')} />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Gramatica;