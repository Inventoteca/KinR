/**
 * Números
 * Contiene una lista de botones que llevan a una pantalla con descripción,
 * imagen (tabla) y un botón para reproducir audio.
 * Esa pantalla puede ser la misma, pero al presionar el botón se pasan
 * parámetros de modo que se muestre contenido diferente.
 */

import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native'; //varios elementos
import {Boton, Styles} from './mis-componentes';

function Numeros({ navigation }) {
    return (
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24
        }}>
            {/*<Image source={require('../assets/logo.png')} 
                style={{width:320, height:60}} resizeMode='contain'
            />*/}
            <Text style={Styles.titulo}>
                NÚMEROS
            </Text>
            <Text style={Styles.autor}>
                Por José Santiago y Juan M. Díaz
            </Text>
            <Text style={Styles.texto}>
                Cuando se cuenta en el idioma <Text style={Styles.cursiva}>tutunakú</Text>, 
                los números siempre van acompañados por un prefijo que está determinado la 
                forma o aspecto del elemento que se está contando. Estos prefijos solo se 
                utilizan para contar de 1 al 20, después del 20 no es necesario usarlos.
                {"\n\n"}
                Aquí te presentamos 24 prefijos que sirven para contar un sinfín de cosas.
                Podrás aprender la escritura y pronunciación en la variante central alto.
                {"\n\n"}
                ¿Qué quieres aprender a contar?
            </Text>
            
            <Boton title="Contar" onPress={() => navigation.navigate('Contar')} />
        </View>
    );
}

export default Numeros;
