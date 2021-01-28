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
    { key: "23", tut: "Stayi", esp: "Ardilla", cie: "Sciurus aureogaster", foto: require("../assets/_40/m1.jpg"), audio: "au_4_a23.mp3" },
    { key: "24", tut: "Stayi", esp: "Ardilla", cie: "Sciurus deppei", foto: require("../assets/_40/m2.jpg"), audio: "au_4_a24.mp3" },
    { key: "25", tut: "Kuyu", esp: "Armadillo", cie: "Dasypus novemcinctus", foto: require("../assets/_40/m3.jpg"), audio: "au_4_a25.mp3" },
    { key: "26", tut: "Axnu", esp: "Burro", cie: "Equus africanus asinus", foto: require("../assets/_40/m4.jpg"), audio: "au_4_a26.mp3" },
    { key: "27", tut: "Kawayu", esp: "Caballo", cie: "Equus ferus caballus", foto: require("../assets/_40/m5.jpg"), audio: "au_4_a27.mp3" },
    { key: "28", tut: "Paxni", esp: "Cerdo", cie: "Sus scrofa domestica", foto: require("../assets/_40/m6.jpg"), audio: "au_4_a28.mp3" },
    { key: "29", tut: "Skaw", esp: "Conejo", cie: "Sylvilagus brasiliensis", foto: require("../assets/_40/m7.jpg"), audio: "au_4_a29.mp3" },
    { key: "30", tut: "Skaw", esp: "Conejo serrano", cie: "Sylvilagus floridanus", foto: require("../assets/_40/m8.jpg"), audio: "au_4_a30.mp3" },
    { key: "31", tut: "Xuwachichi", esp: "Coyote", cie: "Canis latrans", foto: require("../assets/_40/m9.jpg"), audio: "au_4_a31.mp3" },
    { key: "32", tut: "Mitsi", esp: "Gato", cie: "Felis silvestris catus", foto: require("../assets/_40/m10.jpg"), audio: "au_4_a32.mp3" },
    { key: "33", tut: "Kiwipaxni", esp: "Jabalí", cie: "Pecari tajacu", foto: require("../assets/_40/m11.jpg"), audio: "au_4_a33.mp3" },
    { key: "34", tut: "Mapachin", esp: "Mapache", cie: "Procyon lotor", foto: require("../assets/_40/m12.jpg"), audio: "au_4_a34.mp3" },
    { key: "35", tut: "Xtawakgwa", esp: "Marto", cie: "Potos flavus", foto: require("../assets/_40/m13.jpg"), audio: "au_4_a35.mp3" },
    { key: "36", tut: "Smajan", esp: "Onza / Comadreja", cie: "Mustela frenata", foto: require("../assets/_40/m14.jpg"), audio: "au_4_a36.mp3" },
    { key: "37", tut: "Sunkunú", esp: "Oso hormiguero", cie: "Tamandua mexicana", foto: require("../assets/_40/m15.jpg"), audio: "au_4_a37.mp3" },
    { key: "38", tut: "Chichí", esp: "Perro", cie: "Canis lupus familiaris", foto: require("../assets/_40/m16.jpg"), audio: "au_4_a38.mp3" },
    { key: "39", tut: "Xump", esp: "Puerco espín", cie: "Sphiggurus mexicanus", foto: require("../assets/_40/m17.jpg"), audio: "au_4_a39.mp3" },
    { key: "40", tut: "Tsiya", esp: "Ratón", cie: "Mus musculus", foto: require("../assets/_40/m18.jpg"), audio: "au_4_a40.mp3" },
    { key: "41", tut: "Xkuti", esp: "Tejón", cie: "Nasua narica", foto: require("../assets/_40/m19.jpg"), audio: "au_4_a41.mp3" },
    { key: "42", tut: "Skatan", esp: "Temazate", cie: "Mazama temama", foto: require("../assets/_40/m20.jpg"), audio: "au_4_a42.mp3" },
    { key: "43", tut: "Lapanit", esp: "Jaguar / Tigre", cie: "Panthera onca", foto: require("../assets/_40/m21.jpg"), audio: "au_4_a43.mp3" },
    { key: "44", tut: "Stakumisin", esp: "Tigrillo", cie: "Leopardus wiedii", foto: require("../assets/_40/m22.jpg"), audio: "au_4_a44.mp3" },
    { key: "45", tut: "Saka", esp: "Tuza", cie: "Geomyidae", foto: require("../assets/_40/m23.jpg"), audio: "au_4_a45.mp3" },
    { key: "46", tut: "Tuspan", esp: "Tuza real", cie: "Cuniculus paca", foto: require("../assets/_40/m24.jpg"), audio: "au_4_a46.mp3" },
    { key: "47", tut: "Tuspan", esp: "Tuza real", cie: "Dasyprocta punctata", foto: require("../assets/_40/m25.jpg"), audio: "au_4_a47.mp3" },
    { key: "48", tut: "Wakax", esp: "Vaca", cie: "Bos primigenius taurus", foto: require("../assets/_40/m26.jpg"), audio: "au_4_a48.mp3" },
    { key: "49", tut: "Juki", esp: "Venado", cie: "Odocoileus virginianus", foto: require("../assets/_40/m27.jpg"), audio: "au_4_a49.mp3" },
    { key: "50", tut: "Wakgni", esp: "Zorra gris", cie: "Urocyon cinereoargenteus", foto: require("../assets/_40/m28.jpg"), audio: "au_4_a50.mp3" },
    { key: "51", tut: "Sasan", esp: "Zorrillo", cie: "Mephitis macroura", foto: require("../assets/_40/m29.jpg"), audio: "au_4_a51.mp3" },
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

function Mamiferos({ navigation }) {
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

export default Mamiferos;