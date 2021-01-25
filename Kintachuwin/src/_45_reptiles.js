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
    { key: "62", tut: "Xkololokg", esp: "Lagartiga arcoriris", cie: "Holcosus undulatus", foto: require("../assets/_40/r1.jpg"), audio: "au_4_a62.mp3" },
    { key: "63", tut: "Sluluk", esp: "Lagartija", cie: "Sceloporus variabilis", foto: require("../assets/_40/r2.jpg"), audio: "au_4_a63.mp3" },
    { key: "64", tut: "Tankiwislulukg", esp: "Lagartija barisia", cie: "Barisia imbricata", foto: require("../assets/_40/r3.jpg"), audio: "au_4_a64.mp3" },
    { key: "65", tut: "Xatzi", esp: "Lagartija de grieta", cie: "Xenosaurus fractus", foto: require("../assets/_40/r4.jpg"), audio: "au_4_a65.mp3" },
    { key: "66", tut: "Akgcharango", esp: "Lagartija turipache", cie: "Corythophanes hernandezi", foto: require("../assets/_40/r5.jpg"), audio: "au_4_a66.mp3" },
    { key: "67", tut: "Jukiluwa", esp: "Mazacuate", cie: "Boa imperator", foto: require("../assets/_40/r6.jpg"), audio: "au_4_a67.mp3" },
    { key: "68", tut: "Kilhtsimunks", esp: "Nauyaca", cie: "Bothrops asper", foto: require("../assets/_40/r7.jpg"), audio: "au_4_a68.mp3" },
    { key: "69", tut: "Luwa", esp: "Serpiente ", cie: "Serpentes", foto: require("../assets/_40/r8.jpg"), audio: "au_4_a69.mp3" },
    { key: "70", tut: "Kuxiluwa", esp: "Serpiente maizera", cie: "Pituophis deppei", foto: require("../assets/_40/r9.jpg"), audio: "au_4_a70.mp3" },
    { key: "71", tut: "Kuxiluwa", esp: "Serpiente maizera", cie: "Spilotes pullatus", foto: require("../assets/_40/r10.jpg"), audio: "au_4_a71.mp3" },
    { key: "72", tut: "Kgayam", esp: "Tortuga", cie: "Emydidae", foto: require("../assets/_40/r11.jpg"), audio: "au_4_a72.mp3" },
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

function Reptiles({ navigation }) {
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

export default Reptiles;