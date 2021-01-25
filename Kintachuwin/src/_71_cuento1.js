import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  //Button,
  Image,
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

//<Boton title="X" /*onPress={() => navigation.navigate('Gramatica')}*/ />
function Cuentos({ navigation }) {
    return (
        <ScrollView>
        <View style={{
            flex:1, 
            alignItems:'stretch', 
            justifyContent:'flex-start', 
            backgroundColor:'white', 
            padding:24
        }}>
            <Imgn source={require('../assets/_70/cn1.jpg')} width={340} />

            <Text style={{fontSize:20, fontFamily:'OpenSans-Bold'}}>
                <Text style={{fontStyle:'italic', fontWeight:'normal'}}>CHICHINI’ CHU MPAPA’ </Text>
                (EL SOL Y EL LUNA)
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Light'}}>
                Por Arely López y Verónica Flores
            </Text>

            <Text style={{fontSize:16, fontFamily:'OpenSans-Italic', marginTop:24, marginBottom:24}}>
{`Wa lu makgasa´ akxni´ la ninatu xanan´chichini´chu mpapa, tantum sluluk luwa xlakgati xan  tsitsiwan kakgtum chiwix anta xtatakgs kxa tachanan axcut. Wa´yuma xmalana tachanan makgtakgslh  mpi wa´yuma´sluluk xlakgalhima ntachanan, mapanuputulh man chiwix akxni´xamalh makgkatsilh pi tsits, nilah mapanulh kumu luwa tsing matasaninankgolh amakgapitsinin lakchixcuwin nima ntlakg lakgtliwakgan kampichi xmakgtayakgolh cha nilalh matsiwikgolh, mihl tantum spun litalakgapas “Tantsulut” kgawas xtapalanit, tiyalh man chiwix ni tuwa´ tsukulh makgolog  “skulu chiwix, skulu chiw” kilhwantilha alh lilakgapulh tani xtatakgs rey.

Chi yuma rey malakgpakglhinalh manchiwix, akxni´ talakgpakglh takgska akgtumnchiwix tu xpulakgtanuma skululuwa´, luwa stlan, slipwa´, makgskgoy. Chima xlakgtsuman rey tsukukgolh la lichipakgo, chatum xla´ xtlawaputun, wayuma xa skgata´ ntsumat nikgatsiy ntani na liwili kilhtanulh manchiwix kgotwalh. Alh kilh tamakú tsukulh mpastak chaxlhi kskgata´ kgawas. Staklhi tama´ nkgawas akxni´skgatakú xwanit tsekg tsukulh makgskgala´ chatum kgawas ntixkgalhtawakgama´  na an li chichini´  chi yuma kgawasa chtalakgatsuku nchiwix pakgs katsilh ntu xmasiyunikgan nti xamputun li chichini´.

Alhi nkilhtamakú, makgsanikga lhkuyat ntu xmaklakaskilh nti na an li chichini´. Chi yuma nkkgawas nti xkgalhtawakganit likga xpáxuwama luwa xlakgpuwaninita´ na an li chichini´ alh ntasani chatunu chatunu nti xlakgapaskgoy kumu kgatsita´ nti xtalaliyankgoy akxi anit chiyuma nkgawas xtalakgatsuku chiwiw man xnana nkitasanilh lakgapala, palakga analh lhkgan alh maklhkuyat tachaxlh nkgatalhman wa staku tsukukgolh li talakgoy lkuyat kgampichi likgwa´ xmaskgolh snun lalh mankgawas tsukgulh staja xkgalhni chima xkgalhni tu tamach nkatiyatni lakgtsupin wa, pin wankgolh xa lakgchichokg tu lay kTuxtla chi mankgawas xtamalakgatsuk chiwix tsukulh tapa´ chichini´wa, akxni chilh mankgawasa nti xkgalhtawakganit sitsilh nitlan tlawalh na lhkgan alhi ntani xwi lkuyat na tachaxlh nkatalhman tapalalh cha kumu kiya ka xa lkgakga xwi ka papa´ wa xlanchu.`}
            </Text>

        </View>
        </ScrollView>
    );
}

export default Cuentos;