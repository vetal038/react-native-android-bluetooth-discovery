# react-native-android-bluetooth-discovery
Package for searching unpaired devices on android platform

## Android Installation
1. npm i --save git://github.com/vetal038/react-native-android-bluetooth-discovery.git
2. For android you need to put following code to `AndroidManifest.xml`
```
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```
3. Open up `android/app/src/main/java/[...]/MainActivity.java` or `MainApplication.java` for React Native >= 0.29
  - Add `import com.bluetooth.RCTBluetoothSerial.RCTBluetoothSerialPackage;` to the imports at the top of the file
  - Add `new RCTBluetoothSerialPackage()` to the list returned by the `getPackages()` method
4. Append the following lines to `android/settings.gradle`:
    ```
    include ':react-native-android-bluetooth-discovery'
    project(':react-native-android-bluetooth-discovery').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-android-bluetooth-discovery/android')
    ```
5. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
    ```
    compile project(':react-native-android-bluetooth-discovery')
    ```