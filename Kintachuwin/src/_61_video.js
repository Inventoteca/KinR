// En esta Screen solo muestra el iframe que contiene video
import React from 'react'; //estrictamente necesario
import {
    View,
    Text,
    //Button,
    Image,
    //TouchableHighlight,
    //TouchableNativeFeedback,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native'; //varios elementos
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';

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
//<Boton title="X" onPress={() => navigation.navigate('Gramatica')} />

//<YoutubePlayer height={360} videoId={"sNhhvQGsMEc"} />
function Video({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
            <WebView
                style={{backgroundColor:'black'}}
                allowsFullscreenVideo
                //allowsInlineMediaPlayback
                //mediaPlaybackRequiresUserAction
                //source={{ uri: 'https://www.youtube.com/embed/sNhhvQGsMEc' }}
                source={{ uri: "https://www.bitchute.com/embed/ABRNW7Tzwpi8/" }}
                
            />
        </SafeAreaView>
    );
}

export default Video;

/*
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