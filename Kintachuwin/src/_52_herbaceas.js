/**
 * Herbáceas
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
    { key: "26", flags: 1, tut: "Kulant", esp: "Cilantro", cie: "Coriandrum sativum", foto: require("../assets/_50/h1.jpg"), audio: "au_5_f26.mp3" },
    { key: "27", flags: 1, tut: "Puksnankak", esp: "Papalo", cie: "Porophyllum macrocephalum", foto: require("../assets/_50/h2.jpg"), audio: "au_5_f27.mp3" },
    { key: "28", flags: 3, tut: "Lhpupuwina", esp: "Hierbabuena", cie: "Mentha spicata", foto: require("../assets/_50/h3.jpg"), audio: "au_5_f28.mp3" },
    { key: "29", flags: 1, tut: "Kixtak", esp: "Pata de gallo", cie: "Tinantia erecta", foto: require("../assets/_50/h4.jpg"), audio: "au_5_f29.mp3" },
    { key: "30", flags: 0, tut: "Chikichi", esp: "Papatla", cie: "Cana indica", foto: require("../assets/_50/h5.jpg"), audio: "au_5_f30.mp3" },
    { key: "31", flags: 1, tut: "Kgalhtunit", esp: "Quintonil", cie: "Amaranthus cruentus", foto: require("../assets/_50/h6.jpg"), audio: "au_5_f31.mp3" },
    { key: "32", flags: 2, tut: "Axkut", esp: "Tabaco", cie: "Nicotiana tabacum", foto: require("../assets/_50/h7.jpg"), audio: "au_5_f32.mp3" },
    { key: "33", flags: 1, tut: "Chankgat", esp: "Caña", cie: "Saccharum officinarum", foto: require("../assets/_50/h8.jpg"), audio: "au_5_f33.mp3" },
    { key: "34", flags: 2, tut: "Santucruxanat", esp: "Flor de mayo", cie: "Oncidium sphacelatum", foto: require("../assets/_50/h9.jpg"), audio: "au_5_f34.mp3" },
    { key: "35", flags: 1, tut: "Kulixkak spp", esp: "Col criolla", cie: "Brassica sp.", foto: require("../assets/_50/h10.jpg"), audio: "au_5_f35.mp3" },
    { key: "36", flags: 0, tut: "Skikwat", esp: "Flor de San Juan", cie: "Palicoeurea spp", foto: require("../assets/_50/h11.jpg"), audio: "au_5_f36.mp3" },
    { key: "37", flags: 3, tut: "Jinan", esp: "Hoja santa", cie: "Piper auritum", foto: require("../assets/_50/h12.jpg"), audio: "au_5_f37.mp3" },
    { key: "38", flags: 2, tut: "Chuyun", esp: "Sábila", cie: "Aloe vera", foto: require("../assets/_50/h13.jpg"), audio: "au_5_f38.mp3" },
    { key: "39", flags: 1, tut: "Paxnikak", esp: "Mafafa", cie: "Xanthosoma robustum", foto: require("../assets/_50/h14.jpg"), audio: "au_5_f39.mp3" },
    { key: "40", flags: 1, tut: "Paxnikak", esp: "Mafafa", cie: "Xanthosoma violaceum", foto: require("../assets/_50/h15.jpg"), audio: "au_5_f40.mp3" },
];

const Item = (props) => {
    // La variable flags se usa para determinar los iconos a mostrar
    var fl = props.flags;
    // El siguiente array almacena componentes (iconos) o null
    var i1, i2, i3;
    if (fl & 1) i1 = <Imgn source={require('../assets/_50/iali.png')} width={60} />;
    if (fl & 2) i2 = <Imgn source={require('../assets/_50/imed.png')} width={60} />;
    if (fl & 4) i3 = <Imgn source={require('../assets/_50/imad.png')} width={60} />;

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
                FRUTOS
              </Text>
            <Text style={Styles.texto}>
                {"\n\n"}
            </Text>
        </View>
    );
}

function Herbaceas({ navigation }) {
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
                    //ListHeaderComponent={Header}
                    contentContainerStyle={{ padding: 24 }}
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

export default Herbaceas;