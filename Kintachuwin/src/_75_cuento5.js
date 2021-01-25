import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  //Button,
  Image,
  ScrollView
} from 'react-native'; //varios elementos

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View style={{ alignItems: 'center' }} >
            <Image source={props.source} style={{ width: w, height: h }} />
        </View>
    );
}

//<Boton title="X" /*onPress={() => navigation.navigate('Gramatica')}*/ />
function Cuento5({ navigation }) {
    return (
        <ScrollView>
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24
        }}>
            <Imgn source={require('../assets/_70/cn5.jpg')} width={340} />

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>XINTILHNI’</Text>
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Arely López y Verónica Flores
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Italic', marginTop:24, marginBottom:24}}>
{`Wa´ luwa makgasa´ anta´ kachikin k´Tuxtla la nina x´anan chichini´, xintilhni´ xlamakgo k´katiyatni´. Akxni´ nchu lampulana titasiyulh chichini´ chima xintilhni´ talakgatsekg´kgolh. Chi nchu kgalhatujun ni taskgalakgolh akxni´ lantipkgolh chichini´ palhankgolh nalh tatsuwikgolh. Chi nchu uku´ wa´ litalakgapaskgoy kgalhatujun makgskgalananin wa´ xliwankgan kumu anta´ tatakgskgoy kxkilhapan kgalhtuchokgo luwa talakgapaskgoy kumu luwa xlakankan chixkuwin kgalhikgo.`}
            </Text>

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                LOS HABITANTES DE PIEDRA
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}></Text>
            </Text>
            
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
{`Hace mucho tiempo en Tuxtla, cuando no existía el Sol, habitaban seres formados de piedra. En algún momento el Sol apareció y los habitantes de piedra se ocultaron. Sin embargo, siete de ellos no lo lograron y al recibir los primeros rayos del Sol quedaron petrificados. Hoy en día a esas piedras se les llaman “las siete piedras guardianes”. Estas piedras guardianes se encuentran ubicadas a lo largo de la orilla del río, y son reconocidas porque tienen en su superficie forma de rostro humano.`}
            </Text>

        </View>
        </ScrollView>
    );
}

export default Cuento5;