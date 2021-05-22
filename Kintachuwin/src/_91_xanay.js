/**
 * Colectivo Xanay
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

function Xanay({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Item
                        foto={require('../assets/_91/ars.jpg')}
                        nombre="Abigail Rocha Soriano"
                        correo="abigailrocha29@outlook.com"
                        texto="Comercióloga egresada, feminista, voguera y creadora de contenido. Me gusta el artivismo comunitario y por los derechos LGBTTTIQ+."
                    />

                    <Item
                        foto={require('../assets/_91/csl.jpg')}
                        nombre="Citlal Solano Lara"
                        correo="citlalsolanol@gmail.com"
                        texto="Bióloga y estudiante de la Maestría en agroecologia, territorio y soberanía alimentaria. Amo la divulgación científica, aprender con las comunidades y viajar por la sierra."
                    />

                    <Item
                        foto={require('../assets/_91/jjrs.jpg')}
                        nombre="Jesús Javier Rojas Sánchez"
                        correo="jahvierrs@gmail.com"
                        texto="Diseñador gráfico y serigrafísta. Me gusta la difusión del arte, los prints, la música, la naturaleza, compartir y aprender."
                    />


                    <Item
                        foto={require('../assets/_91/jmdg.jpg')}
                        nombre="Juan Manuel Díaz García"
                        correo="juanm.diazgarcia@gmail.com"
                        texto="Biólogo, Maestro en Ciencias y estudiante de Doctorado. Me gusta hacer y divulgar ciencia, ir al monte, tomar fotografías, y conocer la riqueza biocultural de las comunidades."
                    />

                    <Item
                        foto={require('../assets/_91/kpr.jpg')}
                        nombre="Karina Pani Rodríguez"
                        correo="kary16pani@gmail.com"
                        texto="Licenciada en Educación Preescolar. Me gusta la naturaleza, pintar, y la actividad comunitaria en diferentes grupos."
                    />
                    <Item
                        foto={require('../assets/_91/vfc.jpg')}
                        nombre="Verónica Flores Cortés"
                        correo="vero.flores.mystic@gmail.com"
                        texto="Pasante en la licenciatura de física. Profesora de física y matemáticas. Amo estar con mi familia y amigos, compartir saberes, leer, la astronomía, ir a la sierra, escuchar música, hacer ejercicio y ver películas."
                    />

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Xanay;