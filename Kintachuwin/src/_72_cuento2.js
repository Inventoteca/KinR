/**
 * Cuento (Leyenda) 2
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

function Cuento2({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/fondo.png')} style={{ flex: 1, resizeMode: 'cover' }}>
                <ScrollView contentContainerStyle={{ padding: 24 }}>

                    <Imgn source={require('../assets/_70/cn2.jpg')} width={320} />
                    <Text style={Styles.titulo}>
                        <Text style={Styles.cursiva}>KIWI’ AKGOWA</Text>
                    </Text>
                    <Text style={Styles.autor}>
                        Por Arely López y Verónica Flores
                    </Text>

                    <Text style={Styles.tutunaku}>
                        {`Wa luwa makgasa´ chima latamanin xalak Tuxtla xchankgoy nchankat, anta´ kxkilhapan kachikin xkgalhikgoy laklankga xpumakchakan sakgsi, chi lakpuskatin xlak´kaxlakgo na tlawakgoy liwat, x´ankgoy xtak´kgoy tani kskukgoy lakchixcuwin, chima lakgskgatan xmakgtayakgoy xtsekan, chinchu manchixkuwin x´ankgoy kakgoy nchankat makgapits ka xliyankgoy ntani xwi mpuchitni´, chinchu makgapitsin ka xmakchakgoy ma xachuchut chankat. Chima latamanin kgamputiy kskukgoy makgapitsin kakuwani xlakgchankgo winchu nti katsisni´, xlamakgpitsinikgoy sakgsi ntukstakgoy. Chi makgtum wa nti kskumakgolh nkatsisni´, kgaxmatkgolh ntimakgpupuka la aktsu kgawas nti makgpupucha´ kasipini´, cha ni kuenta tlawanikgolh. lichali´ katsisni wa kgamput nti xlakgchankgo na skukgoy, xkgalhchiwinawilakgolh makgapitsin xwamakgolh xtalhkgomkan, xa aklan kgaxmatkgolh makgpupukancha, chatum nchixku xkgachi, pixlanka kgalhtastilh wata talakgatsuwilh tantum tutlan xlakgasi, litatsekglh x´akganin kiwi´, lakgapalakgoy, makgmapasikgolh k´lhkuyatkan, x´ukxilh putunkgoy xa tuntlan takgalhin, pokglh xkawan, litliwakg xmima un, makgmixinikgoka k´lhkuyatkan, ni lalh tu ukxilhkgolh, ka tsukupalakgolh tlawakgoy ntu xliskumakgolh. Akxni xkgakgalh paks wa xlichuwinamakgo, xlalixakgalhimakgo xa tukuta´ xpuwankgo. Akxni ntsiswampa watiya´ xlakgchampalakgoy na skukgoy nti na xkgaxmatkgonita´ xmakgpupukan, aya xtakgatsi itat katsisni kgaxmatpalakgolh makgpupupalakga lakgamakgat, tayakgolh makgmapasipalakgolh k´lhkuyatkan maxtukgolh xmachetekan, tasiyupa yuma ntuntlan xlakgasi aktanks tasiyunikgoka, la x´akgxakg chichi´ xkgali, lakgsalankgawan xlakgastop, lhkikit makawan, tsakat cuxmuwan, xkgalhi xpakga kstajan, chu mpakgtiy xpakgan xli kgos, pikwankgolh lakchixcuwin, tsalakgolh kuenta tlawakgolh mpi xway latamanin, chi xtsulut xmakgninan, ankgolh tamakgtayakgy kxchik´kan matsek´kgolh xlakgskgatankan. Akxni kaxkgakgalh, wa lakchixkuwin lak´kaxlakgolh xalala´ natalatlawakgo xakakgolh xmachetekan, chi yuma ntuntlan xlakgasi “Chukumbanti” limapakuwikgolh, akxni´ lantsiswalh, ankgolh nkgalhkgalhipaxtok´kgoy tani ankgalhin xtasiyu, mapasikgolh k´lhkuyatkan ntu xliskgomakgo, xalan tasuyupalach manchukumbanti, xmakgakglhanama, chi lakchixkuwin tsukukgolh makanikgoy, nitu xtlawaniy, chinchu chatum chixku skgalakatsilh tamakapulh xmachete klhkuyat wa nchu makgapitsin xtatasakgamakgolh, akxni laklhkuma mamachete litliwakg lhkgan makanilh manchukumbanti lakgtukunilh x´anima tunkgan lakgsputlh k´kapakgtutana, lichalikunchu, paxuwakgonchu ankgolh lakaputsokgoy ntani xtamakgwasnit, x´ukxilhputunkgo xa nin, akxni´ lakgapulhkgolh takgskgolh akgatum kiwi´ xlitalakglhtukunit mamachete, anta tanixya xtaxtumakgolh nchan, katsekgolh mpi chima kiwi´ xtapalay. Chinchu la uku talakgapas yuma nkiwi´ wa xliwankgan kumu likwa´ litayay nchan chuwa taxtuni xtankgaxekg kxchaxpana mankiwi´. Tawan mpi chima nchan wa xkgalhni manchukumbanti chinchu mantankgaxekg x´anima latamanin wa nti tiwakgoka.`}
                    </Text>

                    <Text style={Styles.titulo}>
                        EL ÁRBOL <Text style={Styles.cursiva}>AKGOWA</Text> (ÁRBOL HORMIGUERO)
                    </Text>

                    <Text style={Styles.texto}>
                        {`Hace muchos años los habitantes de Tuxtla cultivaban caña. A la orilla del pueblo tenían hornos grandes para producir panela, las mujeres se organizaban para hacer la comida y llevarla al lugar donde trabajaban los hombres. Los niños ayudaban a sus madres mientras que algunos hombres cortaban caña y otros la trasladaban hacia el trapiche (lugar donde se procesaba la caña). Utilizaban toros para extraer el jugo de la caña, otros se encargaban de cocinar su jugo en el horno. Las personas trabajaban por turnos, algunas les tocaba de día y otras de noche para que la producción fuera constante. Y entre ellos se repartían la panela para venderla.

En una ocasión, los hombres que se encontraban trabajando de noche, escucharon un grito parecido al de un niño entre las montañas, pero todos lo ignoraron. A la noche siguiente, algunos de los trabajadores se encontraban platicando y otros estaban tomando tepache (jugo de caña fermentado). Hasta que también escucharon aquel grito extraño, uno de ellos que estaba borracho arremedó el grito y de repente se acercó volando un  ser desconocido; desde lo alto ocultándose entre las ramas de los árboles, entonces prendieron sus antorchas para ver si era un animal. La noche estaba cubierta  de niebla, el viento era tan intenso que apagaba las antorchas, no lograron ver nada y siguieron con las actividades que les correspondía. Al día siguiente los habitantes hablaban de lo que había sucedido la noche anterior, todos daban sus opiniones y las sospechas que tenía cada uno. Al anochecer les tocaba trabajar al otro grupo de hombres, los que también habían escuchado el grito. Era aproximadamente media noche cuando volvieron a escuchar el grito desde muy lejos, todos se alarmaron, prendieron sus antorchas y sacaron sus machetes. Nuevamente apareció aquel ser extraño, su cabeza era como la de un perro, sus ojos cristalinos reflejaban el fuego de los hornos, tenía garras como de un ave, en la parte de su pecho tenía escamas, una cola con plumas y alas para volar. Los hombres se horrorizaron y corrieron; ya que, se dieron cuenta que comía humanos y que su orín mataba a las personas. Muchos se refugiaron en sus casas y escondieron a sus hijos. Al amanecer, todos los hombres se organizaron para enfrentarlo, prepararon sus machetes y al ser desconocido la llamaron “Chukumbanti”. Por la noche fueron a esperar al lugar de siempre, encendieron las llamas del horno para protegerse del frío y nuevamente, a la misma hora, apareció el “Chukumbanti” espantando a la gente. Los señores le lanzaban machetes, pero, no le causaba ningún efecto hasta que a uno de ellos se le ocurrió meter su machete a las llamas del horno, mientras que los demás se defendían. Aquel valiente hombre lanzó con fuerza el machete ardiendo contra el monstruo, clavándose en su corazón; en ese mismo instante desapareció entre la obscuridad.

A la mañana siguiente, los demás hombres emocionados salieron en busca del monstruo para asegurarse de su muerte. Se dirigieron al lugar donde vieron que había caído, al llegar se encontraron un árbol con el machete clavado; se percataron de que salían hormigas en el mismo orificio donde estaba el machete y se dieron  cuenta de que el árbol se transformaba en ese ser maligno.

Actualmente, este árbol se reconoce por dos características: en él se refugian muchas hormigas y le salen raíces despegadas del suelo. Se dice que las hormigas representan la sangre del “Chukumbanti” y las raíces representan las almas de sus víctimas.`}
                    </Text>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default Cuento2;