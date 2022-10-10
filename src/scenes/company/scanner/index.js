import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Colors, StC } from "@styles";
import { Icons } from "@assets";
import { BaseContainer, ButtonFlex } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignIn } from '@actions';
import store from "@stores/store";
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';


const Scanner = ({ navigation }) => {
    
    const handlePress = (uri) => {
        navigation.navigate(uri);
    };

    const onBarCodeRead = (scanResult) => {
        // const {scanning} = this.state
        // if(scanResult && scanning){
        //     Vibration.vibrate(50 * 1)
        //     this.checkQR(scanResult.data)
        // }

        alert('6789')
    }




    return (      
        <BaseContainer>
            <View style={styles.authCont}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onBarCodeRead={()=> onBarCodeRead}
                >
                    <BarcodeMask
                        width={300} height={300} showAnimatedLine={true} outerMaskOpacity={0.3}
                    />
                </RNCamera>

            </View>
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
