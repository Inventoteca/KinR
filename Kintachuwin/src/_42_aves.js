/**
 * Aves
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
    { key: "8", flags: "33", tut: "Monkgxni", esp: "Búho", cie: "Strigidae", foto: require("../assets/_40/av1.jpg"), audio: "au_4_a8.mp3" },
    { key: "9", flags: "41", tut: "Jun", esp: "Colibrí", cie: "Campylopterus sp", foto: require("../assets/_40/av2.jpg"), audio: "au_4_a9.mp3" },
    { key: "10", flags: "21", tut: "Xtilan", esp: "Gallina", cie: "Gallus gallus domesticus", foto: require("../assets/_40/av3.jpg"), audio: "au_4_a10.mp3" },
    { key: "11", flags: "21", tut: "Puyu", esp: "Gallo", cie: "Gallus gallus domesticus", foto: require("../assets/_40/av4.jpg"), audio: "au_4_a11.mp3" },
    { key: "12", flags: "1", tut: "Lokgo", esp: "Garza", cie: "Ardea alba", foto: require("../assets/_40/av5.jpg"), audio: "au_4_a12.mp3" },
    { key: "13", flags: "1", tut: "Waya'", esp: "Gavilán", cie: "Accipiter nisus", foto: require("../assets/_40/av6.jpg"), audio: "au_4_a13.mp3" },
    { key: "14", flags: "21", tut: "Chuwilá", esp: "Guajolote", cie: "Meleagris gallopavo", foto: require("../assets/_40/av7.jpg"), audio: "au_4_a14.mp3" },
    { key: "15", flags: "1", tut: "Chakan", esp: "Pajaro carpintero", cie: "Dryocopus lineatus", foto: require("../assets/_40/av8.jpg"), audio: "au_4_a15.mp3" },
    { key: "16", flags: "17", tut: "Patux", esp: "Pato", cie: "Anas platyrhynchos domesticus", foto: require("../assets/_40/av9.jpg"), audio: "au_4_a16.mp3" },
    { key: "17", flags: "1", tut: "Kgoyut", esp: "Perico", cie: "Psittacara holochlorus", foto: require("../assets/_40/av10.jpg"), audio: "au_4_a17.mp3" },
    { key: "18", flags: "1", tut: "Lakga", esp: "Quetzal", cie: "Pharomachrus mocinno", foto: require("../assets/_40/av11.jpg"), audio: "au_4_a18.mp3" },
    { key: "19", flags: "33", tut: "Mumu", esp: "Tecolote", cie: "Glaucidium brasilianum", foto: require("../assets/_40/av12.jpg"), audio: "au_4_a19.mp3" },
    { key: "20", flags: "21", tut: "Snati", esp: "Totola", cie: "Meleagris gallopavo", foto: require("../assets/_40/av13.jpg"), audio: "au_4_a20.mp3" },
    { key: "21", flags: "9", tut: "Chakglhni", esp: "Zanate", cie: "Quiscalus mexicanus", foto: require("../assets/_40/av14.jpg"), audio: "au_4_a21.mp3" },
    { key: "22", flags: "9", tut: "Chun", esp: "Zopilote", cie: "Coragyps atratus", foto: require("../assets/_40/av15.jpg"), audio: "au_4_a22.mp3" },
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
                AVES
            </Text>
            <Text style={Styles.texto}>
                Las aves son animales con huesos huecos y muy livianos adaptados para el vuelo.
                Su piel está cubierta por plumas, y sus dos extremidades anteriores están modificadas
                en alas que les permiten planear. Algunas aves como los pingüinos no pueden volar
                pero son grandes nadadores. Durante su ciclo de vida, las aves ponen huevos protegidos
                por un cascarón. Algunas especies de aves suelen tener una pareja de por vida. Además,
                existen  especies de aves que llegan a vivir hasta 80 años, y otras que migran cientos
                de kilómetros cada año.
                {"\n\n"}
                Se piensa que las aves se originaron evolutivamente de los reptiles hace aproximadamente
                150 millones de años. Aunque parezca sorprendente las aves están muy emparentadas
                con los dinosaurios. Gracias a las aves, en el mundo se polinizan miles de especies
                vegetales debido a que las aves dispersan semillas en sus excretas.
                {"\n\n"}
                En el mundo existen casi 10,000 especies de aves  y 1200 están en peligro de desaparecer
                a causa de la tala desmedida, destrucción de hábitat y comercio de las mismas.
            </Text>
        </View>
    );
}

function Aves({ navigation }) {
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
                    data={DATA}
                    ListHeaderComponent={Header}
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

export default Aves;