import {NativeModules, DeviceEventEmitter} from 'react-native';
const BluetoothDiscovery = NativeModules.BluetoothDiscovery;

/**
 * Listen for available events
 * @param  {String} eventName Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {Function} handler Event handler
 */
BluetoothDiscovery.on = (eventName, handler) => {
    DeviceEventEmitter.addListener(eventName, handler)
};

/**
 * Stop listening for event
 * @param  {String} eventName Name of event one of connectionSuccess, connectionLost, data, rawData
 * @param  {Function} handler Event handler
 */
BluetoothDiscovery.removeListener = (eventName, handler) => {
    DeviceEventEmitter.removeListener(eventName, handler)
};

module.exports = BluetoothDiscovery;
