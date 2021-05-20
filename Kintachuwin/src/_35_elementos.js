/**
 * Elementos naturales
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
    { key: "1", esp: "Lluvia", tut: "Sen", foto: require("../assets/_35/en01.jpg"), audio: "au_3_en01.mp3" },
    { key: "2", esp: "Agua", tut: "Chúchut", foto: require("../assets/_35/en02.jpg"), audio: "au_3_en02.mp3" },
    { key: "3", esp: "Tierra", tut: "Tiyat", foto: require("../assets/_35/en03.jpg"), audio: "au_3_en03.mp3" },
    { key: "4", esp: "Aire", tut: "U'n", foto: require("../assets/_35/en04.jpg"), audio: "au_3_en04.mp3" },
    { key: "5", esp: "Fuego", tut: "Lhkuyat", foto: require("../assets/_35/en05.jpg"), audio: "au_3_en05.mp3" },
    { key: "6", esp: "Piedra", tut: "Chiwix", foto: require("../assets/_35/en06.jpg"), audio: "au_3_en06.mp3" },
    { key: "7", esp: "Roca", tut: "Sipi", foto: require("../assets/_35/en07.jpg"), audio: "au_3_en07.mp3" },
    { key: "8", esp: "Sol", tut: "chichini", foto: require("../assets/_35/en08.jpg"), audio: "au_3_en08.mp3" },
    { key: "9", esp: "Luna", tut: "Papa'", foto: require("../assets/_35/en09.jpg"), audio: "au_3_en09.mp3" },
    { key: "10", esp: "Estrellas", tut: "Staku", foto: require("../assets/_35/en10.jpg"), audio: "au_3_en10.mp3" },
    { key: "11", esp: "Arcoiris", tut: "Chamaxkulit", foto: require("../assets/_35/en11.jpg"), audio: "au_3_en11.mp3" },
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
                <BotonImg source={require('../assets/audio.png')} width={48} onPress={() => playLocalSound(props.audio)} />
            </View>
        </View>
    );
}

function Elementos({ navigation }) {
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

export default Elementos;