/**
 * Árboles
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
    { key: "41", flags: 5, tut: "Asan", esp: "Bienvenido", cie: "Tapirira mexicana", foto: require("../assets/_50/aa1.jpg"), audio: "au_5_f41.mp3" },
    { key: "42", flags: 2, tut: "Kapsnaxanat", esp: "Bugambilia", cie: "Bougainvillea glabra choisy", foto: require("../assets/_50/aa2.jpg"), audio: "au_5_f42.mp3" },
    { key: "43", flags: 4, tut: "Aksan", esp: "Caoba", cie: "Swietenia humilis", foto: require("../assets/_50/aa3.jpg"), audio: "au_5_f43.mp3" },
    { key: "44", flags: 4, tut: "Xkoyutkiwi", esp: "Carboncillo", cie: "Licaria capitata", foto: require("../assets/_50/aa4.jpg"), audio: "au_5_f44.mp3" },
    { key: "45", flags: 2, tut: "Tusun", esp: "Chaca", cie: "Bursera simaruba", foto: require("../assets/_50/aa5.jpg"), audio: "au_5_f45.mp3" },
    { key: "46", flags: 4, tut: "Xunik", esp: "Jonote", cie: "Heliocarpus appendiculatus", foto: require("../assets/_50/aa6.jpg"), audio: "au_5_f46.mp3" },
    { key: "47", flags: 2, tut: "Okgowa", esp: "Hormiguillo", cie: "Cecropia obtusifolia", foto: require("../assets/_50/aa7.jpg"), audio: "au_5_f47.mp3" },
    { key: "48", flags: 1, tut: "Lakgatila", esp: "Colorin", cie: "Erythrina americana", foto: require("../assets/_50/aa8.jpg"), audio: "au_5_f48.mp3" },
    { key: "49", flags: 2, tut: "Tokgxiwa", esp: "Sauco", cie: "Sambucus canadensis", foto: require("../assets/_50/aa9.jpg"), audio: "au_5_f49.mp3" },
    { key: "50", flags: 4, tut: "Kukat", esp: "Encino", cie: "Quercus spp", foto: require("../assets/_50/aa10.jpg"), audio: "au_5_f50.mp3" },
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

function Arboles({ navigation }) {
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

export default Arboles;