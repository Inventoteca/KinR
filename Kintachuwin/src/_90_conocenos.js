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

function Conocenos({ navigation }) {
    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
                padding: 24
            }}>

            <Imgn source={require('../assets/_91/cx.jpg')} width={340} />

            <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold' }}>
                Colectivo Xanay
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 24, marginBottom: 24 }}>
                Somos un grupo de jóvenes que contribuyen al desarrollo social, educativo y ambiental de los pueblos originarios de la Sierra Norte de Puebla, a través de actividades que integran y respetan la riqueza biocultural.
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Light', marginBottom:24 }}>
                xanaycolectivo@gmail.com
            </Text>

            <Boton title="Colectivo Xanay" onPress={() => navigation.navigate('Xanay')} />
            <Boton title="Colaboradores" onPress={() => navigation.navigate('Colab')} />

            </View>
        </ScrollView>
    );
}

export default Conocenos;