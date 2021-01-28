import React from 'react'; //estrictamente necesario
import {
    View,
    Text,
    //Button,
    Image,
    //TouchableHighlight,
    //TouchableNativeFeedback,
    TouchableOpacity,
    FlatList,
} from 'react-native'; //varios elementos
import { playLocalSound } from './mis-componentes';

const DATA = [
    { key: "1", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/ak_f.jpg"), tabla: require("../assets/_21/ak_t.png"), audio: "au_2_ak.mp3" },
    { key: "2", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/akg_f.jpg"), tabla: require("../assets/_21/akg_t.png"), audio: "au_2_akg.mp3" },
    { key: "3", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/akga_f.jpg"), tabla: require("../assets/_21/akga_t.png"), audio: "au_2_akga.mp3" },
    { key: "4", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/akgsti_f.jpg"), tabla: require("../assets/_21/akgsti_t.png"), audio: "au_2_akgsti.mp3" },
    { key: "5", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/cha_f.jpg"), tabla: require("../assets/_21/cha_t.png"), audio: "au_2_cha.mp3" },
    { key: "6", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/chaykgalha_f.jpg"), tabla: require("../assets/_21/chaykgalha_t.png"), audio: "au_2_chaykgalha.mp3" },
    { key: "7", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/kgalh_f.jpg"), tabla: require("../assets/_21/kgalh_t.png"), audio: "au_2_kgalh.mp3" },
    { key: "8", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/kgampa_f.jpg"), tabla: require("../assets/_21/kgampa_t.png"), audio: "au_2_kgampa.mp3" },
    { key: "9", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/kgan_f.jpg"), tabla: require("../assets/_21/kgan_t.png"), audio: "au_2_kgan.mp3" },
    { key: "10", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/kge_f.jpg"), tabla: require("../assets/_21/kge_t.png"), audio: "au_2_kge.mp3" },
    { key: "11", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/kilh_f.jpg"), tabla: require("../assets/_21/kilh_t.png"), audio: "au_2_kilh.mp3" },
    { key: "12", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/laka_f.jpg"), tabla: require("../assets/_21/laka_t.png"), audio: "au_2_laka.mp3" },
    { key: "13", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/lakga_f.jpg"), tabla: require("../assets/_21/lakga_t.png"), audio: "au_2_lakga.mp3" },
    { key: "14", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/mak_f.jpg"), tabla: require("../assets/_21/mak_t.png"), audio: "au_2_mak.mp3" },
    { key: "15", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/mus_f.jpg"), tabla: require("../assets/_21/mus_t.png"), audio: "au_2_mus.mp3" },
    { key: "16", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/pa_f.jpg"), tabla: require("../assets/_21/pa_t.png"), audio: "au_2_pa.mp3" },
    { key: "17", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/pekg_f.jpg"), tabla: require("../assets/_21/pekg_t.png"), audio: "au_2_pekg.mp3" },
    { key: "18", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/pix_f.jpg"), tabla: require("../assets/_21/pix_t.png"), audio: "au_2_pix.mp3" },
    { key: "19", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/puak_f.jpg"), tabla: require("../assets/_21/puak_t.png"), audio: "au_2_puak.mp3" },
    { key: "20", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/pukgalh_f.jpg"), tabla: require("../assets/_21/pukgalh_t.png"), audio: "au_2_pukgalh.mp3" },
    { key: "21", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/pun_f.jpg"), tabla: require("../assets/_21/pun_t.png"), audio: "au_2_pun.mp3" },
    { key: "22", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/puu_f.jpg"), tabla: require("../assets/_21/puu_t.png"), audio: "au_2_puu.mp3" },
    { key: "23", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/tan_f.jpg"), tabla: require("../assets/_21/tan_t.png"), audio: "au_2_tan.mp3" },
    { key: "24", titulo: "Ak", texto: "Se utiliza para contar trozos o unidades de medición, como el metro.", foto: require("../assets/_21/tuu_f.jpg"), tabla: require("../assets/_21/tuu_t.png"), audio: "au_2_tuu.mp3" },
];

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View>
            <Image source={props.source} style={{ width: w, height: h }} />
        </View>
    );
}

const Boton = (props) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 4,
                padding: 6,
                backgroundColor: 'whitesmoke',
                margin: 4,
                alignItems: 'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 16 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

/*<Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
    {props-autor}
</Text>*/
const Item = (props) => {
    return (
        <View style={{ margin: 0 }}>
            <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold' }}>
                {props.titulo}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 0, marginBottom: 0 }}>
                {props.texto}
            </Text>
            <Imgn source={props.foto} width={240} />
            <Imgn source={props.tabla} width={340} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

const Header = () => {
    return (
        <View style={{
            flex: 1,
            //  alignItems: 'stretch',
            //justifyContent: 'flex-start',
            //backgroundColor: 'white',
            //padding: 24
        }}
        >
            {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
            <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold' }}>
                NÚMEROS
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Light' }}>
                Por José Santiago y Juan M. Díaz
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 24, marginBottom: 24 }}>
                Cuando se cuenta en el idioma tutunakú, los números siempre van acompañados por
                un prefijo que está determinado la forma o aspecto del elemento que se está contando.
                {"\n\n"}
                Aquí te presentamos 24 prefijos que sirven para contar un sinfín de cosas.
                Podrás aprender la escritura y pronunciación en la variante central alto.
            </Text>
        </View>
    )
}

function Contar({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems: 'stretch',
            //justifyContent: 'flex-start',
            backgroundColor: 'white',
            //padding: 0,
        }}>
            <FlatList
                // Poner padding en style normal hace que el último elemento
                // no sea completamente visible (se ve cortado).
                // ¿Por qué contentContainerStyle si funciona?
                // En la documentanción de FlatList no aparece esa prop,
                // sin embargo aparece en la documentación de ScrollView.
                //style={{ flex: 1, padding: 0, paddingBottom: 0, margin: 24 }}
                contentContainerStyle={{ padding: 24 }}
                data={DATA}
                renderItem={({ item }) => <Item
                    titulo={item.titulo}
                    texto={item.texto}
                    foto={item.foto}
                    tabla={item.tabla}
                    audio={item.audio}
                />}

                //ListHeaderComponent={Header}
            />

        </View>
    );
}

export default Contar;

//<View style={{height:24}}></View>