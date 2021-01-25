// En esta Screen solo muestra el iframe que contiene video
import React from 'react'; //estrictamente necesario
import {
    View,
    Text,
    //Button,
    Image,
    //TouchableHighlight,
    //TouchableNativeFeedback,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native'; //varios elementos
import YoutubePlayer from 'react-native-youtube-iframe';

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
//<Boton title="X" onPress={() => navigation.navigate('Gramatica')} />

function Video({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent:'center', backgroundColor:'black' }}>
            <YoutubePlayer height={360} videoId={"sNhhvQGsMEc"} />
        </SafeAreaView>
    );
}

/*
<ScrollView>
    <View style={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 24
    }}>
        <Text>Video</Text>
    </View>
</ScrollView>
*/

export default Video;