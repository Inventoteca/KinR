import React from 'react'; //estrictamente necesario
import {
    View,
    Text,
    //Button,
    Image,
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

const BotonImg = (props) => {
    return (
        <TouchableOpacity
            style={{
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 4,
                padding: 0,
                backgroundColor: 'whitesmoke',
                margin: 4,
                alignItems: 'center'
            }}
            onPress={props.onPress}
        >
            <Imgn source={props.source} width={64} />
        </TouchableOpacity>
    )
}

function Cuentos({ navigation }) {
    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
                padding: 24
            }}>

                <BotonImg source={require('../assets/_70/cn1.jpg')} onPress={() => navigation.navigate('Cuento1')} />
                <BotonImg source={require('../assets/_70/cn2.jpg')} onPress={() => navigation.navigate('Cuento2')} />
                <BotonImg source={require('../assets/_70/cn3.jpg')} onPress={() => navigation.navigate('Cuento3')} />
                <BotonImg source={require('../assets/_70/cn4.jpg')} onPress={() => navigation.navigate('Cuento4')} />
                <BotonImg source={require('../assets/_70/cn5.jpg')} onPress={() => navigation.navigate('Cuento5')} />

            </View>
        </ScrollView>
    );
}

export default Cuentos;