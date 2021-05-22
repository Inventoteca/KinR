/**
 * Colaboradores
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { Imgn, Boton, Styles } from './mis-componentes';

const Item = (props) => {
    return (
        <View style={{ marginBottom: 12 }}>
            <Imgn source={props.foto} width={320} />
            <Text style={Styles.titulo}>
                {props.nombre}
            </Text>
            <Text style={Styles.autor}>
                {props.correo}
            </Text>
            <Text style={Styles.texto}>
                {props.texto}
            </Text>
        </View>
    );
}

function Colab({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Item
                        foto={require('../assets/_92/alp.jpg')}
                        nombre="Arely López Pérez"
                        correo="arelylopezperez741@gmail.com"
                        texto='Estudiate del bachillerato. Mi lengua materna es el Totonaco, me encanta la poesía, las matemáticas, jugar ajedrez, bailar, escuchar música, tocar con la banda de guerra en la escuela. He ganado en concursos de declamación,  ajedrez y juego de "Tsum".'
                    />
                    <Item
                        foto={require('../assets/_92/dfc.jpg')}
                        nombre="David Figueroa Castañeda"
                        correo="david.fc@inventoteca.com"
                        texto="Ing. en Mecatrónica. Asesorías en: Innovación Tecnológica, Desig Thinking, Emprendimiento, Programación Embebida (Node-RED), Linux"
                    />
                    <Item
                        foto={require('../assets/_92/doxl.jpg')}
                        nombre="David Octavio Xochicale León"
                        correo="davoct@gmail.com"
                        texto="Diseñador, creador de contenido, apasionado por la fotografía, el cine y la música de todo género."
                    />
                    <Item
                        foto={require('../assets/_92/gle.jpg')}
                        nombre="Gabriela Lucas Esteban"
                        correo="gabichalukas@gmail.com"
                        texto="Licenciada en Educación Preescolar y Maestra en Desarrollo Educativo. Hablo la lengua Tutunaku. Me gusta el trabajo  que realizo con los niños y niñas pequeñas porque son el cimiento de las nuevas generaciones. Me apasiona leer, escribir y estar rodeada de la naturaleza."
                    />
                    <Item
                        foto={require('../assets/_92/jrl.jpg')}
                        nombre="Jorge Ramos Luna"
                        correo="jor_ge_94@hotmail.com"
                        texto="Biólogo, divulgador científico y realizador audiovisual. Me apasiona el cine, la primatología y la conservación de la biodiversidad."
                    />
                    <Item
                        foto={require('../assets/_92/jfs.jpg')}
                        nombre="José Francisco Santiago"
                        correo="josestgofco@gmail.com"
                        texto="Antropólogo lingüista. Doctor en Investigación Educativa. Me gustan las lenguas mesoamericanas, sobre todo la totonaca- tepehua, y el senderismo."
                    />
                    <Item
                        foto={require('../assets/_92/rah.jpg')}
                        nombre="Rafael Alarcón Hernández"
                        correo="rafael.alarcon@inventoteca.com"
                        texto="Ing. en Mecatrónica. Asesorías en: Programación en C++, Programación en Python, Algoritmos de búsqueda de ruta, Diseño CAD, Diseño de PCB"
                    />

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Colab;