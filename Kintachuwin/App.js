/**
 * Kintachuwin App
 * Editado desde Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow strict-local
 */

// Importar todo los necesario ==========================================================
//import 'react-native-gesture-handler'; //para terminar instalación de este modulo?
import React from 'react'; //estrictamente necesario
import { NavigationContainer } from '@react-navigation/native'; //navegación contenedor
import { createStackNavigator } from '@react-navigation/stack'; //navegación stack
//import Sound from 'react-native-sound'; //para reproducir sonidos
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native'; //varios elementos

// Youtube =================================================================================
//import YoutubePlayer from 'react-native-youtube-iframe' //para insertar video de youtube
//import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

// Pantallas - Screens ==================================================================================
//import Externo from './_externo';
import Portada from "./src/_00_portada";
import Principal from "./src/_01_principal";

import Gramatica from "./src/_10_gramatica";
import Numeros from "./src/_20_numeros";
import Vocabulario from "./src/_30_vocabulario";
import Animales from "./src/_40_animales";
import Plantas from "./src/_50_plantas";
import Audiovisuales from "./src/_60_audiovisuales";
import Cuentos from "./src/_70_cuentos";
import Galeria from "./src/_80_galeria";
import Conocenos from "./src/_90_conocenos";

import Grafias from "./src/_11_grafias";
import Pronombres from "./src/_12_pronombres";
import Prefijos from "./src/_13_prefijos";

import Contar from "./src/_21_contar";

import Colores from "./src/_31_colores";
import Cuerpo from "./src/_32_cuerpo";
import Cocina from "./src/_33_cocina";

import Anfibios from "./src/_41_anfibios";
import Aves from "./src/_42_aves";
import Mamiferos from "./src/_43_mamiferos";
import Otros from "./src/_44_otros";
import Reptiles from "./src/_45_reptiles";

const Stack = createStackNavigator();

// App principal ====================================================================================
// Usar prop options en Stack.Screen para poner el título con ortografía correcta en donde sea necesario
// Usar prop screenOptions en Stack.Navigator para establecer estilo base de las Screens
// fontSize: 20 por defecto en header de navigator
// height: 56 por defecto en header de navigator 
// options={{ headerShown: false }} para ocultar header en Portada
// verde '#008037'
// azul '#004AAD'
//<StatusBar barStyle="light-content" backgroundColor='black' />
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor='black' />

      <Stack.Navigator initialRouteName="Portada" screenOptions={{
        headerStyle: { backgroundColor: '#008037', height: 48 },
        headerTintColor: 'white',
        headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 },
      }} /*headerMode="none"*/>

        <Stack.Screen name="Portada" component={Portada} options={{ headerShown: false }} />
        <Stack.Screen name="Principal" component={Principal} />

        <Stack.Screen name="Gramatica" component={Gramatica} options={{ title: "Gramática" }} />
        <Stack.Screen name="Numeros" component={Numeros} options={{ title: "Números" }} />
        <Stack.Screen name="Vocabulario" component={Vocabulario} />
        <Stack.Screen name="Animales" component={Animales} />
        <Stack.Screen name="Plantas" component={Plantas} />
        <Stack.Screen name="Audiovisuales" component={Audiovisuales} />
        <Stack.Screen name="Cuentos" component={Cuentos} />
        <Stack.Screen name="Galeria" component={Galeria} options={{ title: "Galería" }} />
        <Stack.Screen name="Conocenos" component={Conocenos} options={{ title: "Conócenos" }} />

        <Stack.Screen name="Grafias" component={Grafias} options={{ title: "Grafías" }} />
        <Stack.Screen name="Pronombres" component={Pronombres} options={{ title: "Pronombres posesivos" }} />
        <Stack.Screen name="Prefijos" component={Prefijos} options={{ title: "Prefijos posesivos" }} />

        <Stack.Screen name="Contar" component={Contar} options={{ title: "Números - Contar" }} />

        <Stack.Screen name="Colores" component={Colores} options={{ title: "Colores" }} />
        <Stack.Screen name="Cuerpo" component={Cuerpo} options={{ title: "Partes del cuerpo" }} />
        <Stack.Screen name="Cocina" component={Cocina} options={{ title: "Utensilios de cocina" }} />

        <Stack.Screen name="Anfibios" component={Anfibios} />
        <Stack.Screen name="Aves" component={Aves} />
        <Stack.Screen name="Mamiferos" component={Mamiferos} options={{ title: "Mamíferos" }} />
        <Stack.Screen name="Otros" component={Otros} options={{ title: "Otros animales" }} />
        <Stack.Screen name="Reptiles" component={Reptiles} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos ======================================================================================
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

// export final -----------------------------------------------------------------------------
export default App;