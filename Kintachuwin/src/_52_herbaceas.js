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
    { key: "26", tut: "Kulant", esp: "Cilantro", cie: "Coriandrum sativum", foto: require("../assets/_50/h1.jpg"), audio: "au_5_f26.mp3" },
    { key: "27", tut: "Puksnankak", esp: "Papalo", cie: "Porophyllum macrocephalum", foto: require("../assets/_50/h2.jpg"), audio: "au_5_f27.mp3" },
    { key: "28", tut: "Lhpupuwina", esp: "Hierbabuena", cie: "Mentha spicata", foto: require("../assets/_50/h3.jpg"), audio: "au_5_f28.mp3" },
    { key: "29", tut: "Kixtak", esp: "Pata de gallo", cie: "Tinantia erecta", foto: require("../assets/_50/h4.jpg"), audio: "au_5_f29.mp3" },
    { key: "30", tut: "Chikichi", esp: "Papatla", cie: "Cana indica", foto: require("../assets/_50/h5.jpg"), audio: "au_5_f30.mp3" },
    { key: "31", tut: "Kgalhtunit", esp: "Quintonile", cie: "Amaranthus cruentus", foto: require("../assets/_50/h6.jpg"), audio: "au_5_f31.mp3" },
    { key: "32", tut: "Axkut", esp: "Tabaco", cie: "Nicotiana tabacum", foto: require("../assets/_50/h7.jpg"), audio: "au_5_f32.mp3" },
    { key: "33", tut: "Chankgat", esp: "Caña", cie: "Saccharum officinarum", foto: require("../assets/_50/h8.jpg"), audio: "au_5_f33.mp3" },
    { key: "34", tut: "Santucruxanat", esp: "Flor de mayo", cie: "Oncidium sphacelatum", foto: require("../assets/_50/h9.jpg"), audio: "au_5_f34.mp3" },
    { key: "35", tut: "Kulixkak spp", esp: "Col criolla", cie: "Brassica sp.", foto: require("../assets/_50/h10.jpg"), audio: "au_5_f35.mp3" },
    { key: "36", tut: "Skikwat", esp: "Flor de San Juan", cie: "Palicoeurea spp", foto: require("../assets/_50/h11.jpg"), audio: "au_5_f36.mp3" },
    { key: "37", tut: "Jinan", esp: "Hoja santa", cie: "Piper auritum", foto: require("../assets/_50/h12.jpg"), audio: "au_5_f37.mp3" },
    { key: "38", tut: "Chuyun", esp: "Sábila", cie: "Aloe vera", foto: require("../assets/_50/h13.jpg"), audio: "au_5_f38.mp3" },
    { key: "39", tut: "Paxnikak", esp: "Mafafa", cie: "Xanthosoma robustum", foto: require("../assets/_50/h14.jpg"), audio: "au_5_f39.mp3" },
    { key: "40", tut: "Paxnikak", esp: "Mafafa", cie: "Xanthosoma violaceum", foto: require("../assets/_50/h15.jpg"), audio: "au_5_f40.mp3" },
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

function Herbaceas({ navigation }) {
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

export default Herbaceas;