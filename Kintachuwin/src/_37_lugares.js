/**
 * Lugares
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
    { key: "1", esp: "Casa", tut: "Chiki", foto: require("../assets/_37/lu01.jpg"), audio: "au_3_lu01.mp3" },
    { key: "2", esp: "Pueblo", tut: "Kachikin", foto: require("../assets/_37/lu02.jpg"), audio: "au_3_lu02.mp3" },
    { key: "3", esp: "Calle", tut: "Tiji", foto: require("../assets/_37/lu03.jpg"), audio: "au_3_lu03.mp3" },
    { key: "4", esp: "Iglesia", tut: "Sikwalan", foto: require("../assets/_37/lu04.jpg"), audio: "au_3_lu04.mp3" },
    { key: "5", esp: "Presidencia", tut: "Pumapaksin", foto: require("../assets/_37/lu05.jpg"), audio: "au_3_lu05.mp3" },
    { key: "6", esp: "Escuela", tut: "Pukgalhtawakga", foto: require("../assets/_37/lu06.jpg"), audio: "au_3_lu06.mp3" },
    { key: "7", esp: "Tienda", tut: "Pustan", foto: require("../assets/_37/lu07.jpg"), audio: "au_3_lu07.mp3" },
    { key: "8", esp: "Panteón", tut: "Putakgun", foto: require("../assets/_37/lu08.jpg"), audio: "au_3_lu08.mp3" },
    { key: "9", esp: "Puente", tut: "Patsapslitawaka", foto: require("../assets/_37/lu09.jpg"), audio: "au_3_lu09.mp3" },
    { key: "10", esp: "Desviación", tut: "Takgpisittiji", foto: require("../assets/_37/lu10.jpg"), audio: "au_3_lu10.mp3" },
    { key: "11", esp: "Camino", tut: "Tiji", foto: require("../assets/_37/lu11.jpg"), audio: "au_3_lu11.mp3" },
    { key: "12", esp: "Vereda", tut: "Lhkanatiji", foto: require("../assets/_37/lu12.jpg"), audio: "au_3_lu12.mp3" },
    { key: "13", esp: "Río", tut: "Kalhtuchokgo", foto: require("../assets/_37/lu13.jpg"), audio: "au_3_lu13.mp3" },
    { key: "14", esp: "Montaña", tut: "Kgastin", foto: require("../assets/_37/lu14.jpg"), audio: "au_3_lu14.mp3" },
    { key: "15", esp: "Cerro", tut: "Kasipini", foto: require("../assets/_37/lu15.jpg"), audio: "au_3_lu15.mp3" },
    { key: "16", esp: "Falda del cerro", tut: "Lakgastin kasipini", foto: require("../assets/_37/lu16.jpg"), audio: "au_3_lu16.mp3" },
    { key: "17", esp: "Punta del cerro", tut: "Akgspun kastin", foto: require("../assets/_37/lu17.jpg"), audio: "au_3_lu17.mp3" },
    { key: "18", esp: "Monte", tut: "Kakiwin", foto: require("../assets/_37/lu18.jpg"), audio: "au_3_lu18.mp3" },
    { key: "19", esp: "Milpa", tut: "Kaxawatna", foto: require("../assets/_37/lu19.jpg"), audio: "au_3_lu19.mp3" },
    { key: "20", esp: "Rancho", tut: "Katuwan", foto: require("../assets/_37/lu20.jpg"), audio: "au_3_lu20.mp3" },
    { key: "21", esp: "Potrero", tut: "Kasakgatna", foto: require("../assets/_37/lu21.jpg"), audio: "au_3_lu21.mp3" },
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

function Lugares({ navigation }) {
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

export default Lugares;