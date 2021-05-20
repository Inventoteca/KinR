/**
 * Frutos, semillas o raíces
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
    { key: "1", flags: 3, tut: "Kukuta", esp: "Aguacate", cie: "Persea americana", foto: require("../assets/_50/f1.jpg"), audio: "au_5_f1.mp3" },
    { key: "2", flags: 3, tut: "Axux", esp: "Ajo", cie: "Allium sativum", foto: require("../assets/_50/f2.jpg"), audio: "au_5_f2.mp3" },
    { key: "3", flags: 1, tut: "Nipxi", esp: "Calabaza", cie: "Cucurbita pepo", foto: require("../assets/_50/f3.jpg"), audio: "au_5_f3.mp3" },
    { key: "4", flags: 1, tut: "Chataya", esp: "Capulín", cie: "Xylosma panamensis", foto: require("../assets/_50/f4.jpg"), audio: "au_5_f4.mp3" },
    { key: "5", flags: 1, tut: "Maklhtukun", esp: "Chayote / espinozo", cie: "Sechium edule", foto: require("../assets/_50/f5.jpg"), audio: "au_5_f5.mp3" },
    { key: "6", flags: 1, tut: "Akchítkiwi", esp: "Chirimoya", cie: "Annona cherimola", foto: require("../assets/_50/f6.jpg"), audio: "au_5_f6.mp3" },
    { key: "7", flags: 1, tut: "Chulux", esp: "Ciruela", cie: "Prunus spp", foto: require("../assets/_50/f7.jpg"), audio: "au_5_f7.mp3" },
    { key: "8", flags: 1, tut: "Lhileakg", esp: "Guaje", cie: "Leucaena leucocephala", foto: require("../assets/_50/f8.jpg"), audio: "au_5_f8.mp3" },
    { key: "9", flags: 3, tut: "Asiwit", esp: "Guayaba", cie: "Psidium guajava", foto: require("../assets/_50/f9.jpg"), audio: "au_5_f9.mp3" },
    { key: "10", flags: 1, tut: "Kuyum", esp: "Jicama", cie: "Pachyrhizus spp", foto: require("../assets/_50/f10.jpg"), audio: "au_5_f10.mp3" },
    { key: "11", flags: 3, tut: "Xukut", esp: "Limón", cie: "Citrus aurantifolia", foto: require("../assets/_50/f11.jpg"), audio: "au_5_f11.mp3" },
    { key: "12", flags: 1, tut: "Kuxi", esp: "Maíz", cie: "Zea mays", foto: require("../assets/_50/f12.jpg"), audio: "au_5_f12.mp3" },
    { key: "13", flags: 1, tut: "Laxux", esp: "Naranja", cie: "Citrus sinensis", foto: require("../assets/_50/f13.jpg"), audio: "au_5_f13.mp3" },
    { key: "14", flags: 1, tut: "Xaxkuta laxux", esp: "Naranja agría", cie: "Citrus aurantium", foto: require("../assets/_50/f14.jpg"), audio: "au_5_f14.mp3" },
    { key: "15", flags: 1, tut: "Lhpu", esp: "Pagua", cie: "Persea schiedeana", foto: require("../assets/_50/f15.jpg"), audio: "au_5_f15.mp3" },
    { key: "16", flags: 1, tut: "Akaxka", esp: "Piña", cie: "Ananas comosus", foto: require("../assets/_50/f16.jpg"), audio: "au_5_f16.mp3" },
    { key: "17", flags: 1, tut: "Sekgna", esp: "Plátano", cie: "Musa paradisiaca", foto: require("../assets/_50/f17.jpg"), audio: "au_5_f17.mp3" },
    { key: "18", flags: 1, tut: "Manzanasekgna", esp: "Plátano  manzano", cie: "Musa acuminata", foto: require("../assets/_50/f18.jpg"), audio: "au_5_f18.mp3" },
    { key: "19", flags: 1, tut: "Perasekgna", esp: "Plátano pera", cie: "Musa spp", foto: require("../assets/_50/f19.jpg"), audio: "au_5_f19.mp3" },
    { key: "20", flags: 1, tut: "Kununu", esp: "Zapote amarillo", cie: "Pouteria campechiana", foto: require("../assets/_50/f20.jpg"), audio: "au_5_f20.mp3" },
    { key: "21", flags: 3, tut: "Akgchixit jak", esp: "Zapote cabello", cie: "Licania platypus", foto: require("../assets/_50/f21.jpg"), audio: "au_5_f21.mp3" },
    { key: "22", flags: 1, tut: "Suwalh", esp: "Zapote negro", cie: "Diospyros digyna", foto: require("../assets/_50/f22.jpg"), audio: "au_5_f22.mp3" },
    { key: "23", flags: 1, tut: "Pij", esp: "Zapote oropillo", cie: "Casimiroa edulis", foto: require("../assets/_50/f23.jpg"), audio: "au_5_f23.mp3" },
    { key: "24", flags: 1, tut: "Chut", esp: "Piñón", cie: "Jatropha curcas", foto: require("../assets/_50/f24.jpg"), audio: "au_5_f24.mp3" },
    { key: "25", flags: 1, tut: "Akgatsasna", esp: "Cebolla", cie: "Allium spp", foto: require("../assets/_50/f25.jpg"), audio: "au_5_f25.mp3" },
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

            <BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />
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

function Frutos({ navigation }) {
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

export default Frutos;