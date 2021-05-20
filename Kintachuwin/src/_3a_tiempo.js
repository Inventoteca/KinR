/**
 * Tiempo
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
    { key: "1", esp: "Día", tut: "Aktumkiltamaku", foto: require("../assets/_3a/tt01.png"), audio: "au_3_tt01.mp3" },
    { key: "2", esp: "Noche", tut: "Tsisni", foto: require("../assets/_3a/tt02.png"), audio: "au_3_tt02.mp3" },
    { key: "3", esp: "Amanecer", tut: "Xkgakgama", foto: require("../assets/_3a/tt03.png"), audio: "au_3_tt03.mp3" },
    { key: "4", esp: "Atardecer", tut: "Kgotanuy", foto: require("../assets/_3a/tt04.png"), audio: "au_3_tt04.mp3" },
    { key: "5", esp: "Hoy", tut: "Chiyu", foto: require("../assets/_3a/tt05.png"), audio: "au_3_tt05.mp3" },
    { key: "6", esp: "Mañana", tut: "Chali / Xtumajat", foto: require("../assets/_3a/tt06.png"), audio: "au_3_tt06.mp3" },
    { key: "7", esp: "Ayer", tut: "Kgotana", foto: require("../assets/_3a/tt07.png"), audio: "au_3_tt07.mp3" },
    { key: "8", esp: "Antier", tut: "Tuxama", foto: require("../assets/_3a/tt08.png"), audio: "au_3_tt08.mp3" },
    { key: "9", esp: "Pasado mañana", tut: "Tuxamaku", foto: require("../assets/_3a/tt09.png"), audio: "au_3_tt09.mp3" },
    { key: "10", esp: "Semana", tut: "Tujun kilhtamaku / Xtumajat", foto: require("../assets/_3a/tt10.png"), audio: "au_3_tt10.mp3" },
    { key: "11", esp: "Mes", tut: "Akgtum taputlakgat", foto: require("../assets/_3a/tt11.png"), audio: "au_3_tt11.mp3" },
    { key: "12", esp: "Año", tut: "Aktumkat", foto: require("../assets/_3a/tt12.png"), audio: "au_3_tt12.mp3" },
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

function Tiempo({ navigation }) {
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

export default Tiempo;