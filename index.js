import {NativeModules, DeviceEventEmitter} from 'react-native';
const BluetoothSerial = NativeModules.BluetoothSerial;

/**
 * Listen for available events
 * @param  {String} eventName Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {Function} handler Event handler
 */
BluetoothSerial.on = (eventName, handler) => {
    DeviceEventEmitter.addListener(eventName, handler)
};

/**
 * Stop listening for event
 * @param  {String} eventName Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {Function} handler Event handler
 */
BluetoothSerial.removeListener = (eventName, handler) => {
    DeviceEventEmitter.removeListener(eventName, handler)
};

module.exports = BluetoothSerial;
