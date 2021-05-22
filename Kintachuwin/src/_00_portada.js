/**
 * Portada
 * Es la pantalla que aparece cuando inica la app.
 * Contiene el logo de la app, el icono en grande, 
 * el logo de Xanay y un botón para pasar a la siguiente pantalla.
 */

 import React from 'react'; //librería principal
 import {//importar varios elementos
     View,
     Text,
     AppState,
     ScrollView,
     ImageBackground
 } from 'react-native'; //varios elementos
 import { Imgn, Boton, Styles } from './mis-componentes'; //importar componentes personalizados

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
                <Imgn source={require('../assets/logo.png')} width={340} />
                <View style={Styles.margen}></View>
                <Imgn source={require('../assets/xanay.png')} width={200} />
                <View style={Styles.margen}></View>
                <Boton title="Entrar" onPress={() => navigation.navigate('Principal')} />
            </ImageBackground>
        </View>
    );
}

export default Portada;