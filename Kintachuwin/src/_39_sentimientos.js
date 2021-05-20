/**
 * Sentimientos
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
    { key: "1", esp: "Alegría", tut: "Tapaxuwan", foto: require("../assets/_30/v08.png"), audio: "au_3_se01.mp3" },
    { key: "2", esp: "Logro", tut: "Kgantatul / lilhokglh", foto: require("../assets/_30/v08.png"), audio: "au_3_se02.mp3" },
    { key: "3", esp: "Esperanza", tut: "Takgalhkgalit", foto: require("../assets/_30/v08.png"), audio: "au_3_se03.mp3" },
    { key: "4", esp: "Generosidad", tut: "Lagkatsana", foto: require("../assets/_30/v08.png"), audio: "au_3_se04.mp3" },
    { key: "5", esp: "Afecto", tut: "Lalakgatsat", foto: require("../assets/_30/v08.png"), audio: "au_3_se05.mp3" },
    { key: "6", esp: "Amor", tut: "Lapaxkit", foto: require("../assets/_30/v08.png"), audio: "au_3_se06.mp3" },
    { key: "7", esp: "Agradecimiento", tut: "Tapaxkatkatsin", foto: require("../assets/_30/v08.png"), audio: "au_3_se08.mp3" },
    { key: "8", esp: "Justicia", tut: "Takgastakyawan", foto: require("../assets/_30/v08.png"), audio: "au_3_se09.mp3" },
    { key: "9", esp: "Alivio", tut: "Tapakgsni", foto: require("../assets/_30/v08.png"), audio: "au_3_se11.mp3" },
    { key: "10", esp: "Fortaleza", tut: "Litatliwakgni", foto: require("../assets/_30/v08.png"), audio: "au_3_se12.mp3" },
    { key: "11", esp: "Felicidad", tut: "Tapaxuwan", foto: require("../assets/_30/v08.png"), audio: "au_3_se13.mp3" },
    { key: "12", esp: "Honestidad", tut: "Niakgsanina", foto: require("../assets/_30/v08.png"), audio: "au_3_se14.mp3" },
    { key: "13", esp: "Respeto", tut: "Kaknik / kakni", foto: require("../assets/_30/v08.png"), audio: "au_3_se15.mp3" },
    { key: "14", esp: "Cuidado", tut: "Tamakgskgalat", foto: require("../assets/_30/v08.png"), audio: "au_3_se16.mp3" },
    { key: "15", esp: "Confianza", tut: "Laakgataksnit", foto: require("../assets/_30/v08.png"), audio: "au_3_se17.mp3" },
    { key: "16", esp: "Apoyo", tut: "Tamakgtay", foto: require("../assets/_30/v08.png"), audio: "au_3_se18.mp3" },
    { key: "17", esp: "Compromiso", tut: "Litay", foto: require("../assets/_30/v08.png"), audio: "au_3_se19.mp3" },
    { key: "18", esp: "Paz", tut: "Tapaxkin", foto: require("../assets/_30/v08.png"), audio: "au_3_se20.mp3" },
    { key: "19", esp: "Venganza", tut: "Lamakgaokot", foto: require("../assets/_30/v08.png"), audio: "au_3_se21.mp3" },
    { key: "20", esp: "Agresión", tut: "Lachipat / lakxlogot", foto: require("../assets/_30/v08.png"), audio: "au_3_se22.mp3" },
    { key: "21", esp: "Susto", tut: "Tapikwa", foto: require("../assets/_30/v08.png"), audio: "au_3_se23.mp3" },
    { key: "22", esp: "Tristeza", tut: "Talipuwan", foto: require("../assets/_30/v08.png"), audio: "au_3_se24.mp3" },
    { key: "23", esp: "Humillación", tut: "Nitukalalhiukxilht", foto: require("../assets/_30/v08.png"), audio: "au_3_se25.mp3" },
    { key: "24", esp: "Vergüenza", tut: "Tamaxana", foto: require("../assets/_30/v08.png"), audio: "au_3_se26.mp3" },
    { key: "25", esp: "Soledad", tut: "Liakstu", foto: require("../assets/_30/v08.png"), audio: "au_3_se27.mp3" },
    { key: "26", esp: "Miedo", tut: "Tapikwa", foto: require("../assets/_30/v08.png"), audio: "au_3_se28.mp3" },
    { key: "27", esp: "Lástima", tut: "Lalagkats", foto: require("../assets/_30/v08.png"), audio: "au_3_se29.mp3" },
    { key: "28", esp: "Enfado", tut: "Tasitsin", foto: require("../assets/_30/v08.png"), audio: "au_3_se30.mp3" },
    { key: "29", esp: "Envidia", tut: "Lasitsinit", foto: require("../assets/_30/v08.png"), audio: "au_3_se31.mp3" },
    { key: "30", esp: "Furia", tut: "Tasitsin", foto: require("../assets/_30/v08.png"), audio: "au_3_se32.mp3" },
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

function Sentimientos({ navigation }) {
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

export default Sentimientos;