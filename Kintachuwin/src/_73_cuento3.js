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
function Cuento3({ navigation }) {
    return (
        <ScrollView>
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24
        }}>
            <Imgn source={require('../assets/_70/cn3.jpg')} width={340} />

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>LUWA’ CHU LA LAKATAWILAKAN NCHICHINI’</Text>
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Arely López y Verónica Flores
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Italic', marginTop:24, marginBottom:24}}>
{`Chi ntawan wa li lakatawilakan manchichini´ kumu wakakgolh laklankga luwa´ k´akgapun, akxni´ lalakgatiyataxtukgoy manchichini´ lakgapaxtok´kgoy mantaxkgakgat, kapokglhwanan, chinchu masilankgna´ chuwankgoy kampichi ni titaktakgoyach nkatsisni´.`}
            </Text>

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                LAS SERPIENTES Y EL ECLIPSE DE SOL
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}></Text>
            </Text>
            
            <Text style={{fontSize:16, fontFamily:'OpenSans-Regular', marginTop:24, marginBottom:24}}>
{`Existe un mito que cuenta que el eclipse solar sucede porque existen serpientes enormes en el cielo, cada que pasa una serpiente delante del sol, tapan la luz y se obscurece, los grillos con su canto evitan que estas serpientes bajen a la tierra por la noche.`}
            </Text>

        </View>
        </ScrollView>
    );
}

export default Cuento3;