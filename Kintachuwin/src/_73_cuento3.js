/**
 * Cuento (Leyenda) 3
 */

import React from 'react'; //librería principal
import {//importar varios elementos
    View,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
// importar componentes personalizados
import { playLocalSound, Imgn, Boton, BotonImg, Styles } from './mis-componentes';

function Cuento3({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Imgn source={require('../assets/_70/cn3.jpg')} width={320} />
                    <Text style={Styles.titulo}>
                        <Text style={Styles.cursiva}>LUWA’ CHU LA LAKATAWILAKAN NCHICHINI’</Text>
                    </Text>
                    <Text style={Styles.autor}>
                        Por Arely López y Verónica Flores
                    </Text>

                    <Text style={Styles.tutunaku}>
                        {`Chi ntawan wa li lakatawilakan manchichini´ kumu wakakgolh laklankga luwa´ k´akgapun, akxni´ lalakgatiyataxtukgoy manchichini´ lakgapaxtok´kgoy mantaxkgakgat, kapokglhwanan, chinchu masilankgna´ chuwankgoy kampichi ni titaktakgoyach nkatsisni´.`}
                    </Text>

                    <Text style={Styles.titulo}>
                        LAS SERPIENTES Y EL ECLIPSE DE SOL
                    </Text>

                    <Text style={Styles.texto}>
                        {`Existe un mito que cuenta que el eclipse solar sucede porque existen serpientes enormes en el cielo, cada que pasa una serpiente delante del sol, tapan la luz y se obscurece, los grillos con su canto evitan que estas serpientes bajen a la tierra por la noche.`}
                    </Text>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Cuento3;