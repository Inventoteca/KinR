/**
 * Prefijos posesivos
 * Hay una lista de descripciones, imágenes y botones para reproducir audio.
 * Se podría armar con FlatLlist, pero se necesita un texto a la mitad
 * de la lista y rompe la monotonía.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    //Button,
    Image,
    //TouchableHighlight,
    //TouchableNativeFeedback,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ImageBackground,
    StyleSheet
} from 'react-native';
// importar componentes personalizados
import {playLocalSound, Imgn, BotonImg, Styles} from './mis-componentes';

const Item = (props) => {
    return (
        <View style={{ margin: 12 }}>
            <Text style={Styles.texto}>
                {props.texto}
            </Text>
            <Imgn source={props.imagen} width={350} />
            <BotonImg source={require('../assets/audio.png')} width={48} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Prefijos({ navigation }) {
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
                        PREFIJOS POSESIVOS
                    </Text>
                    <Text style={Styles.texto}>
                        Estos prefijos designan a las personas que poseen o pueden poseer algo. 
                        Dependiendo del pronombre personal, pueden ir al comienzo y/o al final 
                        de una palabra. La forma más común de aplicarlo es la siguiente:
                    </Text>

                    <Item
                        texto='Para la palabra “Laxux” (naranja)'
                        imagen={require('../assets/_13/laxux.png')}
                        audio='au_1_03_laxux.mp3'
                    />
                    <Item
                        texto='Para la palabra “Makan” (mano)'
                        imagen={require('../assets/_13/makan.png')}
                        audio='au_1_03_makan.mp3'
                    />
                    <Item
                        texto='Para la palabra “Nipxi” (calabaza)'
                        imagen={require('../assets/_13/nipxi.png')}
                        audio='au_1_03_nipxi.mp3'
                    />

                    <Text style={Styles.texto}>
                        Sin embargo, cuando la palabra en totonaco comienza con las grafías 
                        “P, T, K, Kg, Tl, Ts y Ch” se debe agregar una “n” a los prefijos de 
                        la primera (mío) y segunda persona (tuyo) del singular, y la primera 
                        (nuestro) y segunda persona (de ustedes) del plural. Por ejemplo:
                    </Text>

                    <Item
                        texto='Para la palabra “Chaw” (tortilla)'
                        imagen={require('../assets/_13/chaw.png')}
                        audio='au_1_03_chaw.mp3'
                    />
                    <Item
                        texto='Para la palabra “Pin” (chile)'
                        imagen={require('../assets/_13/pin.png')}
                        audio='au_1_03_pin.mp3'
                    />
                    <Item
                        texto='Para la palabra “Tumin” (dinero)'
                        imagen={require('../assets/_13/tumin.png')}
                        audio='au_1_03_tumin.mp3'
                    />

                    <Text style={Styles.texto}>
                        Por último, cuando la palabra en totonaco comienza con la grafía 
                        “X”, para las terceras personas del singular (suyo) y plural 
                        (de ellos) se sustituye el prefijo “X” por “K”. Por ejemplo:
                    </Text>

                    <Item
                        texto='Para la palabra “Xanat” (flor)'
                        imagen={require('../assets/_13/xanat.png')}
                        audio='au_1_03_xanat.mp3'
                    />

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Prefijos;