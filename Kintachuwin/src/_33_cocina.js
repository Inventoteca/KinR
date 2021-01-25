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
    { key: "1", esp: "Apaxtle", tut: "Akgsawat", foto: require("../assets/_33/uc1.png"), audio: "au_3_uc1.mp3" },
    { key: "2", esp: "Bandeja / lebrillo", tut: "Akgsmul", foto: require("../assets/_33/uc2.png"), audio: "au_3_uc2.mp3" },
    { key: "3", esp: "Bracero", tut: "Pumalhkuy", foto: require("../assets/_33/uc3.png"), audio: "au_3_uc3.mp3" },
    { key: "4", esp: "Canasta", tut: "Pakgx", foto: require("../assets/_33/uc4.png"), audio: "au_3_uc4.mp3" },
    { key: "5", esp: "Cántaro", tut: "Stun", foto: require("../assets/_33/uc5.png"), audio: "au_3_uc5.mp3" },
    { key: "6", esp: "Comal", tut: "Palhka", foto: require("../assets/_33/uc6.png"), audio: "au_3_uc6.mp3" },
    { key: "7", esp: "Cuchara de madera", tut: "Pumaxkgat", foto: require("../assets/_33/uc7.png"), audio: "au_3_uc7.mp3" },
    { key: "8", esp: "Metate", tut: "Xwati", foto: require("../assets/_33/uc8.png"), audio: "au_3_uc8.mp3" },
    { key: "9", esp: "Metlapil", tut: "Makgxwa", foto: require("../assets/_33/uc9.png"), audio: "au_3_uc9.mp3" },
    { key: "10", esp: "Molcajete", tut: "Puxpatan", foto: require("../assets/_33/uc10.png"), audio: "au_3_uc10.mp3" },
    { key: "11", esp: "Olla", tut: "Tlamink", foto: require("../assets/_33/uc11.png"), audio: "au_3_uc11.mp3" },
    { key: "12", esp: "Plato de barro", tut: "Lakg", foto: require("../assets/_33/uc12.png"), audio: "au_3_uc12.mp3" },
    { key: "13", esp: "Servilleta", tut: "Putiwat", foto: require("../assets/_33/uc13.png"), audio: "au_3_uc13.mp3" },
    { key: "14", esp: "Taza de barro", tut: "Xkutila", foto: require("../assets/_33/uc14.png"), audio: "au_3_uc14.mp3" },
    { key: "15", esp: "Temolote", tut: "Lixpatan", foto: require("../assets/_33/uc15.png"), audio: "au_3_uc15.mp3" },
    { key: "16", esp: "Xical", tut: "Kgaxi", foto: require("../assets/_33/uc16.png"), audio: "au_3_uc16.mp3" },
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
            <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black' }}>
                <Text style={{ fontStyle: 'italic', fontWeight: 'normal' }}>{props.tut} - </Text>
                <Text style={{ fontStyle: 'normal', fontWeight: 'normal' }}>{props.esp} </Text>
            </Text>
            <Imgn source={props.foto} width={240} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Cocina({ navigation }) {
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
                    esp={item.esp}
                    tut={item.tut}
                    //texto={item.texto}
                    foto={item.foto}
                    //tabla={item.tabla}
                    audio={item.audio}
                />}
            />

        </View>
    );
}

export default Cocina;