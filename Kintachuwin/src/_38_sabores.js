/**
 * Sabores
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native'; //varios elementos
// importar componentes personalizados
import { playLocalSound, Imgn, BotonImg, Styles } from './mis-componentes';

const DATA = [
    { key: "1", esp: "Dulce", tut: "Sakgsi", foto: require("../assets/_38/so01.jpg"), audio: "au_3_so01.mp3" },
    { key: "2", esp: "Salado", tut: "Skokg", foto: require("../assets/_38/so02.jpg"), audio: "au_3_so02.mp3" },
    { key: "3", esp: "Picoso", tut: "Lhkaka", foto: require("../assets/_38/so03.jpg"), audio: "au_3_so03.mp3" },
    { key: "4", esp: "Agrío", tut: "Xkuta", foto: require("../assets/_38/so04.jpg"), audio: "au_3_so04.mp3" },
    { key: "5", esp: "Sabroso", tut: "Kgama", foto: require("../assets/_38/so05.jpg"), audio: "au_3_so05.mp3" },
    { key: "6", esp: "Apestoso", tut: "Pukgs", foto: require("../assets/_38/so06.jpg"), audio: "au_3_so06.mp3" },
    { key: "7", esp: "Perfumado", tut: "Muksun", foto: require("../assets/_38/so07.jpg"), audio: "au_3_so07.mp3" },
    { key: "8", esp: "Correoso", tut: "Chatata", foto: require("../assets/_38/so08.jpg"), audio: "au_3_so08.mp3" },
    { key: "9", esp: "Ácido", tut: "Xun", foto: require("../assets/_38/so09.jpg"), audio: "au_3_so09.mp3" },
    { key: "10", esp: "Fétido", tut: "Xkonkg", foto: require("../assets/_38/so10.jpg"), audio: "au_3_so10.mp3" },
    { key: "11", esp: "Agarroso / Astringente", tut: "Pistxiwana", foto: require("../assets/_38/so11.jpg"), audio: "au_3_so11.mp3" },
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

function Sabores({ navigation }) {
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

export default Sabores;