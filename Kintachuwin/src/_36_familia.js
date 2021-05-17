/**
 * Integrantes de la familia
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
    { key: "1", esp: "Hijo", tut: "Kinkgawas", foto: require("../assets/_30/v04.png"), audio: "au_3_fa01.mp3" },
    { key: "2", esp: "Hija", tut: "Kintsumat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa02.mp3" },
    { key: "3", esp: "Mamá", tut: "Tse", foto: require("../assets/_30/v04.png"), audio: "au_3_fa03.mp3" },
    { key: "4", esp: "Papá", tut: "Tlat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa04.mp3" },
    { key: "5", esp: "Hermano", tut: "Kintalakgawas", foto: require("../assets/_30/v04.png"), audio: "au_3_fa05.mp3" },
    { key: "6", esp: "Hermana", tut: "Kintalatsumat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa06.mp3" },
    { key: "7", esp: "Abuelo", tut: "Tata", foto: require("../assets/_30/v04.png"), audio: "au_3_fa07.mp3" },
    { key: "8", esp: "Abuela", tut: "Nana", foto: require("../assets/_30/v04.png"), audio: "au_3_fa08.mp3" },
    { key: "9", esp: "Nieto", tut: "Tanat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa09.mp3" },
    { key: "10", esp: "Nieta", tut: "Tanat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa10.mp3" },
    { key: "11", esp: "Tío", tut: "Kuk", foto: require("../assets/_30/v04.png"), audio: "au_3_fa11.mp3" },
    { key: "12", esp: "Tía", tut: "Nap", foto: require("../assets/_30/v04.png"), audio: "au_3_fa12.mp3" },
    { key: "13", esp: "Primo", tut: "Tapuxnimat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa13.mp3" },
    { key: "14", esp: "Prima", tut: "Tapuxnimat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa14.mp3" },
    { key: "15", esp: "Sobrino", tut: "Puxnimat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa15.mp3" },
    { key: "16", esp: "Sobrina", tut: "Puxnimat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa16.mp3" },
    { key: "17", esp: "Novio", tut: "Litatawilhat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa17.mp3" },
    { key: "18", esp: "Novia", tut: "Litatawilhat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa18.mp3" },
    { key: "19", esp: "Esposo", tut: "Kimakgtakgalhna / Kinchixku", foto: require("../assets/_30/v04.png"), audio: "au_3_fa19.mp3" },
    { key: "20", esp: "Esposa", tut: "Kimawina / Kinpuxkat", foto: require("../assets/_30/v04.png"), audio: "au_3_fa20.mp3" },
    { key: "21", esp: "Cuñado", tut: "Kukusta", foto: require("../assets/_30/v04.png"), audio: "au_3_fa21.mp3" },
    { key: "22", esp: "Cuñada", tut: "Napaskin", foto: require("../assets/_30/v04.png"), audio: "au_3_fa22.mp3" },
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

function Familia({ navigation }) {
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

export default Familia;