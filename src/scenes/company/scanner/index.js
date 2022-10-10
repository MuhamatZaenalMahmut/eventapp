import React, { useEffect } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors, StC } from "@styles";
import { Icons } from "@assets";
import { BaseContainer, ButtonFlex } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignIn } from '@actions';
import store from "@stores/store";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Scanner = ({ navigation }) => {
    
    const handlePress = (uri) => {
        navigation.navigate(uri);
    };

    const onBarCodeRead = (e) => {
        // const {scanning} = this.state
        // if(scanResult && scanning){
        //     Vibration.vibrate(50 * 1)
        //     this.checkQR(scanResult.data)
        // }

        
        alert(e.data)
    }




    return (      
        <BaseContainer>
            {/* <View style={styles.authCont}> */}
            <QRCodeScanner
                onRead={onBarCodeRead}
                topContent={
                <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
                }
                bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
                }
            />

            {/* </View> */}
        </BaseContainer>  
    )
}

export default Scanner;

const styles = StyleSheet.create({
    authCont: {
        paddingHorizontal: RFValue(10),
        paddingTop: RFValue(100)
    },
    logo:{
        width: RFValue(80),
        height: RFValue(80),
    }
})
