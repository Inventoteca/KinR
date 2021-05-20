/**
 * Reptiles
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
    { key: "62", flags: "33", tut: "Xkololokg", esp: "Lagartiga arcoriris", cie: "Holcosus undulatus", foto: require("../assets/_40/r1.jpg"), audio: "au_4_a62.mp3" },
    { key: "63", flags: "33", tut: "Sluluk", esp: "Lagartija", cie: "Sceloporus variabilis", foto: require("../assets/_40/r2.jpg"), audio: "au_4_a63.mp3" },
    { key: "64", flags: "33", tut: "Tankiwislulukg", esp: "Lagartija barisia", cie: "Barisia imbricata", foto: require("../assets/_40/r3.jpg"), audio: "au_4_a64.mp3" },
    { key: "65", flags: "33", tut: "Xatzi", esp: "Lagartija de grieta", cie: "Xenosaurus fractus", foto: require("../assets/_40/r4.jpg"), audio: "au_4_a65.mp3" },
    { key: "66", flags: "33", tut: "Akgcharango", esp: "Lagartija turipache", cie: "Corythophanes hernandezi", foto: require("../assets/_40/r5.jpg"), audio: "au_4_a66.mp3" },
    { key: "67", flags: "33", tut: "Jukiluwa", esp: "Mazacuate", cie: "Boa imperator", foto: require("../assets/_40/r6.jpg"), audio: "au_4_a67.mp3" },
    { key: "68", flags: "38", tut: "Kilhtsimunks", esp: "Nauyaca", cie: "Bothrops asper", foto: require("../assets/_40/r7.jpg"), audio: "au_4_a68.mp3" },
    { key: "69", flags: "3", tut: "Luwa", esp: "Serpiente ", cie: "Serpentes", foto: require("../assets/_40/r8.jpg"), audio: "au_4_a69.mp3" },
    { key: "70", flags: "33", tut: "Kuxiluwa", esp: "Serpiente maizera", cie: "Pituophis deppei", foto: require("../assets/_40/r9.jpg"), audio: "au_4_a70.mp3" },
    { key: "71", flags: "33", tut: "Kuxiluwa", esp: "Serpiente maizera", cie: "Spilotes pullatus", foto: require("../assets/_40/r10.jpg"), audio: "au_4_a71.mp3" },
    { key: "72", flags: "17", tut: "Kgayam", esp: "Tortuga", cie: "Emydidae", foto: require("../assets/_40/r11.jpg"), audio: "au_4_a72.mp3" },
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
                REPTILES
            </Text>
            <Text style={Styles.texto}>
                Los reptiles son animales con huesos que tienen la piel cubierta por escamas,
                y sus huevos están protegidos por una clase de cascarón. Los primeros reptiles
                surgieron hace 300 millones de años.
                {"\n\n"}
                Estos animales vertebrados se pueden agrupar en: (1) cocodrilos, (2) tortugas, y (3)
                serpientes y lagartijas. Los cocodrilos son los reptiles de mayor tamaño y viven en
                zonas pantanosas. Las tortugas poseen un caparazón que protege su cuerpo y pueden vivir
                en ambientes terrestres, dulceacuícolas y marinos. Finalmente, las serpientes son reptiles
                sin extremidades y las lagartijas son reptiles esbeltos con cuatro extremidades.
                {"\n\n"}
                En el mundo existen casi 10000 especies de reptiles, y en México podemos encontrar cerca
                de 900. Los reptiles son animales muy importantes debido a que algunas sustancias médicas
                que se usan en el tratamiento de enfermedades humanas provienen de ellos.
             </Text>
        </View>
    );
}

function Reptiles({ navigation }) {
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

export default Reptiles;