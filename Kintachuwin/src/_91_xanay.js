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

function Xanay({ navigation }) {
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
            <Imgn source={require('../assets/_91/ars.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Abigail Rocha Soriano 
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Comercióloga egresada, feminista, voguera y creadora de contenido. Me gusta el artivismo comunitario y por los derechos LGBTTTIQ+.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                abigailrocha29@outlook.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_91/csl.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Citlal Solano Lara
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Bióloga y estudiante de la Maestría en agroecologia, territorio y soberanía alimentaria. Amo la divulgación científica, aprender con las comunidades y viajar por la sierra.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                citlalsolanol@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_91/jjrs.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Jesús Javier Rojas Sánchez
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Diseñador gráfico y serigrafísta. Me gusta la difusión del arte, los prints, la música, la naturaleza, compartir y aprender.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                jahvierrs@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_91/jmdg.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Juan Manuel Díaz García
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Biólogo, Maestro en Ciencias y estudiante de Doctorado. Me gusta hacer y divulgar ciencia, ir al monte, tomar fotografías, y conocer la riqueza biocultural de las comunidades.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                juanm.diazgarcia@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_91/kpr.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Karina Pani Rodríguez
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
            Licenciada en Educación Preescolar. Me gusta la naturaleza, pintar, y la actividad comunitaria en diferentes grupos
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                kary16pani@gmail.com
            </Text>

            {/*************************************************************************/}
            <Imgn source={require('../assets/_91/vfc.jpg')} width={340} />
            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                Verónica Flores Cortés
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
                Pasante en la licenciatura de física. Profesora de física y matemáticas. Amo estar con mi familia y amigos, compartir saberes, leer, la astronomía, ir a la sierra, escuchar música, hacer ejercicio y ver películas.
            </Text>
            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                vero.flores.mystic@gmail.com
            </Text>

        </View>
        </ScrollView>
    );
}

export default Xanay;