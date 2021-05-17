/**
 * Animales
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native'; //varios elementos
// importar componentes personalizados
import { Imgn, BotonImgTxt, Styles } from './mis-componentes';

function Animales({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Text style={Styles.titulo}>
                        ANIMALES
                </Text>
                    <Text style={Styles.autor}>
                        Por Gabriela Lucas, Juan M. Díaz y Citlal Solano
                </Text>
                    <Text style={Styles.texto}>
                        Los animales son parte fundamental dentro de la
                        cultura <Text style={Styles.cursiva}>tutunakú</Text>, debido a que son parte
                        de sus formas de vida y cosmovisión, utilizándolos en su alimentación, medicina
                        tradicional o inspirando la creación de relatos, entre otros.
                        {"\n\n"}
                        En esta sección encontrarás una amplia lista de animales que habitan en comunidades
                        totonacas de la Sierra Nororiental de Puebla. Te compartimos su nombre en
                        idioma <Text style={Styles.cursiva}>tutunakú</Text>, incluyendo su escritura y audios
                        para practicar su pronunciación en la variante central del Sur. También, encontrarás su
                        nombre científico, su nombre en español y los usos tradicionales que le dan en las comunidades.
                        {"\n\n"}
                        Antes de comenzar, te recomendamos observar a detalle la siguiente iconografía:
                    </Text>

                    <View style={{ padding: 12, backgroundColor: '#004AADf0', borderRadius: 8, margin: 24, marginTop: 0, elevation: 6 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_40/iino.png')} width={48} />
                            <Text style={Styles.simple}>Inofensivo</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_40/ipel.png')} width={48} />
                            <Text style={Styles.simple}>Peligroso</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_40/iali.png')} width={48} />
                            <Text style={Styles.simple}>Alimenticio</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_40/imed.png')} width={48} />
                            <Text style={Styles.simple}>Medicinal</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_40/imag.png')} width={48} />
                            <Text style={Styles.simple}>Mágico-religioso</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_40/icom.png')} width={48} />
                            <Text style={Styles.simple}>De compañía</Text>
                        </View>
                    </View>

                    <BotonImgTxt source={require('../assets/_40/banf.png')} title="Anfibios" onPress={() => navigation.navigate('Anfibios')} />
                    <BotonImgTxt source={require('../assets/_40/bave.png')} title="Aves" onPress={() => navigation.navigate('Aves')} />
                    <BotonImgTxt source={require('../assets/_40/bmam.png')} title="Mamíferos" onPress={() => navigation.navigate('Mamiferos')} />
                    <BotonImgTxt source={require('../assets/_40/brep.png')} title="Reptiles" onPress={() => navigation.navigate('Reptiles')} />
                    <BotonImgTxt source={require('../assets/_40/botr.png')} title="Otros" onPress={() => navigation.navigate('Otros')} />
                </ScrollView>
            </ImageBackground>
        </View>

    );
}

export default Animales;