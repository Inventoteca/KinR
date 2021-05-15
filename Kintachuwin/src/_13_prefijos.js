/**
 * Prefijos posesivos
 * Hay una lista de descripciones, imágenes y botones para reproducir audio.
 * Se podría armar con FlatLlist, pero se necesita un texto a la mitad
 * de la lista y rompe la monotonía.
 */

import React from 'react'; //estrictamente necesario
import {
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
} from 'react-native'; //varios elementos
import { playLocalSound } from './mis-componentes';

/*
const DATA = [
    {
        key:'00',
        titulo: "PRONOMBRES POSESIVOS",
        texto: "Los pronombres posesivos ayudan a indicar la posesión de algún elemento o cosa.",
        imagen: require('../assets/_12/img1.png'),
        audio: 'au_1_02.mp3',
    }
];
*/

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={props.source} style={{ width: w, height: h }} />
        </View>
    );
}

const Boton = (props) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 4,
                padding: 6,
                backgroundColor: 'whitesmoke',
                margin: 4,
                alignItems: 'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 16 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const BotonImg = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 0,
                borderRadius: 4,
                padding: 4,
                backgroundColor: 'whitesmoke',
                margin: 6,
                alignItems: 'center',
                //flexDirection: 'row', //horizontal
                shadowColor: 'black',
                shadowRadius: 6, //solo iOS
                elevation: 6,
            }}
            onPress={props.onPress}
        >
            <Imgn source={props.source} width={64} />
        </TouchableOpacity>
        </View>
    )
}

/*
<Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
    {props-autor}
</Text>
<Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold' }}>
    {props.titulo}
</Text>
*/
const Item = (props) => {
    return (
        <View style={{ margin: 12 }}>
            <Text style={styles.texto}>
                {props.texto}
            </Text>
            <Imgn source={props.imagen} width={350} />
            <BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}


/*<FlatList data={DATA} renderItem={
    ({item}) => <Item titulo={item.titulo} texto={item.texto} imagen={item.imagen} audio={item.audio} /> 
}/>*/
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
                    <Text style={styles.titulo}>
                        PREFIJOS POSESIVOS
                    </Text>
                    <Text style={styles.texto}>
                        Estos prefijos designan a las personas que poseen o pueden poseer algo. Dependiendo del pronombre personal, 
                        pueden ir al comienzo y/o al final de una palabra. La forma más común de aplicarlo es la siguiente:
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

                    <Text style={styles.texto}>
                        Sin embargo, cuando la palabra en totonaco comienza con las grafías “P, T, K, Kg, Tl, Ts y Ch” 
                        se debe agregar una “n” a los prefijos de la primera (mío) y segunda persona (tuyo) del singular, 
                        y la primera (nuestro) y segunda persona (de ustedes) del plural. Por ejemplo:
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

                    <Text style={styles.texto}>
                        Por último, cuando la palabra en totonaco comienza con la grafía “X”, para las terceras personas del singular (suyo) y plural (de ellos) se sustituye el prefijo “X” por “K”. Por ejemplo:
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

const styles = StyleSheet.create({
    titulo: {
        // Título normal
        fontSize: 20, fontFamily: 'OpenSans-Bold', backgroundColor: '#FFFFFFd0'
    },
    texto: {
        // Texto normal
        fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 24, marginBottom: 24, backgroundColor: '#FFFFFFd0'
    },
    cursiva: {
        // Usar dentro de un bloque normal para cambiar a cursiva
        fontStyle: 'italic', fontWeight: 'normal'
    },
    autor: {
        // Texto de bajo peso para nombres de autores
        fontSize: 16, fontFamily: 'OpenSans-Light', backgroundColor: '#FFFFFFd0'
    },
    tutunaku: {
        // Texto en cursivas para bloques escritos solo en tutunakú
        fontSize: 16, fontFamily: 'OpenSans-Italic', marginTop: 24, marginBottom: 24
    }
});

export default Prefijos;