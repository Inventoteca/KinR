import React from 'react'; //estrictamente necesario
import {
    View,
    Text,
    //Button,
    Image,
    //TouchableHighlight,
    //TouchableNativeFeedback,
    TouchableOpacity,
    FlatList,
} from 'react-native'; //varios elementos
import {playLocalSound} from './mis-componentes';

const DATA = [
    {
        key:'00',
        titulo: "PRONOMBRES POSESIVOS",
        texto: "Los pronombres posesivos ayudan a indicar la posesión de algún elemento o cosa.",
        imagen: require('../assets/_12/img2.png'),
        audio: 'au_1_02.mp3',
    }
];

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return (
        <View>
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

/*<Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
    {props-autor}
</Text>*/
const Item = (props) => {
    return (
        <View style={{margin:12}}>
            <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold' }}>
                {props.titulo}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 12, marginBottom: 12 }}>
                {props.texto}
            </Text>
            <Imgn source={props.imagen} width={320} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Pronombres({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            padding: 24
        }}>
            <FlatList data={DATA} renderItem={
                ({item}) => <Item titulo={item.titulo} texto={item.texto} imagen={item.imagen} audio={item.audio} /> 
            }/>
        </View>
    );
}

export default Pronombres;