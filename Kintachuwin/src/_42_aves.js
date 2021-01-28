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
    { key: "8", tut: "Monkgxni", esp: "Búho", cie: "Strigidae", foto: require("../assets/_40/av1.jpg"), audio: "au_4_a8.mp3" },
    { key: "9", tut: "Jun", esp: "Colibrí", cie: "Campylopterus sp", foto: require("../assets/_40/av2.jpg"), audio: "au_4_a9.mp3" },
    { key: "10", tut: "Xtilan", esp: "Gallina", cie: "Gallus gallus domesticus", foto: require("../assets/_40/av3.jpg"), audio: "au_4_a10.mp3" },
    { key: "11", tut: "Puyu", esp: "Gallo", cie: "Gallus gallus domesticus", foto: require("../assets/_40/av4.jpg"), audio: "au_4_a11.mp3" },
    { key: "12", tut: "Lokgo", esp: "Garza", cie: "Ardea alba", foto: require("../assets/_40/av5.jpg"), audio: "au_4_a12.mp3" },
    { key: "13", tut: "Waya'", esp: "Gavilán", cie: "Accipiter nisus", foto: require("../assets/_40/av6.jpg"), audio: "au_4_a13.mp3" },
    { key: "14", tut: "Chuwilá", esp: "Guajolote", cie: "Meleagris gallopavo", foto: require("../assets/_40/av7.jpg"), audio: "au_4_a14.mp3" },
    { key: "15", tut: "Chakan", esp: "Pajaro carpintero", cie: "Dryocopus lineatus", foto: require("../assets/_40/av8.jpg"), audio: "au_4_a15.mp3" },
    { key: "16", tut: "Patux", esp: "Pato", cie: "Anas platyrhynchos domesticus", foto: require("../assets/_40/av9.jpg"), audio: "au_4_a16.mp3" },
    { key: "17", tut: "Kgoyut", esp: "Perico", cie: "Psittacara holochlorus", foto: require("../assets/_40/av10.jpg"), audio: "au_4_a17.mp3" },
    { key: "18", tut: "Lakga", esp: "Quetzal", cie: "Pharomachrus mocinno", foto: require("../assets/_40/av11.jpg"), audio: "au_4_a18.mp3" },
    { key: "19", tut: "Mumu", esp: "Tecolote", cie: "Glaucidium brasilianum", foto: require("../assets/_40/av12.jpg"), audio: "au_4_a19.mp3" },
    { key: "20", tut: "Snati", esp: "Totola", cie: "Meleagris gallopavo", foto: require("../assets/_40/av13.jpg"), audio: "au_4_a20.mp3" },
    { key: "21", tut: "Chakglhni", esp: "Zanate", cie: "Quiscalus mexicanus", foto: require("../assets/_40/av14.jpg"), audio: "au_4_a21.mp3" },
    { key: "22", tut: "Chun", esp: "Zopilote", cie: "Coragyps atratus", foto: require("../assets/_40/av15.jpg"), audio: "au_4_a22.mp3" },
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

function Aves({ navigation }) {
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

export default Aves;