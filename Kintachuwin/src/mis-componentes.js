/**
 * Mis componentes
 * Contiene componentes personalizados que se reutilizan en varias pantallas.
 */

// Importar varios elementos
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

// Reproducir sonido
function playLocalSound(file) {
    var f = file.split(".")
    try {
        SoundPlayer.playSoundFile(f[0], f[1]);
    } catch (e) {
        console.log("cannot play the sound file", e)
    }
}

// Detener sonido
function stopSound() {
    SoundPlayer.stop();
}

// Imagen con ancho fijo
// La altura se calcula manteniendo la relación aspecto
const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source); //encontrar archivo
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={props.source} style={{ width: w, height: h }} />
        </View>
    );
}

// Botón personalizado
// El botón predefinido es poco configurable. Este botón está formado por 
// un Touchable que contiene un Texto.
const Boton = (props) => {
    return (
        <TouchableOpacity 
            style={{
                borderColor:'gray', 
                borderWidth:1, 
                borderRadius:4, 
                padding:6, 
                backgroundColor:'whitesmoke', 
                margin:4,
                alignItems:'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{fontFamily:'OpenSans-Regular', fontSize:16}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

// Botón personalizado con imagen
// Está formado por un touchable que contiene una imagen
const BotonImg = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 0,
                borderRadius: 4,
                padding: 4,
                backgroundColor: 'whitesmoke',
                margin: 6,
                alignItems: 'center',
                //flexDirection: 'row', //horizontal
                shadowColor: 'black',
                shadowRadius: 6, //solo iOS
                elevation: 6,
            }}
            onPress={props.onPress}
        >
            <Imgn source={props.source} width={48} />
        </TouchableOpacity>
        </View>
    )
}

// Botón personalizado con imagen y texto
// Está formado por un touchable que contiene una imagen y un texto
// Se podría combinar con el botón anterior
const BotonImgTxt = (props) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 0,
                borderRadius: 4,
                padding: 4,
                backgroundColor: 'whitesmoke',
                margin: 6,
                alignItems: 'center',
                flexDirection: 'row', //horizontal
                shadowColor: 'black',
                shadowRadius: 8, //solo iOS
                elevation: 6,
            }}
            onPress={props.onPress}
        >
            <Imgn source={props.source} width={64} />

            <Text style={{ flex: 1, fontFamily: 'OpenSans-Regular', fontSize: 16, marginLeft: 32 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

// Hoja de estilos
const Styles = StyleSheet.create({
    simple: {// Texto normal
        fontSize: 16, fontFamily: 'OpenSans-Regular', marginLeft: 8, color: 'white'
    },
    titulo: {// Título normal
        fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black', backgroundColor: '#FFFFFFd0'
    },
    texto: {// Texto normal
        fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 24, marginBottom: 24, backgroundColor: '#FFFFFFd0'
    },
    cursiva: {// Usar dentro de un bloque normal para cambiar a cursiva
        fontStyle: 'italic', fontWeight: 'normal'
    },
    autor: {// Texto de bajo peso para nombres de autores
        fontSize: 16, fontFamily: 'OpenSans-Light', backgroundColor: '#FFFFFFd0'
    },
    tutunaku: {// Texto en cursivas para bloques escritos solo en tutunakú
        fontSize: 16, fontFamily: 'OpenSans-Italic', marginTop: 24, marginBottom: 24
    }
});

// Para exportar todo usar corchetes y separar con comas
//export default playLocalSound;
export {playLocalSound, stopSound, Imgn, Boton, BotonImg, BotonImgTxt, Styles};

// Código para copiar reutilizar

// Imagen de fondo
//<ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>

// Cursiva
//<Text style={Styles.cursiva}>

/*
<View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Imgn source={require('../assets/_40/imad.png')} width={64} />
                    <Text style={Styles.texto}>Maderable</Text>
                </View>
*/

//<BotonImg source={require('../assets/audio.png')} onPress={() => playLocalSound(props.audio)} />


// Código no utilizado =========================================================

// Importar desde gesture-handler
//import { FlatList } from 'react-native-gesture-handler';
//import { ScrollView } from 'react-native-gesture-handler';

//para la extensión react-native-sound que ya no se usa
//import Sound from 'react-native-sound';
//Sound.setCategory('Playback', false);
/*
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
*/

// Ejemplo de array utilizado con Flatlist
/*
const DATA = [
    {
        key:'00',
        titulo: "PRONOMBRES POSESIVOS",
        texto: "Los pronombres posesivos ayudan a indicar la posesión de algún elemento o cosa.",
        imagen: require('../assets/_12/img1.png'),
        audio: 'au_1_02.mp3',
    }
];
*/
/*<FlatList data={DATA} renderItem={
    ({item}) => <Item titulo={item.titulo} texto={item.texto} imagen={item.imagen} audio={item.audio} /> 
}/>*/

/*
<Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
    {props-autor}
</Text>
<Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold' }}>
    {props.titulo}
</Text>
*/

// Estilos en App.js==============================================================================
/*
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    fontFamily: "Purisa",
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
*/