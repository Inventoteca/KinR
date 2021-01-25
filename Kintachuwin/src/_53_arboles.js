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
    { key: "41", tut: "Asan", esp: "Bienvenido", cie: "Tapirira mexicana", foto: require("../assets/_50/aa1.jpg"), audio: "au_5_f41.mp3" },
    { key: "42", tut: "Kapsnaxanat", esp: "Bugambilia", cie: "Bougainvillea glabra choisy", foto: require("../assets/_50/aa2.jpg"), audio: "au_5_f42.mp3" },
    { key: "43", tut: "Aksan", esp: "Caoba", cie: "Swietenia humilis", foto: require("../assets/_50/aa3.jpg"), audio: "au_5_f43.mp3" },
    { key: "44", tut: "Xkoyutkiwi", esp: "Carboncillo", cie: "Licaria capitata", foto: require("../assets/_50/aa4.jpg"), audio: "au_5_f44.mp3" },
    { key: "45", tut: "Tusun", esp: "Chaca", cie: "Bursera simaruba", foto: require("../assets/_50/aa5.jpg"), audio: "au_5_f45.mp3" },
    { key: "46", tut: "Xunik", esp: "Jonote", cie: "Heliocarpus appendiculatus", foto: require("../assets/_50/aa6.jpg"), audio: "au_5_f46.mp3" },
    { key: "47", tut: "Okgowa", esp: "Hormiguillo", cie: "Cecropia obtusifolia", foto: require("../assets/_50/aa7.jpg"), audio: "au_5_f47.mp3" },
    { key: "48", tut: "Lakgatila", esp: "Colorin", cie: "Erythrina americana", foto: require("../assets/_50/aa8.jpg"), audio: "au_5_f48.mp3" },
    { key: "49", tut: "Tokgxiwa", esp: "Sauco", cie: "Sambucus canadensis", foto: require("../assets/_50/aa9.jpg"), audio: "au_5_f49.mp3" },
    { key: "50", tut: "Kukat", esp: "Encino", cie: "Quercus spp", foto: require("../assets/_50/aa10.jpg"), audio: "au_5_f50.mp3" },
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

function Arboles({ navigation }) {
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

export default Arboles;