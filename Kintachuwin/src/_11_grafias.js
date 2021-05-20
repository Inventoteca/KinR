/**
 * Grafías
 * Tiene una descripción corta, una imagen y un botón para escuchar audio.
 * El boton no tiene texto, solo un icono.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    Image,
    FlatList,
    ImageBackground,
} from 'react-native';
// importar componentes personalizados
import {playLocalSound, Imgn, BotonImg, Styles} from './mis-componentes';

const DATA = [
    {
        key: '00',
        titulo: "XALIMAKGATSOKGNI TUTUNAKÚ",
        texto: "El idioma tutunakú es uno de los 68 idiomas originarios de México, y pertenece a la " +
        "familia totonaco-tepehua. Su escritura y pronunciación está basada en 23 grafías, ¡conócelas!",
        imagen: require('../assets/_11/img2.png'),
        audio: 'au_1_01.mp3',
    }
];

const Item = (props) => {
    return (
        <View style={{ margin: 12 }}>
            <Text style={Styles.titulo}>
                {props.titulo}
            </Text>
            <Text style={Styles.texto}>
                {props.texto}
            </Text>
            <Imgn source={props.imagen} width={320} />
            <BotonImg source={require('../assets/audio.png')} width={48} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Grafias({ navigation }) {
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
                ({ item }) => <Item titulo={item.titulo} texto={item.texto} imagen={item.imagen} audio={item.audio} />
            }/>
            </ImageBackground>
        </View>
    );
}

export default Grafias;