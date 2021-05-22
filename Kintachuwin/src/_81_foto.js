/**
 * Foto
 * Esta pantalla es un experimento.
 * Es la segunda pantalla de la galería para navegar más rápido
 * Primero se muestra la galería con imágenes pequeñas y al hacer clic
 * cambia a esta pantalla y la lista se desplaza a la dirección indicada.
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { Imgn, Boton, BotonImg, Styles } from './mis-componentes';

const DATA = [
    { key: "1", foto: require("../assets/_80/ff1.jpg"), autor: "Jorge Ramos Luna", texto: 'El Akgpixi o mejor conocido como Cozoltepetl, es la montaña más alta de la Sierra Norte de Puebla. Este cerro es de alto valor biológico y cultural ' },
    { key: "2", foto: require("../assets/_80/ff2.jpg"), autor: "Juan M. Díaz García", texto: 'Preparacion del nixtamal para la elaboración de tortilla. Uno de los principales alimentos en la Sierra Norte de Puebla ' },
    { key: "3", foto: require("../assets/_80/ff3.jpg"), autor: "Juan M. Díaz García", texto: 'Preparacion de Paxnikak. Es uno de los alimentos tradicionales del totonacapan en la Sierra Norte de Puebla. Las hojas deben desvenarse para evirtar escosor al comerse. ' },
    { key: "4", foto: require("../assets/_80/ff4.jpg"), autor: "Citlal Solano Lara", texto: 'Oracion y misa en el panteon para la celebracion del santune, santujni o santunu (todos santos) ' },
    { key: "5", foto: require("../assets/_80/ff5.jpg"), autor: "Juan M. Díaz García", texto: 'Mecapal o lipachin, es el sujetador que se coloca sobre la frente para cargar desde maíz hasta leña. ' },
    { key: "6", foto: require("../assets/_80/ff6.jpg"), autor: "Juan M. Díaz García", texto: 'La danza de los voladores es la más conocida a nivel mundial sobre el totonacapan. ' },
    { key: "7", foto: require("../assets/_80/ff7.jpg"), autor: "Jorge Ramos Luna", texto: 'Variedad de maíces. El maíz rojo es asociado al "macho", utilizado para proteger a los bebes del mal aire. ' },
    { key: "8", foto: require("../assets/_80/ff8.jpg"), autor: "Citlal Solano Lara", texto: 'Niños elaborando las piezas para ensamblar los globos de papel para la celebración del santune. ' },
    { key: "9", foto: require("../assets/_80/ff9.jpg"), autor: "Juan M. Díaz García", texto: 'Elevación de los globos de papel para dar la bienvenida a los santos difuntos. ' },
    { key: "10", foto: require("../assets/_80/ff10.jpg"), autor: "Juan M. Díaz García", texto: 'Tendido de cafe en cereza para su secado y procesado, en las azotéas de los hogares en Zongozotla. ' },
    { key: "11", foto: require("../assets/_80/ff11.jpg"), autor: "Citlal Solano Lara", texto: 'Maíces blancos, el más común en la Sierra Norte de Puebla. ' },
    { key: "12", foto: require("../assets/_80/ff12.jpg"), autor: "David Octavio", texto: 'Festejo al santo patrón "Santiago Apostol" en la comunidad de Nananacatlán ' },
    { key: "13", foto: require("../assets/_80/ff13.jpg"), autor: "Juan M. Díaz García", texto: 'Acarréo de leña con mecapal, camino a San Martín, Sierra Norte de Puebla ' },
    { key: "14", foto: require("../assets/_80/ff14.jpg"), autor: "Citlal Solano Lara", texto: 'Separación de flor de muerto para la selección de semillas durante los festejos de todos santos ' },
    { key: "15", foto: require("../assets/_80/ff15.jpg"), autor: "Juan M. Díaz García", texto: 'Mapilco, Tuxtla, Zapotitlán de Méndez, Puebla. ' },
    { key: "16", foto: require("../assets/_80/ff16.jpg"), autor: "Juan M. Díaz García", texto: 'El campanario, Tuxtla, Zapotitlán de Méndez, Puebla. Sitio sagrado donde se practica el juego del tsum. ' },
    { key: "17", foto: require("../assets/_80/ff17.jpg"), autor: "Juan M. Díaz García", texto: 'Danza de los "Santiagueros" una de las más importantes en Nanacatlán y Tuxtla, Zapotitlán de Méndez, Puebla. ' },
    { key: "18", foto: require("../assets/_80/ff18.jpg"), autor: "Juan M. Díaz García", texto: 'Danza de "Matarachines", "patrianos" o "payasos" en el Totonacapan poblano. ' },
    { key: "19", foto: require("../assets/_80/ff19.jpg"), autor: "Juan M. Díaz García", texto: 'Procesion para la exhibición del santo patrón acompañado de las ceras y danzas típicas de la región. ' },
    { key: "20", foto: require("../assets/_80/ff20.jpg"), autor: "Citlal Solano Lara", texto: 'Campana de la iglesia de Nanacatlán, de las pocas que se lograron conservar de 1810 bajo resguardo del INAH ' },
    { key: "21", foto: require("../assets/_80/ff21.jpg"), autor: "Juan M. Díaz García", texto: 'Milpar posterior a la pixca en un terreno de Nanacatlán, Sierra Norte de Puebla ' },
    { key: "22", foto: require("../assets/_80/ff22.jpg"), autor: "Citlal Solano Lara", texto: 'Calzado tradicional de la Sierra Norte de Puebla, huaraches de suela de llanta y correas de piel. ' },
    { key: "23", foto: require("../assets/_80/ff23.jpg"), autor: "Citlal Solano Lara", texto: 'Vista desde el libramiento en el tramo Nanacatlán-Tuxtla ' },
    { key: "24", foto: require("../assets/_80/ff24.jpg"), autor: "Citlal Solano Lara", texto: 'Atole de capulín silvestre variedad mujut. Su temporada va de abril a mayo, solo un mes estan disponibles los frutos ' },
    { key: "25", foto: require("../assets/_80/ff25.jpg"), autor: "Juan M. Díaz García", texto: 'Mujer observando la ofrenda de danza de los quetzales en la fiesta patronal de San Juan Ocelonacaxtla ' },
    { key: "26", foto: require("../assets/_80/ff26.jpg"), autor: "Juan M. Díaz García", texto: 'Danza de los San Migueles en la fiesta patronal de San Juan Ocelonacaxtla ' },
    { key: "27", foto: require("../assets/_80/ff27.jpg"), autor: "Citlal Solano Lara", texto: 'Cajas con colmenas de abeja melipona en Zongozotla, Sierra Norte de Puebla ' },
    { key: "28", foto: require("../assets/_80/ff28.jpg"), autor: "Jorge Ramos Luna", texto: 'Estructura y montaje de huerto de traspatio optimizando espacios horizontales y verticales. ' },
    { key: "29", foto: require("../assets/_80/ff29.jpg"), autor: "Citlal Solano Lara", texto: 'Gorditas del quelite "pata de gallo", elaboradas con manteca, sal y masa  ' },
    { key: "30", foto: require("../assets/_80/ff30.jpg"), autor: "Juan M. Díaz García", texto: 'Mujer elaborando ponche para las posadas en Zongozotla, Puebla ' },
    { key: "31", foto: require("../assets/_80/ff31.jpg"), autor: "Citlal Solano Lara", texto: 'Muchos de los pobladores de la Sierra Norte de Puebla prefieren caminar descalzos, es asumido como parte del conservar sus tradiciones ' },
    { key: "32", foto: require("../assets/_80/ff32.jpg"), autor: "Juan M. Díaz García", texto: 'Proceso de despulpado del café en cereza en Zongozotla, Sierra Norte de Puebla ' },
    { key: "33", foto: require("../assets/_80/ff33.jpg"), autor: "Juan M. Díaz García", texto: 'Tradicionales ceras elaboradas por el mayordomo durante la fiesta patronal en las distintas comunidades totonacas ' },
    { key: "34", foto: require("../assets/_80/ff34.jpg"), autor: "Juan M. Díaz García", texto: 'Hombre cortando hojas de pino (ocoxale) para la decoracion durante las posadas en Zongozotla ' },
    { key: "35", foto: require("../assets/_80/ff35.jpg"), autor: "Juan M. Díaz García", texto: 'Apilado y almacenado de leña, principal combustible en muchas comunidades totonacas de la Sierra Norte de Puebla ' },
    { key: "36", foto: require("../assets/_80/ff36.jpg"), autor: "Juan M. Díaz García", texto: 'Café con varios días de secado al sol, uno de los pasos para procesarlo y comercializarlo ' },
    { key: "37", foto: require("../assets/_80/ff37.jpg"), autor: "Juan M. Díaz García", texto: 'Mujeres echando tortilla en comal improvisado para los trabajadores que han salido a campo a colectar ocoxale ' },
    { key: "38", foto: require("../assets/_80/ff38.jpg"), autor: "Citlal Solano Lara", texto: 'Niebla descendiendo por la tarde en un mirador de Tuxtla, Zapotitlán de Méndez Puebla ' },
    { key: "39", foto: require("../assets/_80/ff39.jpg"), autor: "Citlal Solano Lara", texto: 'Molido tradicional de masa para tortillas en metate. ' },
    { key: "40", foto: require("../assets/_80/ff40.jpg"), autor: "Citlal Solano Lara", texto: 'Preparacion en comal de barro y cocción en leña, de tortilla y huevo asado. ' },
    { key: "41", foto: require("../assets/_80/ff41.jpg"), autor: "Citlal Solano Lara", texto: 'Adorno para posada en Zongozotla, Sierra Norte de Puebla ' },
    { key: "42", foto: require("../assets/_80/ff42.jpg"), autor: "Jorge Ramos Luna", texto: 'Armado de las cruces para la decoracion del Santune en el panteón ' },
    { key: "43", foto: require("../assets/_80/ff43.jpg"), autor: "Citlal Solano Lara", texto: 'Corte de carne de cerdo criollo para la elaboracion de carnitas en Nanacatlán ' },
    { key: "44", foto: require("../assets/_80/ff44.jpg"), autor: "Citlal Solano Lara", texto: 'Vista al interior de un horno de leña para cocción de pan en Zongozotla. ' },
    { key: "45", foto: require("../assets/_80/ff45.jpg"), autor: "Citlal Solano Lara", texto: 'Corte de piezas de pan para su venta posterior, Zongozotla ' },
    { key: "46", foto: require("../assets/_80/ff46.jpg"), autor: "Citlal Solano Lara", texto: 'Danzantes voladores listos para lanzarse en honor al santo patrón, Zoatecpan ' },
    { key: "47", foto: require("../assets/_80/ff47.jpg"), autor: "Citlal Solano Lara", texto: 'Quema del "torito" durante mayordomía en Tuxtla, Zapotitlán de Méndez. ' },
    { key: "48", foto: require("../assets/_80/ff48.jpg"), autor: "Citlal Solano Lara", texto: 'Elevacion de monumental  globo de cantoya en Zozocolco ' },
    { key: "49", foto: require("../assets/_80/ff49.jpg"), autor: "Juan M. Díaz García", texto: 'Cauce del río Zempoala a la altura de Nanacatlán, Zapotitlán de Méndez ' },
    { key: "50", foto: require("../assets/_80/ff50.jpg"), autor: "Jorge Ramos Luna", texto: 'Elevacion de globo de papel de china para la llegada de los muertos en el Santune, Bibiano Hernández. ' },
    { key: "51", foto: require("../assets/_80/ff51.jpg"), autor: "Citlal Solano Lara", texto: 'Flor de quelite pata de gallo, utilizada para la elaboración de tamales en hoja de papatla. ' },
    { key: "52", foto: require("../assets/_80/ff52.jpg"), autor: "Citlal Solano Lara", texto: 'Desayuno tradicional de Nanacatlán, huevos asados en comal, quelites fritos, salsa martajada y tortilla a mano ' },
    { key: "53", foto: require("../assets/_80/ff53.jpg"), autor: "Citlal Solano Lara", texto: 'Cultivo de calabaza en estructuras de bambú para optimizar espacio en traspatios, Nanacatlán ' },
    { key: "54", foto: require("../assets/_80/ff54.jpg"), autor: "Juan M. Díaz García", texto: 'Tradicional estufa de leña en la mayoría de los hogares de la Sierra Norte de Puebla. ' },
    { key: "55", foto: require("../assets/_80/ff55.jpg"), autor: "David Octavio", texto: 'Cozoltepetl o Akpixi visto desde desde el cielo nocturno en Zongozotla, Sierra Norte de Puebla ' },
    { key: "56", foto: require("../assets/_80/ff56.jpg"), autor: "Juan M. Díaz García", texto: 'Colecta de kune y calpuxan para decoracion de ofrendas del Santune, Bibiano Hernandez ' },
    { key: "57", foto: require("../assets/_80/ff57.jpg"), autor: "David Octavio", texto: 'Río Zempoala, tramo visto desde la cabecera municipal, Zapotitlán de Méndez ' },
    { key: "58", foto: require("../assets/_80/ff58.jpg"), autor: "Juan M. Díaz García", texto: 'Cruces ya listas para colocar en el panteon para todos santos o Santune en Bibiano Hernández. ' },
    { key: "59", foto: require("../assets/_80/ff59.jpg"), autor: "Juan M. Díaz García", texto: 'Confluencia de danzas por la fiesta del santo patrón en Nanacatlán ' },
    { key: "60", foto: require("../assets/_80/ff60.jpg"), autor: "Juan M. Díaz García", texto: 'Peñascos que marcan la separacion entre Tuxtla, San Martín y Xochitlán. Se puede observar el campanario. ' },
];

const Item = (props) => {
    return (
        <View style={{ marginBottom: 0, height: 580 }}>
            <Imgn source={props.foto} width={360} />
            <Text style={Styles.autor}>
                {props.autor}
            </Text>
            <Text style={Styles.texto}>
                {props.texto}
            </Text>
        </View>
    );
}
//{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 0, marginBottom: 0, /*width:150*/ }
/*
*/

function Foto({ route, navigation }) {
    // initialScrollIndex
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <FlatList
                    contentContainerStyle={{ padding: 24 }}
                    data={DATA}
                    renderItem={({ item }) => <Item
                        foto={item.foto}
                        autor={item.autor}
                        texto={item.texto}
                    />}
                    getItemLayout={(data, index) => ({
                        index, length: 580, offset: 580 * index,
                    })}
                    initialScrollIndex={route.params.index}
                />
            </ImageBackground>
        </View>
    );
}

export default Foto;
