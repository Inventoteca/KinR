/**
 * Sub-categoría de vocabulario
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native'; //varios elementos
// importar componentes personalizados
import { playLocalSound, Imgn, Boton, BotonImg, Styles } from './mis-componentes';

const DATA = [
    { key: "1", esp: "Amarillo", tut: "Smukuku", foto: require("../assets/_31/c1.jpg"), audio: "au_3_c01.mp3" },
    { key: "2", esp: "Azul", tut: "Spupuku", foto: require("../assets/_31/c2.jpg"), audio: "au_3_c02.mp3" },
    { key: "3", esp: "Blanco", tut: "Snapapa", foto: require("../assets/_31/c3.jpg"), audio: "au_3_c03.mp3" },
    { key: "4", esp: "Café", tut: "Xkgoniwa", foto: require("../assets/_31/c4.jpg"), audio: "au_3_c04.mp3" },
    { key: "5", esp: "Gris", tut: "Lhpupokgo", foto: require("../assets/_31/c5.jpg"), audio: "au_3_c05.mp3" },
    { key: "6", esp: "Morado", tut: "Mantajwa", foto: require("../assets/_31/c6.jpg"), audio: "au_3_c06.mp3" },
    { key: "7", esp: "Naranja", tut: "Lukuku", foto: require("../assets/_31/c7.jpg"), audio: "au_3_c07.mp3" },
    { key: "8", esp: "Negro", tut: "Tsitsekga", foto: require("../assets/_31/c8.jpg"), audio: "au_3_c08.mp3" },
    { key: "9", esp: "Pinto", tut: "Spilili", foto: require("../assets/_31/c9.jpg"), audio: "au_3_c09.mp3" },
    { key: "10", esp: "Rojo", tut: "Tsitsokgo", foto: require("../assets/_31/c10.jpg"), audio: "au_3_c10.mp3" },
    { key: "11", esp: "Verde", tut: "Xtakgni", foto: require("../assets/_31/c11.jpg"), audio: "au_3_c11.mp3" },
    { key: "12", esp: "Verde claro", tut: "Xkayiwa", foto: require("../assets/_31/c12.jpg"), audio: "au_3_c12.mp3" },
];

const Item = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
            <Imgn source={props.foto} width={150} />
            <View style={{flex: 1}}>
                <Text style={Styles.titulo}>
                    <Text style={Styles.cursiva}>{props.tut}</Text> - {props.esp}
                    {/*<Text style={{ fontStyle: 'normal', fontWeight: 'normal' }}>{props.esp} </Text>*/}
                </Text>
                <BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />
            </View>
        </View>
    );
}

function Colores({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <FlatList
                    // Poner padding en style normal hace que el último elemento no sea completamente visible 
                    // (se ve cortado). ¿Por qué contentContainerStyle si funciona? En la documentanción de 
                    // FlatList no aparece esa prop, sin embargo aparece en la documentación de ScrollView.
                    contentContainerStyle={{ padding: 24 }}
                    data={DATA}
                    renderItem={({ item }) => <Item
                        esp={item.esp}
                        tut={item.tut}
                        //texto={item.texto}
                        foto={item.foto}
                        //tabla={item.tabla}
                        audio={item.audio}
                    />}
                />
            </ImageBackground>
        </View>
    );
}

export default Colores;