import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Font, StC, Colors, Shadow } from '@styles';
import Entypo from 'react-native-vector-icons/Entypo';

const ButtonFab = ({
    hide,
    onPress,
    label,
    tab
}) => (
    !hide &&
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.cardFab, {bottom: tab ? RFValue(70) : RFValue(20)}]}>
            <Icon as={Entypo} name={'plus'} color={Colors.WHITE} size={RFValue(3)}/>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
)

export default ButtonFab;

const styles = ({
    cardFab:{
        ... StC.flexR,
        ... Shadow.NORMAL,
        position: 'absolute',
        right: RFValue(15),
        borderRadius: RFValue(20),
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(15),
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
    },
    label:{
        ... Font.F12,
        ... Font.Medium,
        ... Font.WHITE,
        marginLeft: RFValue(5),
    }
})