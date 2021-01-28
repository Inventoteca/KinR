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
    { key: "1", tut: "Akgpulut", esp: "Ajolote / Renacuajo", cie: "Anura", foto: require("../assets/_40/a1.jpg"), audio: "au_4_a1.mp3" },
    { key: "2", tut: "Lixut", esp: "Rana ", cie: "Lithobathes berlandieri", foto: require("../assets/_40/a2.jpg"), audio: "au_4_a2.mp3" },
    { key: "3", tut: "Tsurumpitpit", esp: "Rana chirriadora", cie: "Eleutherodactylus sp.", foto: require("../assets/_40/a3.jpg"), audio: "au_4_a3.mp3" },
    { key: "4", tut: "Swakgakgat", esp: "Rana verde", cie: "Rheohyla miotympanum", foto: require("../assets/_40/a4.jpg"), audio: "au_4_a4.mp3" },
    { key: "5", tut: "Tatuxktama", esp: "Salamandra negra", cie: "Aquiloeurycea cephalica", foto: require("../assets/_40/a5.jpg"), audio: "au_4_a5.mp3" },
    { key: "6", tut: "Chichakg", esp: "Sapo", cie: "Rhinella horribilis", foto: require("../assets/_40/a6.jpg"), audio: "au_4_a6.mp3" },
    { key: "7", tut: "Tsurumpitpit", esp: "Tlaconete", cie: "Bolitoglossa platydactyla", foto: require("../assets/_40/a7.jpg"), audio: "au_4_a7.mp3" },
];

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View style={{ alignItems: 'flex-start' }} >
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
                marginTop: 6,
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
/*<Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 0, marginBottom: 0 }}>
                {props.texto}
            </Text>*/
const Item = (props) => {
    return (
        <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Bold' }}>
                {props.tut}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular' }}>
                {props.esp}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Italic' }}>
                {props.cie}
            </Text>
            <Imgn source={props.foto} width={240} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Anfibios({ navigation }) {
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
                    tut={item.tut}
                    esp={item.esp}
                    cie={item.cie}
                    foto={item.foto}
                    audio={item.audio}
                />}
            />

        </View>
    );
}

export default Anfibios;