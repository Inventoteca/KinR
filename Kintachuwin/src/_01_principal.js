import React from 'react'; //estrictamente necesario
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native'; //varios elementos

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

const BotonImgTxt = (props) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 4,
                padding: 6,
                backgroundColor: 'whitesmoke',
                margin: 4,
                alignItems: 'center',
                flexDirection: 'row'
            }}
            onPress={props.onPress}
        >
            <Imgn source={props.source} width={64} />

            <Text style={{flex: 1, fontFamily: 'OpenSans-Regular', fontSize: 16, margin: 16 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

// justifyContent: 'center'
// resizeMode='contain'
function Principal({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems:'stretch', 
            //justifyContent:'flex-start', 
            backgroundColor: 'white',
            //padding: 24
        }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView contentContainerStyle={{ padding: 24 }}>
                {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
                <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold', backgroundColor: '#FFFFFFc0' }}>
                    ¡HOLA, TLEN, SKGATLEN!
            </Text>
                <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 24, marginBottom: 24, backgroundColor: '#FFFFFFc0' }}>
                    Nos da gusto que te acerques a conocer el idioma y cultura tutunakú.
                    El contenido de esta App considera la variante de Tuxtla, Puebla y
                    Filomeno Mata, Veracruz. Esperamos pronto agregar más variantes de
                este idioma a nuestro contenido.{"\n\n"}
                ¡Que lo disfrutes!
            </Text>

                <BotonImgTxt source={require('../assets/m1gramatica.png')} title="Gramática" onPress={() => navigation.navigate('Gramatica')} />
                <BotonImgTxt source={require('../assets/m2numeros.png')} title="Números" onPress={() => navigation.navigate('Numeros')} />
                <BotonImgTxt source={require('../assets/m3vocabulario.png')} title="Vocabulario" onPress={() => navigation.navigate('Vocabulario')} />
                <BotonImgTxt source={require('../assets/m4animales.png')} title="Animales" onPress={() => navigation.navigate('Animales')} />
                <BotonImgTxt source={require('../assets/m5plantas.png')} title="Plantas" onPress={() => navigation.navigate('Plantas')} />
                <BotonImgTxt source={require('../assets/m6audiovisuales.png')} title="Audiovisuales" onPress={() => navigation.navigate('Audiovisuales')} />
                <BotonImgTxt source={require('../assets/m7leyendas.png')} title="Leyendas" onPress={() => navigation.navigate('Cuentos')} />
                <BotonImgTxt source={require('../assets/m8galeria.png')} title="Galería" onPress={() => navigation.navigate('Galeria')} />
                <BotonImgTxt source={require('../assets/m9conocenos.png')} title="Conócenos" onPress={() => navigation.navigate('Conocenos')} />
            </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Principal;