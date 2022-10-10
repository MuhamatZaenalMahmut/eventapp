import React from "react";
import { Text, View } from "react-native";
import { Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import { required } from "@constants";
import { Picker } from '@react-native-community/picker';

const FormPicker = ({
    hide,
    label,
    value,
    isRequired,
    children,
    setValue
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={[Font.label, {marginBottom: RFValue(isRequired ? 0 : 3)}]}>{label}{required(isRequired)}</Text> : null}
        <View style={styles.borderPicker}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => setValue(itemValue)}>
                    {children}
            </Picker>
        </View>
    </MyView>
    )
}

export default FormPicker;

const styles = ({
    cardInput:{
        flex: 1,
        marginBottom: RFValue(10),
    },
    label:{
        ... Font.Medium,
        ... Font.F12,
        ... Font.BLACK,
    },
    borderPicker:{
        borderWidth: RFValue(1),
        borderRadius: RFValue(4),
        height: RFValue(37),
        borderColor: '#D3D3D3',
        justifyContent: 'center',
    }
})
