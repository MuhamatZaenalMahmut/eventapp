import React from "react";
import { Text } from "react-native";
import { TextArea } from "native-base";
import { Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import { required } from "@constants";

const FormTextArea = ({
    hide,
    label,
    value,
    onChangeText,
    placeholder,
    isRequired,
    isError,
    errorMessage
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={Font.label}>{label}{required(isRequired)}</Text> : null}
        <TextArea 
            value={value}
            placeholder={placeholder}
            onChange={e => onChangeText(e.currentTarget.value)}
            onChangeText={text => onChangeText(text)}
            style={[Font.value, {backgroundColor: '#F6F5FA'}]}
        />
        {isError ? <Text style={Font.errorText}>{errorMessage}</Text> : null}
    </MyView>
    )
}

export default FormTextArea;

const styles = ({
    cardInput:{
        flex: 1,
        marginBottom: RFValue(10),
    },
})
