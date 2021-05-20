/**
 * Pronombre posesivos
 * Tiene una descripción corta, una imagen y un botón para escuchar audio.
 * El boton no tiene texto, solo un icono. Es como la pantalla grafías.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import {playLocalSound, Imgn, BotonImg, Styles} from './mis-componentes';

const DATA = [
    {
        key:'00',
        titulo: "PRONOMBRES POSESIVOS",
        texto: "Los pronombres posesivos ayudan a indicar la posesión de algún elemento o cosa.",
        imagen: require('../assets/_12/img2.png'),
        audio: 'au_1_02.mp3',
    }
];

const Item = (props) => {
    return (
        <View style={{margin:12}}>
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

export default Pronombres;