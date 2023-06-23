import React from 'react';
import WebView from 'react-native-webview';
import { StatusBar, Text, View } from 'react-native';

const ElectricPoint = () => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <View style={{ height: '100%', width: '100%' }}>
                <WebView source={{ uri: 'https://app.electricpoint.store/' }} />
            </View>
        </>
    )
}

export default ElectricPoint
