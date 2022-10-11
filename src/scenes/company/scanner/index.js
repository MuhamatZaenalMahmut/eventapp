import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { BaseContainer, ModalUser } from '@components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ticketUtils from '@utils/TicketUtils';
import { RNCamera } from 'react-native-camera';
import { Colors, Font, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import BarcodeMask from 'react-native-barcode-mask';


const Scanner = ({ navigation }) => {

    const refModalUser  = useRef();

    const onBarCodeRead = (e) => {

        alert(JSON.stringify(e))
        // let res = await ticketUtils.scanner(e.data)

        // if(res == 200){
        //     refModalUser.current.open()
        // }
    }

    return (      
        <BaseContainer>
            <RNCamera
                style={styles.preview}
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
                onBarCodeRead={onBarCodeRead}
            >
                <BarcodeMask
                    width={300} height={300} showAnimatedLine={true} outerMaskOpacity={0.3}
                />
            </RNCamera>

            {/* <QRCodeScanner
                onRead={onBarCodeRead}
                cameraStyle={{width:'100%', height:'100%'}}
            /> */}
            <ModalUser
                open={refModalUser}
                onPress={()=> refModalUser.current.close()}
            />
        </BaseContainer>  
    )
}

export default Scanner;

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: RFValue(15)
    },
    cover:{
        width: '100%',
        height: RFValue(200),
        borderRadius: RFValue(10)
    },
    fab:{
        marginBottom: RFValue(60),
        backgroundColor: Colors.PRIMARY
    },
    title:{
        ... Font.F13,
        ... Font.Medium,
        ... Font.BLACK
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

})