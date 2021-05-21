/**
 * Video
 * 
 * En esta Screen se muestra el iframe que contiene video y
 * la descripción correspondiente.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    SafeAreaView,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native'; //varios elementos
// importar componentes personalizados
import { Imgn, BotonImg, Styles } from './mis-componentes';
import { WebView } from 'react-native-webview';

function Video({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Text style={Styles.titulo}>
                        <Text style={Styles.cursiva}>KINTACHIWINKAN</Text>
                    </Text>
                    <Text style={Styles.texto}>
                        En Tuxtla, comunidad de la Sierra Norte de Puebla, el
                        <Text style={Styles.cursiva}>tutunakú</Text> es
                        un idioma vivo, la voz de niños, jóvenes y adultos, un idioma que
                        retiembla en los altavoces del pueblo cada día; es la voz de los padres,
                        del recuerdo y del presente. Mientras que para las personas de la
                        tercera edad, aprender español fue una cuestión de supervivencia, para
                        las nuevas generaciones, preservar el <Text style={Styles.cursiva}>tutunakú</Text>
                        es resistir a un mundo cambiante.
                        {"\n\n"}
                        Dirección y guión: Jorge Ramos Luna y Juan M. Díaz García {"\n"}
                        Producción: Colectivo Xanay {"\n"}
                        Fotografía y edición: Jorge Ramos Luna {"\n"}
                        Sonido directo: Uzu Morales {"\n"}
                        Asistencia de producción: Citlal Solano {"\n"}
                        Año: 2021
                    </Text>

                    <WebView
                        style={{ height: 340 }}
                        allowsFullscreenVideo={true}
                        //allowFileAccess={false}
                        //mixedContentMode="always"
                        mediaPlaybackRequiresUserAction={true}
                        injectedJavaScript={`document.getElementsByTagName("video")[0].controlsList="nodownload";`}
                        source={{ uri: "https://seed171.bitchute.com/ZWQoYTjy8gkQ/8Lmpt1e3ZmM3.mp4" }}
                        //startInLoadingState={true}
                    />
                    
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Video;

/*
<WebView
                        mediaPlaybackRequiresUserAction
                        allowsFullscreenVideo
                        allowsInlineMediaPlayback={false}
                        controlsList="nodownload"
                        style={{ flex: 0, height: 340 }}
                        //source={{ html: '<iframe allowfullscreen width="640" height="360" scrolling="no" frameborder="0" style="border: none;" src="https://www.bitchute.com/embed/ABRNW7Tzwpi8/"></iframe>' }}
                        //source={{ uri: 'https://www.youtube.com/embed/sNhhvQGsMEc' }}
                        //source={{ html: '<div style="padding: 56.25% 0px 0px; position: relative;"><iframe src="https://www.bitchute.com/embed/UGlrF9o9b-Q/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="auto"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>BitChute embedding powered by <a href="https://embed.tube">embed.tube</a></small></iframe></div>'}}
                        //source={{ uri: "https://www.bitchute.com/embed/ABRNW7Tzwpi8/" }}
                        //source={{ uri: "https://seed167.bitchute.com/rDJENSMUIXt9/ABRNW7Tzwpi8.mp4" }}
                        //source={{ html: '<iframe allowfullscreen scrolling="no" frameborder="0" style="border: none; width: 100%; height: 100%;" src="https://seed167.bitchute.com/rDJENSMUIXt9/ABRNW7Tzwpi8.mp4"></iframe>' }}
                        //source={{ uri: "https://seed171.bitchute.com/ZWQoYTjy8gkQ/8Lmpt1e3ZmM3.mp4" }}
                        source={{ html: '<div><video controls controlsList="nodownload"><source src="https://seed163.bitchute.com/KQdZKMWQvsr6/jRcCh0rnCsLY.mp4" type="video/mp4"></video></div>' }}
                    />

//<YoutubePlayer height={360} videoId={"sNhhvQGsMEc"} />

<ScrollView>
    <View style={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 24
    }}>
        <Text>Video</Text>
    </View>
</ScrollView>
*/

// Vimeo
// Muestra mucha info (título de video, nombre de usuario) y botones para compartir (todo abre navegador)
// Icono de Vimeo en esquina inferior derecha
// Todo se puede personalizar pagando
// No se abre menú con long press
//<iframe src="https://player.vimeo.com/video/498217255" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

// Metacafe
// Barra de reproduccion aparece muy pequeña
// Logo en la esquina superior derecha (abre navegador)
// Algunos videos muestran mensaje no disponible
// No se abre menú con long press
// No botones de compartir por default
//<iframe width="560" height="315" src="https://www.metacafe.com/embed/397997/copperplate_chevrons_fractal_zoom/" frameborder="0" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.metacafe.com/embed/12163249/monkey-s-eating-habits-are-better-than-most-humans/" frameborder="0" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.metacafe.com/embed/11516798/even-the-horse-showed-it-s-sympathy-for-the-girl-who-just-couldn-t-climb-up/" frameborder="0" allowfullscreen></iframe>

// Dailymotion
// Sugerencias en el lado derecho
// Botón compartir
// Automáticamente reproduce siguiente video
//<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"> <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x2o95ty?autoplay=1" width="100%" height="100%" allowfullscreen allow="autoplay"> </iframe> </div>

// Facebook
// ¿Videos de fb se pueden insertar (embed)?

// Veoh
// Poca seriedad
// No hay botones para compartir o insertar. ¿Es posible insertar?

// DTube
// GUI se parece mucho a YT
// Se pueden subir videos a través de torrent y otros métodos interesantes
// Si se suben directamente a DT, hay limitaciones de duración, longitud y se pueden borrar
// Img miniatura tiene logo de DTube
// Logo en la parte inferior. Abre navegador
//<iframe width="560" height="315" src="https://emb.d.tube/#!/sagare012/QmXeZU7bNE6L7vjKeEwt3yVWMW6kpFDgPGuHhj8P43uX2W" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// 9gag
// Memes

// Vevo, Twitch, TED, Crackle no son opciones

// Bitchute
// No muestra opciones para compartir
// No se abre menú con long press
// Controles diminutos en orientación portrait
// Al parecer no permite pantalla completa
// Se puede hacer zoom deslizando 2 dedos
//<iframe width="640" height="360" scrolling="no" frameborder="0" style="border: none;" src="https://www.bitchute.com/embed/R8bLjZA1qUPY/"></iframe>
//<iframe width="640" height="360" scrolling="no" frameborder="0" style="border: none;" src="https://www.bitchute.com/embed/9QeQdHqiMzbG/"></iframe>
//<iframe width="640" height="360" scrolling="no" frameborder="0" style="border: none;" src="https://www.bitchute.com/embed/Cb6n7hP6iiCe/"></iframe>
//<iframe width="640" height="360" scrolling="no" frameborder="0" style="border: none;" src="https://www.bitchute.com/embed/ABRNW7Tzwpi8/"></iframe>

// Internet archives
// Seriedad
// Tiene muchas opciones para compartir y ver listas de reproducción, ¿se pueden ocultar?
// Se puede hacer zoom
//https://archive.org/help/video.php
//<iframe src="https://archive.org/embed/126BuddiesThickerThanWater1962" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>