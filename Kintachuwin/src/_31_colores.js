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
import { playLocalSound } from './mis-componentes';

const DATA = [
    { key: "1", esp: "Amarillo", tut: "Smukuku", foto: require("../assets/_31/c1.jpg"), audio: "au_3_c01.mp3" },
    { key: "2", esp: "Azul", tut: "Spupuku", foto: require("../assets/_31/c2.jpg"), audio: "au_3_c02.mp3" },
    { key: "3", esp: "Blanco", tut: "Snapapa", foto: require("../assets/_31/c3.jpg"), audio: "au_3_c03.mp3" },
    { key: "4", esp: "Café", tut: "Xkgoniwa", foto: require("../assets/_31/c4.jpg"), audio: "au_3_c04.mp3" },
    { key: "5", esp: "Gris", tut: "Lhpupokgo", foto: require("../assets/_31/c5.jpg"), audio: "au_3_c05.mp3" },
    { key: "6", esp: "Morado", tut: "Mantajwa", foto: require("../assets/_31/c6.jpg"), audio: "au_3_c06.mp3" },
    { key: "7", esp: "Naranja", tut: "Lukuku", foto: require("../assets/_31/c7.jpg"), audio: "au_3_c07.mp3" },
    { key: "8", esp: "Negro", tut: "Tsitsekga", foto: require("../assets/_31/c8.jpg"), audio: "au_3_c08.mp3" },
    { key: "9", esp: "Pinto", tut: "Spilili", foto: require("../assets/_31/c9.jpg"), audio: "au_3_c09.mp3" },
    { key: "10", esp: "Rojo", tut: "Tsitsokgo", foto: require("../assets/_31/c10.jpg"), audio: "au_3_c10.mp3" },
    { key: "11", esp: "Verde", tut: "Xtakgni", foto: require("../assets/_31/c11.jpg"), audio: "au_3_c11.mp3" },
    { key: "12", esp: "Verde claro", tut: "Xkayiwa", foto: require("../assets/_31/c12.jpg"), audio: "au_3_c12.mp3" },
];

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
                marginTop: 6,
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
/*<Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginTop: 0, marginBottom: 0 }}>
                {props.texto}
            </Text>*/
const Item = (props) => {
    return (
        <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black' }}>
                <Text style={{ fontStyle: 'italic', fontWeight: 'normal' }}>{props.tut} - </Text>
                <Text style={{ fontStyle: 'normal', fontWeight: 'normal' }}>{props.esp} </Text>
            </Text>
            <Imgn source={props.foto} width={300} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Colores({ navigation }) {
    return (
        <View style={{
            flex: 1,
            //alignItems: 'stretch',
            //justifyContent: 'flex-start',
            backgroundColor: 'white',
            //padding: 0,
        }}>
            <FlatList
                // Poner padding en style normal hace que el último elemento
                // no sea completamente visible (se ve cortado).
                // ¿Por qué contentContainerStyle si funciona?
                // En la documentanción de FlatList no aparece esa prop,
                // sin embargo aparece en la documentación de ScrollView.
                //style={{ flex: 1, padding: 0, paddingBottom: 0, margin: 24 }}
                contentContainerStyle={{ padding: 24 }}
                data={DATA}
                renderItem={({ item }) => <Item
                    esp={item.esp}
                    tut={item.tut}
                    //texto={item.texto}
                    foto={item.foto}
                    //tabla={item.tabla}
                    audio={item.audio}
                />}
            />

        </View>
    );
}

export default Colores;