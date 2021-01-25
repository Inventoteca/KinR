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
function Cuento4({ navigation }) {
    return (
        <ScrollView>
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24
        }}>
            <Imgn source={require('../assets/_70/cn4.jpg')} width={340} />

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>AKXNI’ LA LAKATAWILAKAN MPAPA’</Text>
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Arely López y Verónica Flores
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Italic', marginTop:24, marginBottom:24}}>
{`Akxni´ la lakatawilakan mampapa´, chi lakpuskatin nti nix´aks xliliyanat xlichin chu natlan ntsinat xa tsitsokg natlan litsapan (alfiler) xalaktsu xtumin, kampichi xa tlan nachax kskgata´, Chi mpi ni nana´ katitlawakga juyu mpi nikgatsi, chu nkilhxwitakg nachaxkan, chi nti nana´ lakgoy ka walh mpapa´ litalakgapas.`}
            </Text>

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                ECLIPSE DE LUNA
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}></Text>
            </Text>
            
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
{`Cuando sucede un eclipse de luna, a las mujeres embarazadas se les coloca un listón o hilo rojo también algún objeto como un alfiler o monedas para que sus hijos nazcan sanos. Se cuenta que, si no se coloca el objeto o listón rojo, los hijos pueden nacer con alguna discapacidad, en particular, con labio leporino. A las personas que nacen con este defecto congénito se dice que “se los comió luna”.`}
            </Text>

        </View>
        </ScrollView>
    );
}

export default Cuento4;