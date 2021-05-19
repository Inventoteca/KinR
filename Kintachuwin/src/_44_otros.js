/**
 * Otros
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
    { key: "52", flags: "5", tut: "Akgachokg", esp: "Acamaya", cie: "Macrobrachium sp", foto: require("../assets/_40/o1.jpg"), audio: "au_4_a52.mp3" },
    { key: "53", flags: "5", tut: "Makgaxilh", esp: "Burrito / Crangrejo de río", cie: "Atyidae", foto: require("../assets/_40/o2.jpg"), audio: "au_4_a53.mp3" },
    { key: "54", flags: "33", tut: "Wikilit", esp: "Chicharra", cie: "Dorisiana drewseni", foto: require("../assets/_40/o3.jpg"), audio: "au_4_a54.mp3" },
    { key: "55", flags: "1", tut: "Silankgna", esp: "Grillo", cie: "Gryllidae", foto: require("../assets/_40/o4.jpg"), audio: "au_4_a55.mp3" },
    { key: "56", flags: "13", tut: "Chaan", esp: "Hormiga", cie: "Formicidae", foto: require("../assets/_40/o5.jpg"), audio: "au_4_a56.mp3" },
    { key: "57", flags: "1", tut: "Xpipilekg", esp: "Mariposa", cie: "Lepidoptera", foto: require("../assets/_40/o6.jpg"), audio: "au_4_a57.mp3" },
    { key: "58", flags: "1", tut: "Kuxta", esp: "Mosca", cie: "Diptera", foto: require("../assets/_40/o7.jpg"), audio: "au_4_a58.mp3" },
    { key: "59", flags: "33", tut: "Xtakgninkilh", esp: "Mosca verde", cie: "Phaenicia sericata", foto: require("../assets/_40/o8.jpg"), audio: "au_4_a59.mp3" },
    { key: "60", flags: "5", tut: "Skiti", esp: "Pescado", cie: "Actinopterygii", foto: require("../assets/_40/o9.jpg"), audio: "au_4_a60.mp3" },
    { key: "61", flags: "1", tut: "Xuy", esp: "Zancudo", cie: "Culicidae", foto: require("../assets/_40/o10.jpg"), audio: "au_4_a61.mp3" },
];

const Item = (props) => {
    // La variable flags se usa para determinar los iconos a mostrar
    var fl = props.flags;
    // El siguiente array almacena componentes (iconos) o null
    var i1, i2, i3, i4, i5, i6;
    if (fl & 1) i1 = <Imgn source={require('../assets/_40/iino.png')} width={60} />;
    if (fl & 2) i2 = <Imgn source={require('../assets/_40/ipel.png')} width={60} />;
    if (fl & 4) i3 = <Imgn source={require('../assets/_40/iali.png')} width={60} />;
    if (fl & 8) i4 = <Imgn source={require('../assets/_40/imed.png')} width={60} />;
    if (fl & 16) i5 = <Imgn source={require('../assets/_40/icom.png')} width={60} />;
    if (fl & 32) i6 = <Imgn source={require('../assets/_40/imag.png')} width={60} />;

    return (
        <View style={{ flexDirection: 'column', marginBottom: 16 }}>

            <View style={{ flexDirection: 'row' }}>
                <Imgn source={props.foto} width={150} />

                <View style={{ flex: 1, padding: 8, backgroundColor: '#FFFFFFd0' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'OpenSans-BoldItalic' }}>
                        {props.tut}
                    </Text>
                    <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular' }}>
                        {props.esp}
                    </Text>
                    <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Italic' }}>
                        {props.cie}
                    </Text>

                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {i1}
                        {i2}
                        {i3}
                        {i4}
                        {i5}
                        {i6}
                    </View>
                </View>
            </View>

            <BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

const Header = () => {
    return (
        <View>
            <Text style={Styles.titulo}>
                OTROS
             </Text>
            <Text style={Styles.texto}>
                En esta categoría encontrarás principalmente animales invertebrados, es decir 
                sin huesos. La mayoría se tratan de insectos, ya que cuentan con seis patas en 
                su cuerpo. También encontrarás animales con huesos como los peces.
                {"\n\n"}
                Pronto trabajaremos en una mejor descripción de esta categoría.
            </Text>
        </View>
    );
}

function Otros({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <FlatList
                    // Poner padding en style normal hace que el último elemento
                    // no sea completamente visible (se ve cortado).
                    // ¿Por qué contentContainerStyle si funciona?
                    // En la documentanción de FlatList no aparece esa prop,
                    // sin embargo aparece en la documentación de ScrollView.
                    //style={{ flex: 1, padding: 0, paddingBottom: 0, margin: 24 }}
                    contentContainerStyle={{ padding: 24 }}
                    ListHeaderComponent={Header}
                    data={DATA}
                    renderItem={({ item }) => <Item
                        tut={item.tut}
                        esp={item.esp}
                        cie={item.cie}
                        foto={item.foto}
                        audio={item.audio}
                        flags={item.flags}
                    />}
                />
            </ImageBackground>
        </View>
    );
}

export default Otros;