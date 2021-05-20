/**
 * Mamíferos
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
    { key: "23", flags: "5", tut: "Stayi", esp: "Ardilla", cie: "Sciurus aureogaster", foto: require("../assets/_40/m1.jpg"), audio: "au_4_a23.mp3" },
    { key: "24", flags: "5", tut: "Stayi", esp: "Ardilla", cie: "Sciurus deppei", foto: require("../assets/_40/m2.jpg"), audio: "au_4_a24.mp3" },
    { key: "25", flags: "5", tut: "Kuyu", esp: "Armadillo", cie: "Dasypus novemcinctus", foto: require("../assets/_40/m3.jpg"), audio: "au_4_a25.mp3" },
    { key: "26", flags: "17", tut: "Axnu", esp: "Burro", cie: "Equus africanus asinus", foto: require("../assets/_40/m4.jpg"), audio: "au_4_a26.mp3" },
    { key: "27", flags: "17", tut: "Kawayu", esp: "Caballo", cie: "Equus ferus caballus", foto: require("../assets/_40/m5.jpg"), audio: "au_4_a27.mp3" },
    { key: "28", flags: "21", tut: "Paxni", esp: "Cerdo", cie: "Sus scrofa domestica", foto: require("../assets/_40/m6.jpg"), audio: "au_4_a28.mp3" },
    { key: "29", flags: "5", tut: "Skaw", esp: "Conejo", cie: "Sylvilagus brasiliensis", foto: require("../assets/_40/m7.jpg"), audio: "au_4_a29.mp3" },
    { key: "30", flags: "5", tut: "Skaw", esp: "Conejo serrano", cie: "Sylvilagus floridanus", foto: require("../assets/_40/m8.jpg"), audio: "au_4_a30.mp3" },
    { key: "31", flags: "1", tut: "Xuwachichi", esp: "Coyote", cie: "Canis latrans", foto: require("../assets/_40/m9.jpg"), audio: "au_4_a31.mp3" },
    { key: "32", flags: "17", tut: "Mitsi", esp: "Gato", cie: "Felis silvestris catus", foto: require("../assets/_40/m10.jpg"), audio: "au_4_a32.mp3" },
    { key: "33", flags: "5", tut: "Kiwipaxni", esp: "Jabalí", cie: "Pecari tajacu", foto: require("../assets/_40/m11.jpg"), audio: "au_4_a33.mp3" },
    { key: "34", flags: "13", tut: "Mapachin", esp: "Mapache", cie: "Procyon lotor", foto: require("../assets/_40/m12.jpg"), audio: "au_4_a34.mp3" },
    { key: "35", flags: "1", tut: "Xtawakgwa", esp: "Marto", cie: "Potos flavus", foto: require("../assets/_40/m13.jpg"), audio: "au_4_a35.mp3" },
    { key: "36", flags: "33", tut: "Smajan", esp: "Onza / Comadreja", cie: "Mustela frenata", foto: require("../assets/_40/m14.jpg"), audio: "au_4_a36.mp3" },
    { key: "37", flags: "5", tut: "Sunkunú", esp: "Oso hormiguero", cie: "Tamandua mexicana", foto: require("../assets/_40/m15.jpg"), audio: "au_4_a37.mp3" },
    { key: "38", flags: "17", tut: "Chichí", esp: "Perro", cie: "Canis lupus familiaris", foto: require("../assets/_40/m16.jpg"), audio: "au_4_a38.mp3" },
    { key: "39", flags: "9", tut: "Xump", esp: "Puerco espín", cie: "Sphiggurus mexicanus", foto: require("../assets/_40/m17.jpg"), audio: "au_4_a39.mp3" },
    { key: "40", flags: "1", tut: "Tsiya", esp: "Ratón", cie: "Mus musculus", foto: require("../assets/_40/m18.jpg"), audio: "au_4_a40.mp3" },
    { key: "41", flags: "13", tut: "Xkuti", esp: "Tejón", cie: "Nasua narica", foto: require("../assets/_40/m19.jpg"), audio: "au_4_a41.mp3" },
    { key: "42", flags: "37", tut: "Skatan", esp: "Temazate", cie: "Mazama temama", foto: require("../assets/_40/m20.jpg"), audio: "au_4_a42.mp3" },
    { key: "43", flags: "2", tut: "Lapanit", esp: "Jaguar / Tigre", cie: "Panthera onca", foto: require("../assets/_40/m21.jpg"), audio: "au_4_a43.mp3" },
    { key: "44", flags: "2", tut: "Stakumisin", esp: "Tigrillo", cie: "Leopardus wiedii", foto: require("../assets/_40/m22.jpg"), audio: "au_4_a44.mp3" },
    { key: "45", flags: "1", tut: "Saka", esp: "Tuza", cie: "Geomyidae", foto: require("../assets/_40/m23.jpg"), audio: "au_4_a45.mp3" },
    { key: "46", flags: "5", tut: "Tuspan", esp: "Tuza real", cie: "Cuniculus paca", foto: require("../assets/_40/m24.jpg"), audio: "au_4_a46.mp3" },
    { key: "47", flags: "5", tut: "Tuspan", esp: "Tuza real", cie: "Dasyprocta punctata", foto: require("../assets/_40/m25.jpg"), audio: "au_4_a47.mp3" },
    { key: "48", flags: "21", tut: "Wakax", esp: "Vaca", cie: "Bos primigenius taurus", foto: require("../assets/_40/m26.jpg"), audio: "au_4_a48.mp3" },
    { key: "49", flags: "5", tut: "Juki", esp: "Venado", cie: "Odocoileus virginianus", foto: require("../assets/_40/m27.jpg"), audio: "au_4_a49.mp3" },
    { key: "50", flags: "33", tut: "Wakgni", esp: "Zorra gris", cie: "Urocyon cinereoargenteus", foto: require("../assets/_40/m28.jpg"), audio: "au_4_a50.mp3" },
    { key: "51", flags: "9", tut: "Sasan", esp: "Zorrillo", cie: "Mephitis macroura", foto: require("../assets/_40/m29.jpg"), audio: "au_4_a51.mp3" },
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

            <BotonImg source={require('../assets/audio.png')} width={48} onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

const Header = () => {
    return (
        <View>
            <Text style={Styles.titulo}>
                MAMÍFEROS
            </Text>
            <Text style={Styles.texto}>
                Los mamíferos son animales con huesos internos, su piel está cubierta por pelos que les
                permiten regular su temperatura, y en algunos casos especiales presentan estructuras
                como conchas o escamas. Los mamíferos se pueden clasificar en: (1) monotremas, mamíferos
                que ponen huevos como el ornitorrinco, (2) marsupiales, mamíferos que gestan a sus crías
                dentro de una bolsa o saco ubicada en su vientre llamado marsupio, como los tlacuaches,
                y (3) placentarios, son mamíferos que gestan a sus crías dentro de su vientre.como los
                primates, roedores,  felinos y las personas.
                {"\n\n"}
                Los mamíferos se han adaptado evolutivamente para trotar, en 2 o 4 patas, para nadar y
                para volar, como es el caso de los murciélagos. El mamífero más grande del planeta habita
                en los océanos, es la ballena azul. Su corazón es del tamaño de un auto pequeño, además,
                es el animal más ruidoso de la Tierra.
                {"\n\n"}
                El origen de los mamíferos se remonta hace 250 millones de años. Actualmente, en el
                mundo existen 6500 especies de mamíferos, de las cuales 500 especies habitan en México.
                A nivel mundial, México ocupa el tercer lugar con mamíferos en peligro de extinción.
            </Text>
        </View>
    );
}

function Mamiferos({ navigation }) {
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

export default Mamiferos;