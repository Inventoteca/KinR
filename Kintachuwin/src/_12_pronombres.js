/**
 * Pronombre posesivos
 * Tiene una descripción corta, una imagen y un botón para escuchar audio.
 * El boton no tiene texto, solo un icono. Es como la pantalla grafías.
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
    StyleSheet,
    ImageBackground
} from 'react-native'; //varios elementos
import {playLocalSound} from './mis-componentes';

const DATA = [
    {
        key:'00',
        titulo: "PRONOMBRES POSESIVOS",
        texto: "Los pronombres posesivos ayudan a indicar la posesión de algún elemento o cosa.",
        imagen: require('../assets/_12/img2.png'),
        audio: 'au_1_02.mp3',
    }
];

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

/*<Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
    {props-autor}
</Text>*/
const Item = (props) => {
    return (
        <View style={{margin:12}}>
            <Text style={styles.titulo}>
                {props.titulo}
            </Text>
            <Text style={styles.texto}>
                {props.texto}
            </Text>
            <Imgn source={props.imagen} width={320} />
            <BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Pronombres({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems: 'stretch',
            //justifyContent: 'flex-start',
            //backgroundColor: 'white',
            //padding: 24
        }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
            <FlatList contentContainerStyle={{ padding: 24 }} data={DATA} renderItem={
                ({item}) => <Item titulo={item.titulo} texto={item.texto} imagen={item.imagen} audio={item.audio} /> 
            }/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        // Título normal
        fontSize:20, fontFamily:'OpenSans-Bold', backgroundColor: '#FFFFFFd0'
    },
    texto: {
        // Texto normal
        fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24, backgroundColor: '#FFFFFFd0'
    },
    cursiva: {
        // Usar dentro de un bloque normal para cambiar a cursiva
        fontStyle:'italic', fontWeight:'normal'
    },
    autor: {
        // Texto de bajo peso para nombres de autores
        fontSize:16, fontFamily:'OpenSans-Light', backgroundColor: '#FFFFFFd0'
    },
    tutunaku: {
        // Texto en cursivas para bloques escritos solo en tutunakú
        fontSize:16, fontFamily:'OpenSans-Italic', marginTop:24, marginBottom:24
    }
});

export default Pronombres;