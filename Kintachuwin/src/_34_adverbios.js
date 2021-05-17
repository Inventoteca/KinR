/**
 * Adeverbios de lugar
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
    { key: "1", esp: "Aquí", tut: "U' nu", foto: require("../assets/_34/lo01.png"), audio: "au_3_lo01.mp3" },
    { key: "2", esp: "Allá", tut: "Anta", foto: require("../assets/_34/lo02.png"), audio: "au_3_lo02.mp3" },
    { key: "3", esp: "Allí", tut: "Amacha", foto: require("../assets/_34/lo03.png"), audio: "au_3_lo03.mp3" },
    { key: "4", esp: "Abajo", tut: "Pakju", foto: require("../assets/_34/lo04.png"), audio: "au_3_lo04.mp3" },
    { key: "5", esp: "Arriba", tut: "Akxtu", foto: require("../assets/_34/lo05.png"), audio: "au_3_lo05.mp3" },
    { key: "6", esp: "Atrás", tut: "Chakgan", foto: require("../assets/_34/lo06.png"), audio: "au_3_lo06.mp3" },
    { key: "7", esp: "Adelante", tut: "Lakatin", foto: require("../assets/_34/lo07.png"), audio: "au_3_lo07.mp3" },
    { key: "8", esp: "Fuera", tut: "Kilhtin", foto: require("../assets/_34/lo08.png"), audio: "au_3_lo08.mp3" },
    { key: "9", esp: "Adentro", tut: "Pulhakni", foto: require("../assets/_34/lo09.png"), audio: "au_3_lo09.mp3" },
    { key: "10", esp: "Al lado", tut: "Xpaxtun", foto: require("../assets/_34/lo10.png"), audio: "au_3_lo10.mp3" },
];

const Item = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
            <Imgn source={props.foto} width={150} />
            <View style={{ flex: 1 }}>
                <Text style={Styles.titulo}>
                    <Text style={Styles.cursiva}>{props.tut}</Text> - {props.esp}
                    {/*<Text style={{ fontStyle: 'normal', fontWeight: 'normal' }}>{props.esp} </Text>*/}
                </Text>
                <BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />
            </View>
        </View>
    );
}

function Adverbios({ navigation }) {
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

export default Adverbios;