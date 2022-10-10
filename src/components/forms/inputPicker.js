import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Font, StC, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import { required } from "@constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FormInputPicker = ({
    hide,
    label,
    value,
    isRequired,
    onPress,
    disabled,
    time
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={Font.label}>{label}{required(isRequired)}</Text> : null}
        <TouchableOpacity style={[styles.borderPicker, disabled && {backgroundColor: Colors.WHITE_DARK}]} onPress={disabled ? null : onPress} activeOpacity={0.9}>
            <Icon as={FontAwesome} name={time ? 'clock-o' : 'calendar'} size={4} ml="2" color="muted.400" />
            <Text style={styles.input}>{value}</Text>
        </TouchableOpacity>
    </MyView>
    )
}

export default FormInputPicker;

const styles = ({
    cardInput:{
        flex: 1,
        marginBottom: RFValue(10),
    },
    input:{
        ... Font.Regular,
        ... Font.F11,
        ... Font.BLACK,
        marginLeft: RFValue(10)
    },
    borderPicker:{
        ... StC.flexR,
        borderWidth: RFValue(1),
        borderRadius: RFValue(4),
        height: RFValue(37),
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(5),
        borderColor: '#D3D3D3',
        alignItems: 'center',
        backgroundColor:'#F6F5FA'
    }
})
