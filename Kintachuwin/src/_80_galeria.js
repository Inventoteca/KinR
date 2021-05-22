/**
 * Galería
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { Imgn, BotonImg2, Styles } from './mis-componentes';

function Galeria({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <BotonImg2 source={require("../assets/_80/ff1.jpg")} onPress={() => navigation.navigate('Foto', { index: 0 })} />
                    <BotonImg2 source={require("../assets/_80/ff2.jpg")} onPress={() => navigation.navigate('Foto', { index: 1 })} />
                    <BotonImg2 source={require("../assets/_80/ff3.jpg")} onPress={() => navigation.navigate('Foto', { index: 2 })} />
                    <BotonImg2 source={require("../assets/_80/ff4.jpg")} onPress={() => navigation.navigate('Foto', { index: 3 })} />
                    <BotonImg2 source={require("../assets/_80/ff5.jpg")} onPress={() => navigation.navigate('Foto', { index: 4 })} />
                    <BotonImg2 source={require("../assets/_80/ff6.jpg")} onPress={() => navigation.navigate('Foto', { index: 5 })} />
                    <BotonImg2 source={require("../assets/_80/ff7.jpg")} onPress={() => navigation.navigate('Foto', { index: 6 })} />
                    <BotonImg2 source={require("../assets/_80/ff8.jpg")} onPress={() => navigation.navigate('Foto', { index: 7 })} />
                    <BotonImg2 source={require("../assets/_80/ff9.jpg")} onPress={() => navigation.navigate('Foto', { index: 8 })} />
                    <BotonImg2 source={require("../assets/_80/ff10.jpg")} onPress={() => navigation.navigate('Foto', { index: 9 })} />
                    <BotonImg2 source={require("../assets/_80/ff11.jpg")} onPress={() => navigation.navigate('Foto', { index: 10 })} />
                    <BotonImg2 source={require("../assets/_80/ff12.jpg")} onPress={() => navigation.navigate('Foto', { index: 11 })} />
                    <BotonImg2 source={require("../assets/_80/ff13.jpg")} onPress={() => navigation.navigate('Foto', { index: 12 })} />
                    <BotonImg2 source={require("../assets/_80/ff14.jpg")} onPress={() => navigation.navigate('Foto', { index: 13 })} />
                    <BotonImg2 source={require("../assets/_80/ff15.jpg")} onPress={() => navigation.navigate('Foto', { index: 14 })} />
                    <BotonImg2 source={require("../assets/_80/ff16.jpg")} onPress={() => navigation.navigate('Foto', { index: 15 })} />
                    <BotonImg2 source={require("../assets/_80/ff17.jpg")} onPress={() => navigation.navigate('Foto', { index: 16 })} />
                    <BotonImg2 source={require("../assets/_80/ff18.jpg")} onPress={() => navigation.navigate('Foto', { index: 17 })} />
                    <BotonImg2 source={require("../assets/_80/ff19.jpg")} onPress={() => navigation.navigate('Foto', { index: 18 })} />
                    <BotonImg2 source={require("../assets/_80/ff20.jpg")} onPress={() => navigation.navigate('Foto', { index: 19 })} />
                    <BotonImg2 source={require("../assets/_80/ff21.jpg")} onPress={() => navigation.navigate('Foto', { index: 20 })} />
                    <BotonImg2 source={require("../assets/_80/ff22.jpg")} onPress={() => navigation.navigate('Foto', { index: 21 })} />
                    <BotonImg2 source={require("../assets/_80/ff23.jpg")} onPress={() => navigation.navigate('Foto', { index: 22 })} />
                    <BotonImg2 source={require("../assets/_80/ff24.jpg")} onPress={() => navigation.navigate('Foto', { index: 23 })} />
                    <BotonImg2 source={require("../assets/_80/ff25.jpg")} onPress={() => navigation.navigate('Foto', { index: 24 })} />
                    <BotonImg2 source={require("../assets/_80/ff26.jpg")} onPress={() => navigation.navigate('Foto', { index: 25 })} />
                    <BotonImg2 source={require("../assets/_80/ff27.jpg")} onPress={() => navigation.navigate('Foto', { index: 26 })} />
                    <BotonImg2 source={require("../assets/_80/ff28.jpg")} onPress={() => navigation.navigate('Foto', { index: 27 })} />
                    <BotonImg2 source={require("../assets/_80/ff29.jpg")} onPress={() => navigation.navigate('Foto', { index: 28 })} />
                    <BotonImg2 source={require("../assets/_80/ff30.jpg")} onPress={() => navigation.navigate('Foto', { index: 29 })} />
                    <BotonImg2 source={require("../assets/_80/ff31.jpg")} onPress={() => navigation.navigate('Foto', { index: 30 })} />
                    <BotonImg2 source={require("../assets/_80/ff32.jpg")} onPress={() => navigation.navigate('Foto', { index: 31 })} />
                    <BotonImg2 source={require("../assets/_80/ff33.jpg")} onPress={() => navigation.navigate('Foto', { index: 32 })} />
                    <BotonImg2 source={require("../assets/_80/ff34.jpg")} onPress={() => navigation.navigate('Foto', { index: 33 })} />
                    <BotonImg2 source={require("../assets/_80/ff35.jpg")} onPress={() => navigation.navigate('Foto', { index: 34 })} />
                    <BotonImg2 source={require("../assets/_80/ff36.jpg")} onPress={() => navigation.navigate('Foto', { index: 35 })} />
                    <BotonImg2 source={require("../assets/_80/ff37.jpg")} onPress={() => navigation.navigate('Foto', { index: 36 })} />
                    <BotonImg2 source={require("../assets/_80/ff38.jpg")} onPress={() => navigation.navigate('Foto', { index: 37 })} />
                    <BotonImg2 source={require("../assets/_80/ff39.jpg")} onPress={() => navigation.navigate('Foto', { index: 38 })} />
                    <BotonImg2 source={require("../assets/_80/ff40.jpg")} onPress={() => navigation.navigate('Foto', { index: 39 })} />
                    <BotonImg2 source={require("../assets/_80/ff41.jpg")} onPress={() => navigation.navigate('Foto', { index: 40 })} />
                    <BotonImg2 source={require("../assets/_80/ff42.jpg")} onPress={() => navigation.navigate('Foto', { index: 41 })} />
                    <BotonImg2 source={require("../assets/_80/ff43.jpg")} onPress={() => navigation.navigate('Foto', { index: 42 })} />
                    <BotonImg2 source={require("../assets/_80/ff44.jpg")} onPress={() => navigation.navigate('Foto', { index: 43 })} />
                    <BotonImg2 source={require("../assets/_80/ff45.jpg")} onPress={() => navigation.navigate('Foto', { index: 44 })} />
                    <BotonImg2 source={require("../assets/_80/ff46.jpg")} onPress={() => navigation.navigate('Foto', { index: 45 })} />
                    <BotonImg2 source={require("../assets/_80/ff47.jpg")} onPress={() => navigation.navigate('Foto', { index: 46 })} />
                    <BotonImg2 source={require("../assets/_80/ff48.jpg")} onPress={() => navigation.navigate('Foto', { index: 47 })} />
                    <BotonImg2 source={require("../assets/_80/ff49.jpg")} onPress={() => navigation.navigate('Foto', { index: 48 })} />
                    <BotonImg2 source={require("../assets/_80/ff50.jpg")} onPress={() => navigation.navigate('Foto', { index: 49 })} />
                    <BotonImg2 source={require("../assets/_80/ff51.jpg")} onPress={() => navigation.navigate('Foto', { index: 50 })} />
                    <BotonImg2 source={require("../assets/_80/ff52.jpg")} onPress={() => navigation.navigate('Foto', { index: 51 })} />
                    <BotonImg2 source={require("../assets/_80/ff53.jpg")} onPress={() => navigation.navigate('Foto', { index: 52 })} />
                    <BotonImg2 source={require("../assets/_80/ff54.jpg")} onPress={() => navigation.navigate('Foto', { index: 53 })} />
                    <BotonImg2 source={require("../assets/_80/ff55.jpg")} onPress={() => navigation.navigate('Foto', { index: 54 })} />
                    <BotonImg2 source={require("../assets/_80/ff56.jpg")} onPress={() => navigation.navigate('Foto', { index: 55 })} />
                    <BotonImg2 source={require("../assets/_80/ff57.jpg")} onPress={() => navigation.navigate('Foto', { index: 56 })} />
                    <BotonImg2 source={require("../assets/_80/ff58.jpg")} onPress={() => navigation.navigate('Foto', { index: 57 })} />
                    <BotonImg2 source={require("../assets/_80/ff59.jpg")} onPress={() => navigation.navigate('Foto', { index: 58 })} />
                    <BotonImg2 source={require("../assets/_80/ff60.jpg")} onPress={() => navigation.navigate('Foto', { index: 59 })} />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Galeria;
