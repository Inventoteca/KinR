/**
 * Plantas
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

function Plantas({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Text style={Styles.titulo}>
                        PLANTAS
                    </Text>
                    <Text style={Styles.autor}>
                        Por Gabriela Lucas, Juan M. Díaz y Citlal Solano
                    </Text>
                    <Text style={Styles.texto}>
                        Las plantas son uno de los elementos más importantes dentro de la cultura
                        tutunakú, debido a que son fuente de abastecimiento de alimento, refugio
                        y remedios medicinales tradicionales.
                        {"\n\n"}
                        En esta sección encontrarás una amplia lista de árboles, frutos, semillas,
                        hierbas y arbustos que se pueden encontrar en comunidades totonacas de la
                        Sierra Nororiental de Puebla. Te compartimos su nombre en idioma tutunakú,
                        incluyendo su escritura y audios para practicar su pronunciación en la
                        variante central del Sur. También, encontrarás su nombre científico, su
                        nombre en español y los usos tradicionales que le dan en las comunidades.
                        {"\n\n"}
                        Te recomendamos observar a detalle la siguiente iconografía:
                    </Text>

                    <View style={{ padding: 12, backgroundColor: '#004AADf0', borderRadius: 8, margin: 24, marginTop: 0, elevation: 6 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_50/iali.png')} width={48} />
                            <Text style={Styles.simple}>Alimenticio</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_50/imed.png')} width={48} />
                            <Text style={Styles.simple}>Medicinal</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            <Imgn source={require('../assets/_50/imad.png')} width={48} />
                            <Text style={Styles.simple}>Maderable</Text>
                        </View>
                    </View>

                    <BotonImgTxt source={require('../assets/_50/bfru.png')} title="Frutos, semillas o raíces" onPress={() => navigation.navigate('Frutos')} />
                    <BotonImgTxt source={require('../assets/_50/bher.png')} title="Herbáceas" onPress={() => navigation.navigate('Herbaceas')} />
                    <BotonImgTxt source={require('../assets/_50/barb.png')} title="Árboles" onPress={() => navigation.navigate('Arboles')} />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Plantas;