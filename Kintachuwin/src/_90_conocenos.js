/**
 * Conócenos
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { Imgn, Boton, Styles } from './mis-componentes';

function Conocenos({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Imgn source={require('../assets/_91/cx.jpg')} width={320} />

                    <Text style={Styles.titulo}>
                        Colectivo Xanay
                    </Text>
                    <Text style={Styles.autor}>
                        xanaycolectivo@gmail.com
                    </Text>
                    <Text style={Styles.texto}>
                        Somos un colectivo que contribuye al desarrollo social, educativo y ambiental de los pueblos originarios de la Sierra Norte de Puebla, a través de actividades que integran y respetan la riqueza biocultural.
                    </Text>


                    <Boton title="Integrantes" onPress={() => navigation.navigate('Xanay')} />
                    <Boton title="Colaboradores" onPress={() => navigation.navigate('Colab')} />

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Conocenos;