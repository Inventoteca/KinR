/**
 * Cuento (Leyenda) 4
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

function Cuento4({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Imgn source={require('../assets/_70/cn4.jpg')} width={320} />
                    <Text style={Styles.titulo}>
                        <Text style={{ fontStyle: 'italic', fontWeight: 'normal' }}>AKXNI’ LA LAKATAWILAKAN MPAPA’</Text>
                    </Text>
                    <Text style={Styles.autor}>
                        Por Arely López y Verónica Flores
                    </Text>

                    <Text style={Styles.tutunaku}>
                        {`Akxni´ la lakatawilakan mampapa´, chi lakpuskatin nti nix´aks xliliyanat xlichin chu natlan ntsinat xa tsitsokg natlan litsapan (alfiler) xalaktsu xtumin, kampichi xa tlan nachax kskgata´, Chi mpi ni nana´ katitlawakga juyu mpi nikgatsi, chu nkilhxwitakg nachaxkan, chi nti nana´ lakgoy ka walh mpapa´ litalakgapas.`}
                    </Text>

                    <Text style={Styles.titulo}>
                        ECLIPSE DE LUNA
                    </Text>

                    <Text style={Styles.texto}>
                        {`Cuando sucede un eclipse de luna, a las mujeres embarazadas se les coloca un listón o hilo rojo también algún objeto como un alfiler o monedas para que sus hijos nazcan sanos. Se cuenta que, si no se coloca el objeto o listón rojo, los hijos pueden nacer con alguna discapacidad, en particular, con labio leporino. A las personas que nacen con este defecto congénito se dice que “se los comió luna”.`}
                    </Text>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Cuento4;