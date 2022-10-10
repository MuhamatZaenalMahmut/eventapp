import React, { useEffect } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors, StC } from "@styles";
import { Icons } from "@assets";
import { BaseContainer, ButtonFlex } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignIn } from '@actions';
import store from "@stores/store";
import QRCodeScanner from 'react-native-qrcode-scanner';
import ticketUtils from '@utils/TicketUtils';

const Scanner = ({ navigation }) => {
    
    const handlePress = (uri) => {
        navigation.navigate(uri);
    };

    const onBarCodeRead = async (e) => {
        let res = await ticketUtils.scanner(e.data)

        if(res == 200){
            alert('6789')
        }
    }


    return (      
        <BaseContainer>
            <QRCodeScanner
                onRead={onBarCodeRead}
                cameraStyle={{width:'100%', height:'100%'}}
            />
        </BaseContainer>  
    )
}

export default Scanner;