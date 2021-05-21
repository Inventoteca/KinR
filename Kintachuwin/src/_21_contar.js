/**
 * Contar
 * Esta pantalla muestra un texto, una imagen y un botón para reproducir audio.
 * Los datos que se muestran cambian dependiendo del valor que se recibe desde
 * la pantalla anterior.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { playLocalSound, Imgn, Boton, BotonImg, Styles } from './mis-componentes';

// Todos los datos que se pueden mostrar en la pantalla están en este array.
// Antes se usaba FlatList para mostrar todos.
// Ahora se muestra solo un objeto indicado con el valor de key que se recibe desde la pantalla anterior
const DATA = [
    { key: "0", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro", foto: require("../assets/_21/ak_f.jpg"), tabla: require("../assets/_21/ak_t.png"), audio: "au_2_ak.mp3" },
    { key: "1", titulo: "Akg", texto: "Se utiliza para contar elementos de forma esférica. También, es el prefijo de uso genérico que sirve para contar elementos de difícil clasificación", foto: require("../assets/_21/akg_f.jpg"), tabla: require("../assets/_21/akg_t.png"), audio: "au_2_akg.mp3" },
    { key: "2", titulo: "Akga", texto: "Se utiliza para contar plantas, flores y árboles", foto: require("../assets/_21/akga_f.jpg"), tabla: require("../assets/_21/akga_t.png"), audio: "au_2_akga.mp3" },
    { key: "3", titulo: "Akgsti", texto: "Se utiliza para contar rebanadas o gajos", foto: require("../assets/_21/akgsti_f.jpg"), tabla: require("../assets/_21/akgsti_t.png"), audio: "au_2_akgsti.mp3" },
    { key: "4", titulo: "Cha", texto: "Se utiliza para contar chiles y afines", foto: require("../assets/_21/cha_f.jpg"), tabla: require("../assets/_21/cha_t.png"), audio: "au_2_cha.mp3" },
    { key: "5", titulo: "Cha y Kgalha", texto: "Se utilizan para contar personas", foto: require("../assets/_21/chaykgalha_f.jpg"), tabla: require("../assets/_21/chaykgalha_t.png"), audio: "au_2_chaykgalha.mp3" },
    { key: "6", titulo: "Kgalh", texto: "Se utiliza para contar piezas de carne, machetes, cepillos o hachas", foto: require("../assets/_21/kgalh_f.jpg"), tabla: require("../assets/_21/kgalh_t.png"), audio: "au_2_kgalh.mp3" },
    { key: "7", titulo: "Kgampa", texto: "Se utiliza para contar canciones y sones", foto: require("../assets/_21/kgampa_f.jpg"), tabla: require("../assets/_21/kgampa_t.png"), audio: "au_2_kgampa.mp3" },
    { key: "8", titulo: "Kgan", texto: "Se utiliza para contar cosas alargadas como lápices, cables o palos", foto: require("../assets/_21/kgan_f.jpg"), tabla: require("../assets/_21/kgan_t.png"), audio: "au_2_kgan.mp3" },
    { key: "9", titulo: "Kge", texto: "Se utiliza para contar cosas rollizas como bultos de leña, plátanos o bolsas y costales con contenido", foto: require("../assets/_21/kge_f.jpg"), tabla: require("../assets/_21/kge_t.png"), audio: "au_2_kge.mp3" },
    { key: "10", titulo: "Kilh", texto: "Se utiliza para contar cosas con aberturas como morrales o bolsas", foto: require("../assets/_21/kilh_f.jpg"), tabla: require("../assets/_21/kilh_t.png"), audio: "au_2_kilh.mp3" },
    { key: "11", titulo: "Laka", texto: "Se utiliza para contar lugares", foto: require("../assets/_21/laka_f.jpg"), tabla: require("../assets/_21/laka_t.png"), audio: "au_2_laka.mp3" },
    { key: "12", titulo: "Lakga", texto: "Se utiliza para contar cosas planas como hojas de papel", foto: require("../assets/_21/lakga_f.jpg"), tabla: require("../assets/_21/lakga_t.png"), audio: "au_2_lakga.mp3" },
    { key: "13", titulo: "Mak", texto: "Se utiliza para contar cosas o superficies delgadas como tortillas, pan, libros o cuadernos", foto: require("../assets/_21/mak_f.jpg"), tabla: require("../assets/_21/mak_t.png"), audio: "au_2_mak.mp3" },
    { key: "14", titulo: "Mus", texto: "Se utiliza para contar cosas que cuelgan como racimos o mecapales", foto: require("../assets/_21/mus_f.jpg"), tabla: require("../assets/_21/mus_t.png"), audio: "au_2_mus.mp3" },
    { key: "15", titulo: "Pa", texto: "Se utiliza para contar objetos que tienen panza como mazorcas o recipientes", foto: require("../assets/_21/pa_f.jpg"), tabla: require("../assets/_21/pa_t.png"), audio: "au_2_pa.mp3" },
    { key: "16", titulo: "Pekg", texto: "Se utiliza para contar hojas, billetes, platos o recipientes vacíos", foto: require("../assets/_21/pekg_f.jpg"), tabla: require("../assets/_21/pekg_t.png"), audio: "au_2_pekg.mp3" },
    { key: "17", titulo: "Pix", texto: "Se utiliza para contar manojos", foto: require("../assets/_21/pix_f.jpg"), tabla: require("../assets/_21/pix_t.png"), audio: "au_2_pix.mp3" },
    { key: "18", titulo: "Pu’ak", texto: "Se utiliza para contar montones", foto: require("../assets/_21/puak_f.jpg"), tabla: require("../assets/_21/puak_t.png"), audio: "au_2_puak.mp3" },
    { key: "19", titulo: "Pukgalh", texto: "Se utiliza para contar plantas sembradas en conjunto o macetas", foto: require("../assets/_21/pukgalh_f.jpg"), tabla: require("../assets/_21/pukgalh_t.png"), audio: "au_2_pukgalh.mp3" },
    { key: "20", titulo: "Pun", texto: "Se utiliza para contar metates", foto: require("../assets/_21/pun_f.jpg"), tabla: require("../assets/_21/pun_t.png"), audio: "au_2_pun.mp3" },
    { key: "21", titulo: "Puu", texto: "Se utiliza para contar pares, enteros o completos como calzado o mudas de ropa", foto: require("../assets/_21/puu_f.jpg"), tabla: require("../assets/_21/puu_t.png"), audio: "au_2_puu.mp3" },
    { key: "22", titulo: "Tan", texto: "Se utiliza para contar animales", foto: require("../assets/_21/tan_f.jpg"), tabla: require("../assets/_21/tan_t.png"), audio: "au_2_tan.mp3" },
    { key: "23", titulo: "Tuu", texto: "Se utiliza para contar jicarazos, platos con comida o cazos de agua", foto: require("../assets/_21/tuu_f.jpg"), tabla: require("../assets/_21/tuu_t.png"), audio: "au_2_tuu.mp3" },
];

// Este item se usaba con FlatList
// Ahora se usa dentro de una ScrollView
const Item = (props) => {
    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={Styles.titulo}>
                <Text style={Styles.cursiva}>{props.titulo}</Text>
            </Text>
            <Text style={Styles.texto}>
                {props.texto}
            </Text>
            {/*<Imgn source={props.foto} width={240} />*/}
            <Imgn source={props.tabla} width={350} />
            <BotonImg source={require('../assets/audio.png')} width={48} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

// Se recibe un parámetro de la pantalla anterior (Numeros)
function Contar({ route, navigation }) {
    var key = route.params.key; //extraer valor del parámetro
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Item
                        titulo={DATA[key].titulo}
                        texto={DATA[key].texto}
                        tabla={DATA[key].tabla}
                        audio={DATA[key].audio}
                    />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Contar;
