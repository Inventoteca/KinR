import React, { Component, useEffect } from 'react'; //estrictamente necesario
import {
    View,
    Text,
    Image,
    //Button,
    TouchableOpacity,
    AppState,
    ImageBackground,
} from 'react-native'; //varios elementos

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
                alignItems: 'center',
                width: 150,
                marginBottom: 48,
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 16 }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const _handleAppStateChange = (nextAppState) => {
    console.log(AppState.currentState);
    console.log(nextAppState);
}

// justifyContent: 'center'
// resizeMode='contain'
// <Text style={{fontSize:32}}>Portada</Text>
// <Image source={require('../assets/logo.png')} style={{width:320}} resizeMode='contain' />
// <Button title='Entrar' color='gray' onPress={() => navigation.navigate('Principal')} />
function Portada({ navigation }) {
    /*
    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);

        return () => {
            AppState.removeEventListener("change", _handleAppStateChange);
        };
    }, []);
    */
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow'}}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}}>
                <Imgn source={require('../assets/logo.png')} width={320} />
                <Boton title="Entrar" onPress={() => navigation.navigate('Principal')} />
                <Imgn source={require('../assets/xanay.png')} width={200} />
            </ImageBackground>
        </View>
    );
}

export default Portada;