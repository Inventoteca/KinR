/**
 * Cuento (Leyenda) 5
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { playLocalSound, Imgn, Boton, BotonImg, Styles } from './mis-componentes';

function Cuento5({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Imgn source={require('../assets/_70/cn5.jpg')} width={320} />

                    <Text style={Styles.titulo}>
                        <Text style={{ fontStyle: 'italic', fontWeight: 'normal' }}>XINTILHNI’</Text>
                    </Text>

                    <Text style={Styles.autor}>
                        Por Arely López y Verónica Flores
                    </Text>

                    <Text style={Styles.tutunaku}>
                        {`Wa´ luwa makgasa´ anta´ kachikin k´Tuxtla la nina x´anan chichini´, xintilhni´ xlamakgo k´katiyatni´. Akxni´ nchu lampulana titasiyulh chichini´ chima xintilhni´ talakgatsekg´kgolh. Chi nchu kgalhatujun ni taskgalakgolh akxni´ lantipkgolh chichini´ palhankgolh nalh tatsuwikgolh. Chi nchu uku´ wa´ litalakgapaskgoy kgalhatujun makgskgalananin wa´ xliwankgan kumu anta´ tatakgskgoy kxkilhapan kgalhtuchokgo luwa talakgapaskgoy kumu luwa xlakankan chixkuwin kgalhikgo.`}
                    </Text>

                    <Text style={Styles.titulo}>
                        LOS HABITANTES DE PIEDRA
                    </Text>

                    <Text style={Styles.texto}>
                        {`Hace mucho tiempo en Tuxtla, cuando no existía el Sol, habitaban seres formados de piedra. En algún momento el Sol apareció y los habitantes de piedra se ocultaron. Sin embargo, siete de ellos no lo lograron y al recibir los primeros rayos del Sol quedaron petrificados. Hoy en día a esas piedras se les llaman “las siete piedras guardianes”. Estas piedras guardianes se encuentran ubicadas a lo largo de la orilla del río, y son reconocidas porque tienen en su superficie forma de rostro humano.`}
                    </Text>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Cuento5;