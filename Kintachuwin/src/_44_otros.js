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
//import { FlatList } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

const DATA = [
    { key: "52", tut: "Akgachokg", esp: "Acamaya", cie: "Macrobrachium sp", foto: require("../assets/_40/o1.jpg"), audio: "au_4_a52.mp3" },
    { key: "53", tut: "Makgaxilh", esp: "Burrito / Crangrejo de río", cie: "Atyidae", foto: require("../assets/_40/o2.jpg"), audio: "au_4_a53.mp3" },
    { key: "54", tut: "Wikilit", esp: "Chicharra", cie: "Dorisiana drewseni", foto: require("../assets/_40/o3.jpg"), audio: "au_4_a54.mp3" },
    { key: "55", tut: "Silankgna", esp: "Grillo", cie: "Gryllidae", foto: require("../assets/_40/o4.jpg"), audio: "au_4_a55.mp3" },
    { key: "56", tut: "Chaan", esp: "Hormiga", cie: "Formicidae", foto: require("../assets/_40/o5.jpg"), audio: "au_4_a56.mp3" },
    { key: "57", tut: "Xpipilekg", esp: "Mariposa", cie: "Lepidoptera", foto: require("../assets/_40/o6.jpg"), audio: "au_4_a57.mp3" },
    { key: "58", tut: "Kuxta", esp: "Mosca", cie: "Diptera", foto: require("../assets/_40/o7.jpg"), audio: "au_4_a58.mp3" },
    { key: "59", tut: "Xtakgninkilh", esp: "Mosca verde", cie: "Phaenicia sericata", foto: require("../assets/_40/o8.jpg"), audio: "au_4_a59.mp3" },
    { key: "60", tut: "Skiti", esp: "Pescado", cie: "Actinopterygii", foto: require("../assets/_40/o9.jpg"), audio: "au_4_a60.mp3" },
    { key: "61", tut: "Xuy", esp: "Zancudo", cie: "Culicidae", foto: require("../assets/_40/o10.jpg"), audio: "au_4_a61.mp3" },
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

// Sonido ===========================================================================
Sound.setCategory('Playback', false);
function playLocalSound(file) {
    var mySound = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Error al cargar: ' + error);
            return;
        }
        else {
            mySound.play((success) => {
                if (success) {
                    console.log('Reproducción exitosa');
                }
                else {
                    console.log('Problema al reproducir');
                }
            })
        }
    });
    //mySound.setVolume(0.9);
    //Sound.stop();
    mySound.release();
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

function Otros({ navigation }) {
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

export default Otros;