import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Font, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonFlex = ({
    disabled,
    onPress,
    style,
    title,
    hide,
    icon,
    secondary,
    form,
}) => {
    return (
        !hide &&
            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={disabled ? null : onPress} 
                style={[styles.btn, style, secondary && {backgroundColor: Colors.WHITE}, form && {marginHorizontal: RFValue(0)}]}
            >
                <Text style={[styles.label, secondary && Font.BLACK]}>{title}</Text>
            </TouchableOpacity>
    )
}

export default ButtonFlex

const styles = StyleSheet.create({
    btn:{
        ... StC.centerPage,
        marginHorizontal: RFValue(15),
        borderRadius: RFValue(25),
        marginVertical: RFValue(10),
        height: RFValue(45),
        backgroundColor: Colors.PRIMARY,
        marginBottom: RFValue(20),
    },
    label:{
        ... Font.WHITE,
        ... Font.F14,
        ... Font.Medium
    },
});
