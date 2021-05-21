/**
 * Audiovisuales
 * Se muestran los posters en pequeño con su nombre correspondiente.
 * Al hacer clic en cada poster cambia a la siguiente pantalla y 
 * muestra el video correspondiente.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native'; //varios elementos
// importar componentes personalizados
import { Imgn, BotonImg, Styles } from './mis-componentes';

// Se muestra una lista de botones. Todos los botones llevan a la misma página (Video),
// pero cambia el valor de key
function Audiovisuales({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView>

                    {/* 1 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> <Text style={Styles.cursiva}>KINTACHIWINKAN</Text> </Text>
                    <BotonImg source={require('../assets/_60/cd1.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 0})} />
                    <View style={Styles.margen} />

                    {/* 2 **********************************************************************/}
                    <Text style={Styles.tituloCentrado}> <Text style={Styles.cursiva}>TSURUMPITPIT</Text> </Text>
                    <BotonImg source={require('../assets/_60/cd2.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 1})} />
                    <View style={Styles.margen} />

                    {/* 3 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> RONDALLA <Text style={Styles.cursiva}>TUTUNAKÚ</Text> </Text>
                    <BotonImg source={require('../assets/_60/cd3.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 2})} />
                    <View style={Styles.margen} />

                    {/* 4 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> <Text style={Styles.cursiva}>PAXNIKAK</Text> </Text>
                    <BotonImg source={require('../assets/_60/cd4.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 3})} />
                    <View style={Styles.margen} />

                    {/* 5 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> DANZAS DE LA SIERRA NORTE DE PUEBLA </Text>
                    <BotonImg source={require('../assets/_60/cd5.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 4})} />
                    <View style={Styles.margen} />

                    {/* 6 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> ANIMALES EN TOTONACO </Text>
                    <BotonImg source={require('../assets/_60/cd6.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 5})} />
                    <View style={Styles.margen} />

                    {/* 7 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> ALIMENTOS EN TOTONACO </Text>
                    <BotonImg source={require('../assets/_60/cd7.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 6})} />
                    <View style={Styles.margen} />

                    {/* 8 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> SAN JOSÉ </Text>
                    <BotonImg source={require('../assets/_60/cd8.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 7})} />
                    <View style={Styles.margen} />

                    {/* 9 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> PUKLHN </Text>
                    <BotonImg source={require('../assets/_60/cd9.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 8})} />
                    <View style={Styles.margen} />

                    {/* 10 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> CASTILLO </Text>
                    <BotonImg source={require('../assets/_60/cd10.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 9})} />
                    <View style={Styles.margen} />

                    {/* 11 ***********************************************************************/}
                    <Text style={Styles.tituloCentrado}> HOMBRES PÁJARO </Text>
                    <BotonImg source={require('../assets/_60/cd11.jpg')} width={180} onPress={() => navigation.navigate('Video', {key: 10})} />
                    <View style={Styles.margen} />

                </ScrollView>
            </ImageBackground>
        </View>

    );
}

export default Audiovisuales;