//import { FlatList } from 'react-native-gesture-handler';
//import { ScrollView } from 'react-native-gesture-handler';

// Sonido ===========================================================================
import SoundPlayer from 'react-native-sound-player';

function playLocalSound(file) {
    var f = file.split(".")
    try {
        SoundPlayer.playSoundFile(f[0], f[1]);
    } catch (e) {
        console.log("cannot play the sound file", e)
    }
}

function stopSound() {
    SoundPlayer.stop();
}

//export default playLocalSound;
//export default kk;
export {playLocalSound, stopSound};

//para la extensión anterior (react-native-sound)
//import Sound from 'react-native-sound';
//Sound.setCategory('Playback', false);
/*
function playLocalSound(file) {
    var mySound = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Error al cargar: ' + error);
            return;
        }
        else {
            mySound.play((success) => {
                if (success) {
                    console.log('Reproducción exitosa');
                }
                else {
                    console.log('Problema al reproducir');
                }
            })
        }
    });
    //mySound.setVolume(0.9);
    //Sound.stop();
    mySound.release();
}
*/
