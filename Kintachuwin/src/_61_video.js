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
import { Imgn, BotonImg, Styles } from './mis-componentes'; //importar componentes personalizados
import { WebView } from 'react-native-webview'; //importar contenedor para reproducir video

// Todos los datos que se pueden mostrar se guardan en este array
// ti: título, te: texto, au: autor, vi: video
const DATA = [
    {//********************************* 0. KINTACHIWINKAN [CD1]
        ti: <> <Text style={Styles.cursiva}>KINTACHIWINKAN</Text> </>,
        te: <>
            En Tuxtla, comunidad de la Sierra Norte de Puebla, el <Text style={Styles.cursiva}>tutunakú</Text> es
            un idioma vivo, la voz de niños, jóvenes y adultos, un idioma que retiembla en los altavoces del pueblo
            cada día; es la voz de los padres, del recuerdo y del presente. Mientras que para las personas de la
            tercera edad, aprender español fue una cuestión de supervivencia, para las nuevas generaciones,
            preservar el <Text style={Styles.cursiva}>tutunakú</Text> es resistir a un mundo cambiante.
        </>,
        au: <>
            Dirección y guión: Jorge Ramos Luna y Juan M. Díaz García {"\n"}
            Producción: Colectivo Xanay {"\n"}
            Fotografía y edición: Jorge Ramos Luna {"\n"}
            Sonido directo: Uzu Morales {"\n"}
            Asistencia de producción: Citlal Solano {"\n"}
            Año: 2021{"\n"}
        </>,
        vi: "https://seed171.bitchute.com/ZWQoYTjy8gkQ/8Lmpt1e3ZmM3.mp4",
    },
    {//********************************* 1. TSURUMPITPIT [CD2]
        ti: <> <Text style={Styles.cursiva}>TSURUMPITPIT</Text> </>,
        te: <>
            En comunidades totonacas de la Sierra Norte de Puebla, el canto del
            <Text style={Styles.cursiva}>Tsurumpitpit</Text> [onomatopeya totonaca] acompaña las noches nubladas y
            lluviosas desde tiempos remotos. Sin embargo, entre las personas existe incertidumbre sobre la identidad
            del animal que emite este canto tan particular. Este fenómeno se repite en diferentes lugares del centro
            de México, donde dos tipos de anfibios cohabitan cerca de las personas.
            Un anfibio es más fácil de observar que el otro, pero ¿quién es el que canta?
        </>,
        au: <>
            Dirección: Juan M. Díaz García y Jorge Ramos Luna {"\n"}
            Producción: Colectivo Xanay, FestiXal de los Anfibios y Colectivo Hojarasca {"\n"}
            Guión:  Juan M. Díaz García {"\n"}
            Fotografía y edición: Jorge Ramos Luna {"\n"}
            Sonido directo: Uzu Morales {"\n"}
            Asistencia de producción: Citlal Solano {"\n"}
            Año: 2020 {"\n"}
        </>,
        vi: "https://seed171.bitchute.com/ZWQoYTjy8gkQ/AwGC3xTLluFR.mp4",
    },
    {//********************************* 2. RONDALLA TUTUNAKÚ [CD3]
        ti: <> RONDALLA <Text style={Styles.cursiva}>TUTUNAKÚ</Text> </>,
        te: <>
            Mini concierto de la Rondalla <Text style={Styles.cursiva}>Tutunakú</Text> del Bachillerato
            Manuel Ávila Camacho, Tuxtla, Zapotitlán de Méndez, Puebla. Esta rondalla ha sido reconocida durante
            toda su trayectoria, recientemente recibió los premios: 1er Lugar Concurso Regional en Huahuaxtla
            (Categoría A, 2020), 1er Lugar Concurso Estatal en Teziutlán (Categoría A, 2019),
            y 1er Lugar Concurso Regional en Huehuetla (Categoría A, 2019).
        </>,
        au: <>
            Realización, cámara y edición: Jorge Ramos Luna  {"\n"}
            Segunda cámara: Juan M. Díaz García {"\n"}
            Producción: Colectivo Xanay {"\n"}
            Sonido directo: Uzu Morales {"\n"}
            Asistencia de producción: Citlal Solano {"\n"}
            Año: 2020 {"\n"}
        </>,
        vi: "https://seed306.bitchute.com/ZWQoYTjy8gkQ/yAYtTcAf8T6i.mp4",
    },
    {//********************************* 3. PAXNIKAK [CD4]
        ti: <> <Text style={Styles.cursiva}>PAXNIKAK</Text> </>,
        te: <>
            Doña Fabiola y su hijo Ismar nos muestran el proceso de recolección y preparación
            del <Text style={Styles.cursiva}>paxnikak</Text>, un quelite silvestre perteneciente a la
            especie Xanthosoma robustum. El <Text style={Styles.cursiva}>paxnikak</Text> es
            uno de los platillos principales de la cocina tradicional totonaca.
        </>,
        au: <>
            Dirección y edición: Juan M. Díaz García {"\n"}
            Producción: Colectivo Xanay {"\n"}
            Asistencia de producción y sonido directo: Citlal Solano {"\n"}
            Año: 2020 {"\n"}
        </>,
        vi: "https://zb10-7gsop1v78.bitchute.com/ZWQoYTjy8gkQ/GAqFcQbAcnuz.mp4",
    },
    {//********************************* 4. DANZAS DE LA SIERRA NORTE DE PUEBLA [CD5]
        ti: <>DANZAS DE LA SIERRA NORTE DE PUEBLA</>,
        te: <>
            Miniclip de diferentes danzas que se bailan durante las fiestas patronales en diferentes comunidades
            de la Sierra Norte de Puebla. Algunas de las que mostramos son "Los Tejoneros", "Los voladores",
            "Los negritos", "Los quetzales" y "Los españoles", las cuales fueron grabadas en Nanacatlán,
            Zoatecpan y San Juan Ozelonacaxtla.
        </>,
        au: <>
            Dirección y edición: Juan M. Díaz García {"\n"}
            Producción: Colectivo Xanay {"\n"}
            Año: 2019 {"\n"}
        </>,
        vi: "https://z-28b3jxzl1og7.bitchute.com/ZWQoYTjy8gkQ/CS4JidEILE47.mp4",
    },
    {//********************************* 5. ANIMALES EN TOTONACO [CD6]
        ti: <>ANIMALES EN TOTONACO</>,
        te: <>
            Video elaborado como reporte final del curso “Enseñanza de lalengua <Text style={Styles.cursiva}>Tutunakú</Text>”
            en su nivel inicial a cargo de la Academia Veracruzana de Lenguas Indígenas (AVELI).
        </>,
        au: <>
            Dirección y edición: Juan M. Díaz García {"\n"}
            Producción: Colectivo Xanay {"\n"}
            Año: 2019 {"\n"}
        </>,
        vi: "https://seed125.bitchute.com/ZWQoYTjy8gkQ/PLtHfP1yeerP.mp4",
    },
    {//********************************* 6. ALIMENTOS EN TOTONACO [CD7]
        ti: <>ALIMENTOS EN TOTONACO</>,
        te: <>
            Video elaborado como reporte final del curso “Enseñanza de lalengua <Text style={Styles.cursiva}>Tutunakú</Text>”
            en su nivel inicial a cargo de la Academia Veracruzana de Lenguas Indígenas (AVELI).
        </>,
        au: <>
            Dirección y edición: Juan M. Díaz García {"\n"}
            Producción: Colectivo Xanay {"\n"}
            Año: 2019 {"\n"}
        </>,
        vi: "https://zb10-7gsop1v78.bitchute.com/ZWQoYTjy8gkQ/WDZNxUz9n2Ml.mp4",
    },
    {//********************************* 7. SAN JOSÉ [CD8]
        ti: <> <Text style={Styles.cursiva}>SAN JOSÉ</Text> </>,
        te: <>
            Celebración patronal a San José en Tuxtla, Puebla. El torito con fuegos artificiales
            y el huapango se hicieron presentes en esta velada para celebrar al santo patrono.
        </>,
        au: <>
            Realización: Jorge Ramos Luna {"\n"}
        </>,
        vi: "https://seed125.bitchute.com/ZWQoYTjy8gkQ/SIJRLq5fJitJ.mp4",
    },
    {//********************************* 8. PUKLHN [CD9]
        ti: <> <Text style={Styles.cursiva}>PUKLHN</Text> </>,
        te: <>
            Niños y niñas de Bibiano Hernández pasan un día de juegos en la calle, el manantial y el monte, donde
            encuentran un árbol conocido como Sangre de grado o <Text style={Styles.cursiva}>Puklhn</Text> en
            idioma <Text style={Styles.cursiva}>tutunakú</Text>. Este árbol pertenece al género Croton,
            y en varias comunidades <Text style={Styles.cursiva}>tutunakú</Text> se considera medicinal.
        </>,
        au: <>
            Realización: Jorge Ramos Luna {"\n"}
        </>,
        vi: "https://seed122.bitchute.com/ZWQoYTjy8gkQ/RmczSLQYLP5e.mp4",
    },
    {//********************************* 9. CASTILLO [CD10]
        ti: <> <Text style={Styles.cursiva}>CASTILLO</Text> </>,
        te: <>
            Durante las fiestas patronales en comunidades <Text style={Styles.cursiva}>tutunakú</Text> de la 
            Sierra Nororiental de Puebla, la quema de castillos monumentales con fuegos artificiales es una de 
            las principales actividades y de mayor costo. Sin importar esto último, año con año la organización 
            y cooperación de los pueblos permite que se siga llevando a cabo esta tradición.
        </>,
        au: <>
            Realización: Juan Manuel Díaz García {"\n"}
        </>,
        vi: "https://seed177.bitchute.com/ZWQoYTjy8gkQ/EiSSmZr654H5.mp4",
    },
    {//********************************* 10. HOMBRES PÁJARO [CD11]
        ti: <> <Text style={Styles.cursiva}>HOMBRES PÁJARO</Text> </>,
        te: <>
            La danza de los hombres pájaro o mejor conocida como la danza de los voladores, es uno de los 
            estandartes de la cultura <Text style={Styles.cursiva}>tutunakú</Text>. Esta danza, que es 
            considerada como Patrimonio Cultural Inmaterial de la Humanidad, se realiza como un ritual 
            relacionado a la siembra y cosecha en comunidades totonacas.
        </>,
        au: <>
            Realización: Juan Manuel Díaz García {"\n"}
        </>,
        vi: "https://seed305.bitchute.com/ZWQoYTjy8gkQ/Va0WKcw3fJrl.mp4",
    },
];

// Se recibe un parámetro de la pantalla anterior (Numeros)
function Video({ route, navigation }) {
    var key = route.params.key; //extraer valor del parámetro
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>
                    <Text style={Styles.titulo}>{DATA[key].ti}</Text>
                    <Text style={Styles.texto}>{DATA[key].te}</Text>
                    <Text style={Styles.autor}>{DATA[key].au}</Text>
                    <WebView
                        style={{ height: 340 }}
                        allowsFullscreenVideo={true}
                        //allowFileAccess={false}
                        //mixedContentMode="always"
                        mediaPlaybackRequiresUserAction={true}
                        injectedJavaScript={`document.getElementsByTagName("video")[0].controlsList="nodownload";`}
                        source={{ uri: DATA[key].vi }}
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