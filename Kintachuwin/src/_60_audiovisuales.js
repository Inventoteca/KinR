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

function Audiovisuales({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView>

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        <Text style={Styles.cursiva}>KINTACHIWINKAN</Text>
                    </Text>
                    <BotonImg source={require('../assets/_60/cd1.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        <Text style={Styles.cursiva}>TSURUMPITPIT</Text>
                    </Text>
                    <BotonImg source={require('../assets/_60/cd2.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        RONDALLA <Text style={Styles.cursiva}>TUTUNAKÚ</Text>
                    </Text>
                    <BotonImg source={require('../assets/_60/cd3.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        <Text style={Styles.cursiva}>PAXNIKAK</Text>
                    </Text>
                    <BotonImg source={require('../assets/_60/cd4.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        DANZAS DE LA SIERRA NORTE DE PUEBLA
                    </Text>
                    <BotonImg source={require('../assets/_60/cd5.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        ANIMALES EN TOTONACO
                    </Text>
                    <BotonImg source={require('../assets/_60/cd6.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                    {/*************************************************************************/}
                    <Text style={Styles.tituloCentrado}>
                        ALIMENTOS EN TOTONACO
                    </Text>
                    <BotonImg source={require('../assets/_60/cd7.jpg')} width={180} onPress={() => navigation.navigate('Video')} />
                    <View style={Styles.margen} />

                </ScrollView>
            </ImageBackground>
        </View>

    );
}

export default Audiovisuales;