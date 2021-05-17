/**
 * Kintachuwin App
 *
 * App para el aprendizaje del idioma totonaco.
 * Este archivo contiene la estructura de navegación.
 * El contenido de las pantallas se encuntra en varios archivos que se importan.
 *  
 * Editado desde Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Importar todo los necesario ==========================================================
//import 'react-native-gesture-handler'; //para terminar instalación de este modulo?
import React, { useEffect } from 'react'; //estrictamente necesario
import { NavigationContainer } from '@react-navigation/native'; //navegación contenedor
import { createStackNavigator } from '@react-navigation/stack'; //navegación stack
//import Sound from 'react-native-sound'; //para reproducir sonidos
import {
  SafeAreaView,
  //StyleSheet,
  //ScrollView,
  View,
  Text,
  StatusBar,
  //Button,
  TouchableOpacity,
  AppState,
} from 'react-native'; //varios elementos
import { stopSound } from './src/mis-componentes';

// Youtube =================================================================================
//import YoutubePlayer from 'react-native-youtube-iframe' //para insertar video de youtube
//import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

// Pantallas - Screens ==================================================================================
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
import Adverbios from "./src/_34_adverbios.js";
import Elementos from "./src/_35_elementos.js"
import Familia from "./src/_36_familia";
import Lugares from "./src/_37_lugares";
import Sabores from "./src/_38_sabores";
import Sentimientos from "./src/_39_sentimientos";
import Tiempo from "./src/_3a_tiempo";

import Anfibios from "./src/_41_anfibios";
import Aves from "./src/_42_aves";
import Mamiferos from "./src/_43_mamiferos";
import Otros from "./src/_44_otros";
import Reptiles from "./src/_45_reptiles";

import Frutos from "./src/_51_frutos";
import Herbaceas from "./src/_52_herbaceas";
import Arboles from "./src/_53_arboles";

import Video from "./src/_61_video";

import Cuento1 from "./src/_71_cuento1";
import Cuento2 from "./src/_72_cuento2";
import Cuento3 from "./src/_73_cuento3";
import Cuento4 from "./src/_74_cuento4";
import Cuento5 from "./src/_75_cuento5";

import Xanay from "./src/_91_xanay";
import Colab from "./src/_92_colaboradores";

const Stack = createStackNavigator();

const _handleAppStateChange = (nextAppState) => {
  console.log(AppState.currentState);
  console.log(nextAppState);
  stopSound();
}

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

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    }
  }, []); //array vacío para ejecutar solo al montar y desmontar, y no en cada render

  return (
    <NavigationContainer onStateChange={(state) => {
      console.log("New state is ", state);
      stopSound();
    }}>
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
        <Stack.Screen name="Adver" component={Adverbios} options={{ title: "Advervios de lugar" }} />
        <Stack.Screen name="Elementos" component={Elementos} options={{ title: "Elementos naturales" }} />
        <Stack.Screen name="Familia" component={Familia} options={{ title: "Integrantes de la familia" }} />
        <Stack.Screen name="Lugares" component={Lugares} options={{ title: "Lugares" }} />
        <Stack.Screen name="Sabores" component={Sabores} options={{ title: "Sabores y olores" }} />
        <Stack.Screen name="Senti" component={Sentimientos} options={{ title: "Sentimientos" }} />
        <Stack.Screen name="Tiempo" component={Tiempo} options={{ title: "Tiempo" }} />

        <Stack.Screen name="Anfibios" component={Anfibios} />
        <Stack.Screen name="Aves" component={Aves} />
        <Stack.Screen name="Mamiferos" component={Mamiferos} options={{ title: "Mamíferos" }} />
        <Stack.Screen name="Otros" component={Otros} options={{ title: "Otros animales" }} />
        <Stack.Screen name="Reptiles" component={Reptiles} />

        <Stack.Screen name="Frutos" component={Frutos} />
        <Stack.Screen name="Herbaceas" component={Herbaceas} options={{ title: "Herbáceas" }} />
        <Stack.Screen name="Arboles" component={Arboles} options={{ title: "Árboles" }} />

        <Stack.Screen name="Video" component={Video} options={{ headerShown: false }} />

        <Stack.Screen name="Cuento1" component={Cuento1} />
        <Stack.Screen name="Cuento2" component={Cuento2} />
        <Stack.Screen name="Cuento3" component={Cuento3} />
        <Stack.Screen name="Cuento4" component={Cuento4} />
        <Stack.Screen name="Cuento5" component={Cuento5} />

        <Stack.Screen name="Xanay" component={Xanay} options={{ title: "Colectivo Xanay" }} />
        <Stack.Screen name="Colab" component={Colab} options={{ title: "Colaboradores" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export final -----------------------------------------------------------------------------
export default App;