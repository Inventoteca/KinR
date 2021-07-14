# Kintachuwin App
App para la enseñanza de la lengua totonaca. Programada con React Native.  
Es resultado de la colaboración de Inventoteca y Colectivo Xanay  
`poner enlace a la página de Xanay`.

La app es compatible con Android.  

## Cómo instalar la app
Descarga desde este enlace  
https://github.com/Inventoteca/Kintachuwin/releases/download/v0.4.3/Kintachuwin_v0.4.3.apk  

Si accedes desde tu teléfono Android aparecerá la opción de instalar directamente. 
Aceptar advertencia de publicador desconocido.  

Si accedes desde una computadora. Copiar el archivo apk al teléfono.  

## Cómo ejecutar desde el código fuente
Preparar entorno siguiendo la documentación de React Native  
- Android Studio - Seguir las instrucciones de los paquetes que se deben instalar dentro de Android Studio
- JDK (8)
- Node v12
 
https://reactnative.dev/docs/getting-started  
https://reactnative.dev/docs/environment-setup  

Clonar repo

Instalar nvm. Antes fue necesario desinstalar (por completo) node.  
https://www.nubo.eu/Install-Multiple-Node-Versions-On-Windows/  
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows  
https://github.com/coreybutler/nvm-windows  
Ejecutar terminal como administrador al cambiar versión de node.  
No ejecutar como administrador al usar react-native.  

```
$ nvm list

  * 12.20.0 (Currently using 64-bit executable)
    10.23.0
```

Tema al que se quiere llegar  
https://reactnative.dev/docs/signed-apk-android  

Conectar cel con depuración USB activada  
```
adb devices
```
Aceptar permiso en el teléfono  
```
$ adb devices
List of devices attached
LMX430UCW8AIMFLJ5T      device
```
Se usan dos terminales en el directorio de la app.  
En la primera terminal ejecutar Metro (opcional)  
```
npx react-native start
```  
En la segunda terminal ejecutar la app  
```
npx react-native run-android
```  
Editar App.js, los cambios se reflejan en pocos segundos.  

## Crear APK
La documentación tiene instrucciones para generar un Android App Bundle y 
publicar en Google Play, sin embargo el archivo que se obtiene es un .aab  
https://reactnative.dev/docs/signed-apk-android  

Con estas instrucciones se puede generar un .apk  
https://dev.to/nitish173/how-to-generate-a-debug-apk-in-react-native-1gdg  
```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug
```
Al terminar, el archivo se encuentra en `yourProject/android/app/build/outputs/apk/debug/app-debug.apk`  

Aquí hay instrucciones parecidas a las de la documentación con explicaciones más extensas  
https://www.instamobile.io/android-development/generate-react-native-release-build-android/  

Solucionar error EPERM  
http://bitstopixels.blogspot.com/2017/04/react-native-windows-10-eperm-operation.html  
```
cd android
./gradlew clean
```

Clonar repo y correr proyecto  
Ejecutar `npm install`  
Opcional `react-native link` `cd ios && pod install`  
https://stackoverflow.com/questions/49410610/setup-a-cloned-react-native-project-created-via-react-native-init-command  

API de React.js  
https://reactjs.org/docs/react-component.html  
https://reactjs.org/docs/hooks-effect.html  
https://reactjs.org/docs/hooks-reference.html  

