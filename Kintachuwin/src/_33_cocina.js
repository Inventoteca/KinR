/**
 * Utensilios de cocina
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
    { key: "1", esp: "Apaxtle", tut: "Akgsawat", foto: require("../assets/_33/uc1.png"), audio: "au_3_uc1.mp3" },
    { key: "2", esp: "Bandeja / lebrillo", tut: "Akgsmul", foto: require("../assets/_33/uc2.png"), audio: "au_3_uc2.mp3" },
    { key: "3", esp: "Bracero", tut: "Pumalhkuy", foto: require("../assets/_33/uc3.png"), audio: "au_3_uc3.mp3" },
    { key: "4", esp: "Canasta", tut: "Pakgx", foto: require("../assets/_33/uc4.png"), audio: "au_3_uc4.mp3" },
    { key: "5", esp: "Cántaro", tut: "Stun", foto: require("../assets/_33/uc5.png"), audio: "au_3_uc5.mp3" },
    { key: "6", esp: "Comal", tut: "Palhka", foto: require("../assets/_33/uc6.png"), audio: "au_3_uc6.mp3" },
    { key: "7", esp: "Cuchara de madera", tut: "Pumaxkgat", foto: require("../assets/_33/uc7.png"), audio: "au_3_uc7.mp3" },
    { key: "8", esp: "Metate", tut: "Xwati", foto: require("../assets/_33/uc8.png"), audio: "au_3_uc8.mp3" },
    { key: "9", esp: "Metlapil", tut: "Makgxwa", foto: require("../assets/_33/uc9.png"), audio: "au_3_uc9.mp3" },
    { key: "10", esp: "Molcajete", tut: "Puxpatan", foto: require("../assets/_33/uc10.png"), audio: "au_3_uc10.mp3" },
    { key: "11", esp: "Olla", tut: "Tlamink", foto: require("../assets/_33/uc11.png"), audio: "au_3_uc11.mp3" },
    { key: "12", esp: "Plato de barro", tut: "Lakg", foto: require("../assets/_33/uc12.png"), audio: "au_3_uc12.mp3" },
    { key: "13", esp: "Servilleta", tut: "Putiwat", foto: require("../assets/_33/uc13.png"), audio: "au_3_uc13.mp3" },
    { key: "14", esp: "Taza de barro", tut: "Xkutila", foto: require("../assets/_33/uc14.png"), audio: "au_3_uc14.mp3" },
    { key: "15", esp: "Temolote", tut: "Lixpatan", foto: require("../assets/_33/uc15.png"), audio: "au_3_uc15.mp3" },
    { key: "16", esp: "Xical", tut: "Kgaxi", foto: require("../assets/_33/uc16.png"), audio: "au_3_uc16.mp3" },
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

function Cocina({ navigation }) {
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

export default Cocina;