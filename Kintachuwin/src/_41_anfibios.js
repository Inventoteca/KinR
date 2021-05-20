/**
 * Anfibios
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
    { key: "1", flags: 1, tut: "Akgpulut", esp: "Ajolote / Renacuajo", cie: "Anura", foto: require("../assets/_40/a1.jpg"), audio: "au_4_a1.mp3" },
    { key: "2", flags: 5, tut: "Lixut", esp: "Rana ", cie: "Lithobathes berlandieri", foto: require("../assets/_40/a2.jpg"), audio: "au_4_a2.mp3" },
    { key: "3", flags: 33, tut: "Tsurumpitpit", esp: "Rana chirriadora", cie: "Eleutherodactylus sp.", foto: require("../assets/_40/a3.jpg"), audio: "au_4_a3.mp3" },
    { key: "4", flags: 33, tut: "Swakgakgat", esp: "Rana verde", cie: "Rheohyla miotympanum", foto: require("../assets/_40/a4.jpg"), audio: "au_4_a4.mp3" },
    { key: "5", flags: 33, tut: "Tatuxktama", esp: "Salamandra negra", cie: "Aquiloeurycea cephalica", foto: require("../assets/_40/a5.jpg"), audio: "au_4_a5.mp3" },
    { key: "6", flags: 9, tut: "Chichakg", esp: "Sapo", cie: "Rhinella horribilis", foto: require("../assets/_40/a6.jpg"), audio: "au_4_a6.mp3" },
    { key: "7", flags: 33, tut: "Tsurumpitpit", esp: "Tlaconete", cie: "Bolitoglossa platydactyla", foto: require("../assets/_40/a7.jpg"), audio: "au_4_a7.mp3" },
];

const Item = (props) => {
    // La variable flags se usa para determinar los iconos a mostrar
    var fl = props.flags;
    // El siguiente array almacena componentes (iconos) o null
    var i1, i2, i3, i4, i5, i6;
    if (fl & 1)  i1 = <Imgn source={require('../assets/_40/iino.png')} width={60} />;
    if (fl & 2)  i2 = <Imgn source={require('../assets/_40/ipel.png')} width={60} />;
    if (fl & 4)  i3 = <Imgn source={require('../assets/_40/iali.png')} width={60} />;
    if (fl & 8)  i4 = <Imgn source={require('../assets/_40/imed.png')} width={60} />;
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
                ANFIBIOS
            </Text>
            <Text style={Styles.texto}>
                Son animales con huesos, de piel desnuda y permeable, que depositan huevos que no cuentan
                con una capa protectora como un cascarón. Fueron los primeros animales vertebrados que
                salieron del mar y colonizaron la vida terrestre hace 360 millones de años.
                {"\n\n"}
                Los anfibios se pueden agrupar en: (1) ranas y sapos, (2) tlaconetes o salamandras, y (3) cecilias.
                Las ranas y sapos poseen la capacidad de saltar y no tienen cola. Los tlaconetes o salamandras
                poseen cola pero no pueden saltar. Las cecilias no tienen extremidades. Los anfibios son animales
                muy importantes dentro de los ecosistemas, debido a que forman parte de las cadenas tróficas.
                Son presas de aves, reptiles, mamíferos e incluso insectos. En su papel de depredadores,
                los anfibios se alimentan principalmente de insectos, participando así en el control de
                plagas nocivas para la salud humana y los cultivos agrícolas.
                {"\n\n"}
                En el mundo existen más de 8,000 especies de anfibios, sin embargo el 40% está en peligro de
                desaparecer. Las principales amenazas contra los anfibios son la destrucción de sus hábitats
                y la contaminación. En México existen cerca de 430 especies de anfibios, de las cuales ninguna
                es peligrosa o puede causarle la muerte a las personas.
            </Text>
        </View>
    );
}

function Anfibios({ navigation }) {
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

export default Anfibios;