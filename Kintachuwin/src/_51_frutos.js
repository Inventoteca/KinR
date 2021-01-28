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
    { key: "1", tut: "Kukuta", esp: "Aguacate", cie: "Persea americana", foto: require("../assets/_50/f1.jpg"), audio: "au_5_f1.mp3" },
    { key: "2", tut: "Axux", esp: "Ajo", cie: "Allium sativum", foto: require("../assets/_50/f2.jpg"), audio: "au_5_f2.mp3" },
    { key: "3", tut: "Nipxi", esp: "Calabaza", cie: "Cucurbita pepo", foto: require("../assets/_50/f3.jpg"), audio: "au_5_f3.mp3" },
    { key: "4", tut: "Chataya", esp: "Capulín", cie: "Xylosma panamensis", foto: require("../assets/_50/f4.jpg"), audio: "au_5_f4.mp3" },
    { key: "5", tut: "Maklhtukun", esp: "Chayote / espinozo", cie: "Sechium edule", foto: require("../assets/_50/f5.jpg"), audio: "au_5_f5.mp3" },
    { key: "6", tut: "Akchítkiwi", esp: "Chirimoya", cie: "Annona cherimola", foto: require("../assets/_50/f6.jpg"), audio: "au_5_f6.mp3" },
    { key: "7", tut: "Chulux", esp: "Ciruela", cie: "Prunus spp", foto: require("../assets/_50/f7.jpg"), audio: "au_5_f7.mp3" },
    { key: "8", tut: "Lhileakg", esp: "Guaje", cie: "Leucaena leucocephala", foto: require("../assets/_50/f8.jpg"), audio: "au_5_f8.mp3" },
    { key: "9", tut: "Asiwit", esp: "Guayaba", cie: "Psidium guajava", foto: require("../assets/_50/f9.jpg"), audio: "au_5_f9.mp3" },
    { key: "10", tut: "Kuyum", esp: "Jicama", cie: "Pachyrhizus spp", foto: require("../assets/_50/f10.jpg"), audio: "au_5_f10.mp3" },
    { key: "11", tut: "Xukut", esp: "Limón", cie: "Citrus aurantifolia", foto: require("../assets/_50/f11.jpg"), audio: "au_5_f11.mp3" },
    { key: "12", tut: "Kuxi", esp: "Maíz", cie: "Zea mays", foto: require("../assets/_50/f12.jpg"), audio: "au_5_f12.mp3" },
    { key: "13", tut: "Laxux", esp: "Naranja", cie: "Citrus sinensis", foto: require("../assets/_50/f13.jpg"), audio: "au_5_f13.mp3" },
    { key: "14", tut: "Xaxkuta laxux", esp: "Naranja agría", cie: "Citrus aurantium", foto: require("../assets/_50/f14.jpg"), audio: "au_5_f14.mp3" },
    { key: "15", tut: "Lhpu", esp: "Pagua", cie: "Persea schiedeana", foto: require("../assets/_50/f15.jpg"), audio: "au_5_f15.mp3" },
    { key: "16", tut: "Akaxka", esp: "Piña", cie: "Ananas comosus", foto: require("../assets/_50/f16.jpg"), audio: "au_5_f16.mp3" },
    { key: "17", tut: "Sekgna", esp: "Plátano", cie: "Musa paradisiaca", foto: require("../assets/_50/f17.jpg"), audio: "au_5_f17.mp3" },
    { key: "18", tut: "Manzanasekgna", esp: "Plátano  manzano", cie: "Musa acuminata", foto: require("../assets/_50/f18.jpg"), audio: "au_5_f18.mp3" },
    { key: "19", tut: "Perasekgna", esp: "Plátano pera", cie: "Musa spp", foto: require("../assets/_50/f19.jpg"), audio: "au_5_f19.mp3" },
    { key: "20", tut: "Kununu", esp: "Zapote amarillo", cie: "Pouteria campechiana", foto: require("../assets/_50/f20.jpg"), audio: "au_5_f20.mp3" },
    { key: "21", tut: "Akgchixit jak", esp: "Zapote cabello", cie: "Licania platypus", foto: require("../assets/_50/f21.jpg"), audio: "au_5_f21.mp3" },
    { key: "22", tut: "Suwalh", esp: "Zapote negro", cie: "Diospyros digyna", foto: require("../assets/_50/f22.jpg"), audio: "au_5_f22.mp3" },
    { key: "23", tut: "Pij", esp: "Zapote oropillo", cie: "Casimiroa edulis", foto: require("../assets/_50/f23.jpg"), audio: "au_5_f23.mp3" },
    { key: "24", tut: "Chut", esp: "Piñón", cie: "Jatropha curcas", foto: require("../assets/_50/f24.jpg"), audio: "au_5_f24.mp3" },
    { key: "25", tut: "Akgatsasna", esp: "Cebolla", cie: "Allium spp", foto: require("../assets/_50/f25.jpg"), audio: "au_5_f25.mp3" },
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
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Bold' }}>
                {props.tut}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Regular' }}>
                {props.esp}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'OpenSans-Italic' }}>
                {props.cie}
            </Text>
            <Imgn source={props.foto} width={240} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Frutos({ navigation }) {
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
                    tut={item.tut}
                    esp={item.esp}
                    cie={item.cie}
                    foto={item.foto}
                    audio={item.audio}
                />}
            />

        </View>
    );
}

export default Frutos;