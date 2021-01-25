import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Image,
  //Button,
  //TouchableHighlight,
  //TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native'; //varios elementos

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
                borderColor:'gray', 
                borderWidth:1, 
                borderRadius:4, 
                padding:6, 
                backgroundColor:'whitesmoke', 
                margin:4,
                alignItems:'center'
            }}
            onPress={props.onPress}
        >
            <Text style={{fontFamily:'OpenSans-Regular', fontSize:16}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

function Colab({ navigation }) {
    return (
        <ScrollView>
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24
        }}> 
            {/*************************************************************************/} 
            <Imgn source={require('../assets/_92/alp.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Arely López Pérez
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Estudiate del bachillerato. Mi lengua materna es el Totonaco, me encanta la poesía, las matemáticas, jugar ajedrez, bailar, escuchar música, tocar con la banda de guerra en la escuela. He ganado en concursos de declamación,  ajedrez y juego de "Tsum".
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                arelylopezperez741@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_92/alp.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                David Figueroa Castañeda
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Abc.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                abc
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_92/doxl.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                David Octavio Xochicale León
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Diseñador, creador de contenido, apasionado por la fotografía, el cine y la música de todo género.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                davoct@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_92/gle.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Gabriela Lucas Esteban
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Licenciada en Educación Preescolar y Maestra en Desarrollo Educativo. Hablo la lengua Tutunaku. Me gusta el trabajo  que realizo con los niños y niñas pequeñas porque son el cimiento de las nuevas generaciones. Me apasiona leer, escribir y estar rodeada de la naturaleza.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                gabichalukas@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_92/jrl.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Jorge Ramos Luna
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Biólogo, divulgador científico y realizador audiovisual. Me apasiona el cine, la primatología y la conservación de la biodiversidad.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                jor_ge_94@hotmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_92/jfs.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                José Francisco Santiago
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Antropólogo lingüista. Doctor en Investigación Educativa. Me gustan las lenguas mesoamericanas, sobre todo la totonaca- tepehua, y el senderismo.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                josestgofco@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_92/jfs.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Rafael Alarcón Hernández
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Abc.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                abc
            </Text>

        </View>
        </ScrollView>
    );
}

export default Colab;