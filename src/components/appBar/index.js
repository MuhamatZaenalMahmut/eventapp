import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from "native-base";
import { StC, Font, Colors } from "@styles";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from 'react-native-vector-icons/Feather';

const AppBar = ({
    title,
    navigation,
    onBackCustom,
    full
}) => {
    return (
        <>
        <View style={[styles.header, full ? styles.full : {backgroundColor: Colors.BACKGROUND}]}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btnBack} onPress={onBackCustom == null ? () => navigation.goBack() : onBackCustom}>
                <Icon as={Feather} name={'chevron-left'} color={Colors.BLACK} size={RFValue(5)}/>
            </TouchableOpacity>
            <View style={[StC.centerPage, {flex:1}]}>
                <Text style={Font.title} numberOfLines={1}>{title}</Text>
            </View>
            <View style={styles.btnBack}/>
        </View>
        {full && <StatusBar translucent backgroundColor='transparent' />}
        </>
    )
}

export default AppBar;

const styles = ({
    header:{
        ... StC.flexR,
        ... StC.centerPage,
        height: RFValue(50),
        width: '100%',
    },
    btnBack:{
        ... StC.centerPage,
        width: RFValue(40)
    },
    full:{
        top: RFValue(35), 
        position: 'absolute',
        zIndex: 99999,
    }
})