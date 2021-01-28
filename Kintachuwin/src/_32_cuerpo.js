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
    { key: "1", esp: "Cabeza", tut: "Akgxakga", foto: require("../assets/_32/pc1.png"), audio: "au_3_pc1.mp3" },
    { key: "2", esp: "Cabello", tut: "Chixit", foto: require("../assets/_32/pc2.png"), audio: "au_3_pc2.mp3" },
    { key: "3", esp: "Cana", tut: "Aktsasat", foto: require("../assets/_32/pc3.png"), audio: "au_3_pc3.mp3" },
    { key: "4", esp: "Frente", tut: "Mun", foto: require("../assets/_32/pc4.png"), audio: "au_3_pc4.mp3" },
    { key: "5", esp: "Cara", tut: "Lakán", foto: require("../assets/_32/pc5.png"), audio: "au_3_pc5.mp3" },
    { key: "6", esp: "Ojo", tut: "Lakgastapu", foto: require("../assets/_32/pc6.png"), audio: "au_3_pc6.mp3" },
    { key: "7", esp: "Ceja", tut: "Lakgatsasat", foto: require("../assets/_32/pc7.png"), audio: "au_3_pc7.mp3" },
    { key: "8", esp: "Pestaña", tut: "Lakgpitsasat", foto: require("../assets/_32/pc8.png"), audio: "au_3_pc8.mp3" },
    { key: "9", esp: "Nariz", tut: "Kankán", foto: require("../assets/_32/pc9.png"), audio: "au_3_pc9.mp3" },
    { key: "10", esp: "Cachete", tut: "Lakgxtín", foto: require("../assets/_32/pc10.png"), audio: "au_3_pc10.mp3" },
    { key: "11", esp: "Oreja", tut: "Takgán", foto: require("../assets/_32/pc11.png"), audio: "au_3_pc11.mp3" },
    { key: "12", esp: "Boca", tut: "Kilhni", foto: require("../assets/_32/pc12.png"), audio: "au_3_pc12.mp3" },
    { key: "13", esp: "Labio", tut: "Kilhpín", foto: require("../assets/_32/pc13.png"), audio: "au_3_pc13.mp3" },
    { key: "14", esp: "Bigote", tut: "Kgalhchixit", foto: require("../assets/_32/pc14.png"), audio: "au_3_pc14.mp3" },
    { key: "15", esp: "Barba", tut: "Lakgxtichixit", foto: require("../assets/_32/pc15.png"), audio: "au_3_pc15.mp3" },
    { key: "16", esp: "Quijada", tut: "Kgalhtsán", foto: require("../assets/_32/pc16.png"), audio: "au_3_pc16.mp3" },
    { key: "17", esp: "Cuello", tut: "Pixni", foto: require("../assets/_32/pc17.png"), audio: "au_3_pc17.mp3" },
    { key: "18", esp: "Hombro", tut: "Pakgxtun", foto: require("../assets/_32/pc18.png"), audio: "au_3_pc18.mp3" },
    { key: "19", esp: "Axila", tut: "Okgxtán", foto: require("../assets/_32/pc19.png"), audio: "au_3_pc19.mp3" },
    { key: "20", esp: "Pecho", tut: "Kuxmún", foto: require("../assets/_32/pc20.png"), audio: "au_3_pc20.mp3" },
    { key: "21", esp: "Seno", tut: "Tsikit", foto: require("../assets/_32/pc21.png"), audio: "au_3_pc21.mp3" },
    { key: "22", esp: "Abdomen", tut: "Paan", foto: require("../assets/_32/pc22.png"), audio: "au_3_pc22.mp3" },
    { key: "23", esp: "Costado", tut: "Tapan", foto: require("../assets/_32/pc23.png"), audio: "au_3_pc23.mp3" },
    { key: "24", esp: "Cintura", tut: "Tampulakgni", foto: require("../assets/_32/pc24.png"), audio: "au_3_pc24.mp3" },
    { key: "25", esp: "Cadera", tut: "Tantín", foto: require("../assets/_32/pc25.png"), audio: "au_3_pc25.mp3" },
    { key: "26", esp: "Ombligo", tut: "Tampusni", foto: require("../assets/_32/pc26.png"), audio: "au_3_pc26.mp3" },
    { key: "27", esp: "Ingle", tut: "Pumakán", foto: require("../assets/_32/pc27.png"), audio: "au_3_pc27.mp3" },
    { key: "28", esp: "Antebrazo", tut: "Pakgan", foto: require("../assets/_32/pc28.png"), audio: "au_3_pc28.mp3" },
    { key: "29", esp: "Brazo", tut: "Makxpán", foto: require("../assets/_32/pc29.png"), audio: "au_3_pc29.mp3" },
    { key: "30", esp: "Codo", tut: "Makglhtsán", foto: require("../assets/_32/pc30.png"), audio: "au_3_pc30.mp3" },
    { key: "31", esp: "Muñeca", tut: "Makapixni", foto: require("../assets/_32/pc31.png"), audio: "au_3_pc31.mp3" },
    { key: "32", esp: "Mano", tut: "Makan", foto: require("../assets/_32/pc32.png"), audio: "au_3_pc32.mp3" },
    { key: "33", esp: "Palma de la mano", tut: "Makgxtampun", foto: require("../assets/_32/pc33.png"), audio: "au_3_pc33.mp3" },
    { key: "34", esp: "Dedos de la mano", tut: "Laktsumakan", foto: require("../assets/_32/pc34.png"), audio: "au_3_pc34.mp3" },
    { key: "35", esp: "Uña", tut: "Siyan", foto: require("../assets/_32/pc35.png"), audio: "au_3_pc35.mp3" },
    { key: "36", esp: "Espalda", tut: "Akglhchan", foto: require("../assets/_32/pc36.png"), audio: "au_3_pc36.mp3" },
    { key: "37", esp: "Nalga", tut: "Tan", foto: require("../assets/_32/pc37.png"), audio: "au_3_pc37.mp3" },
    { key: "38", esp: "Pierna", tut: "Kgapin", foto: require("../assets/_32/pc38.png"), audio: "au_3_pc38.mp3" },
    { key: "39", esp: "Rodilla", tut: "Tsokgosni", foto: require("../assets/_32/pc39.png"), audio: "au_3_pc39.mp3" },
    { key: "40", esp: "Pantorrilla", tut: "Tantsaspin", foto: require("../assets/_32/pc40.png"), audio: "au_3_pc40.mp3" },
    { key: "41", esp: "Tobillo", tut: "Tupixni", foto: require("../assets/_32/pc41.png"), audio: "au_3_pc41.mp3" },
    { key: "42", esp: "Talón", tut: "Tsan", foto: require("../assets/_32/pc42.png"), audio: "au_3_pc42.mp3" },
    { key: "43", esp: "Pie", tut: "Tantún", foto: require("../assets/_32/pc43.png"), audio: "au_3_pc43.mp3" },
    { key: "44", esp: "Dedos del pie", tut: "Laktsutujún", foto: require("../assets/_32/pc44.png"), audio: "au_3_pc44.mp3" },
    { key: "45", esp: "Uña del pie", tut: "Tusiyan", foto: require("../assets/_32/pc45.png"), audio: "au_3_pc45.mp3" },
    { key: "46", esp: "Planta del pie", tut: "Tantúxtakga", foto: require("../assets/_32/pc46.png"), audio: "au_3_pc46.mp3" },
    { key: "47", esp: "Piel", tut: "Xuwa", foto: require("../assets/_32/pc47.png"), audio: "au_3_pc47.mp3" },
    { key: "48", esp: "Hueso", tut: "Lukut", foto: require("../assets/_32/pc48.png"), audio: "au_3_pc48.mp3" },
    { key: "49", esp: "Sangre", tut: "Kgalhni", foto: require("../assets/_32/pc49.png"), audio: "au_3_pc49.mp3" },
    { key: "50", esp: "Carne", tut: "Liwa", foto: require("../assets/_32/pc50.png"), audio: "au_3_pc50.mp3" },
    { key: "51", esp: "Vena", tut: "Xnujut", foto: require("../assets/_32/pc51.png"), audio: "au_3_pc51.mp3" },
    { key: "52", esp: "Craneo", tut: "Aklukut", foto: require("../assets/_32/pc52.png"), audio: "au_3_pc52.mp3" },
    { key: "53", esp: "Cerebro", tut: "Akskitit", foto: require("../assets/_32/pc53.png"), audio: "au_3_pc53.mp3" },
    { key: "54", esp: "Lengua", tut: "Simakgat", foto: require("../assets/_32/pc54.png"), audio: "au_3_pc54.mp3" },
    { key: "55", esp: "Diente", tut: "Tatsán", foto: require("../assets/_32/pc55.png"), audio: "au_3_pc55.mp3" },
    { key: "56", esp: "Muela", tut: "Xwatitátsan", foto: require("../assets/_32/pc56.png"), audio: "au_3_pc56.mp3" },
    { key: "57", esp: "Garganta", tut: "Pixlokgot", foto: require("../assets/_32/pc57.png"), audio: "au_3_pc57.mp3" },
    { key: "58", esp: "Corazón", tut: "Naku", foto: require("../assets/_32/pc58.png"), audio: "au_3_pc58.mp3" },
    { key: "59", esp: "Hígado", tut: "Lhwakaka", foto: require("../assets/_32/pc59.png"), audio: "au_3_pc59.mp3" },
    { key: "60", esp: "Pulmón", tut: "Pujaxan", foto: require("../assets/_32/pc60.png"), audio: "au_3_pc60.mp3" },
    { key: "61", esp: "Hiel, vesícula", tut: "Xikxi", foto: require("../assets/_32/pc61.png"), audio: "au_3_pc61.mp3" },
    { key: "62", esp: "Estómago", tut: "Pokgo", foto: require("../assets/_32/pc62.png"), audio: "au_3_pc62.mp3" },
    { key: "63", esp: "Intestino", tut: "Paluwa", foto: require("../assets/_32/pc63.png"), audio: "au_3_pc63.mp3" },
    { key: "64", esp: "Riñon", tut: "Pástapu", foto: require("../assets/_32/pc64.png"), audio: "au_3_pc64.mp3" },
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
            <Imgn source={props.foto} width={240} />
            <Boton title="Escuchar" onPress={() => playLocalSound(props.audio)} />
        </View>
    );
}

function Cuerpo({ navigation }) {
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

export default Cuerpo;