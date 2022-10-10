import React from "react";
import { Text, View } from "react-native";
import { Input, Icon } from "native-base";
import { Font, StC, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FormInput = ({
    hide,
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType,
    isReadOnly,
    isError,
    errorMessage,
    password,
    secureTextEntry,
    setShow
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={Font.label}>{label}</Text> : null}
        <View style={[styles.borderPicker, {borderColor: isError ? Colors.DANGER : '#E1E1E1'}]}>
            <Input 
                variant="unstyled"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={Font.value}
                isReadOnly={isReadOnly}
                keyboardType={keyboardType}
                isInvalid={isError}
                secureTextEntry={secureTextEntry}
                size="xs"
                InputRightElement={password && <Icon as={<MaterialCommunityIcons name={secureTextEntry ? "eye" : "eye-off"}/>} size={RFValue(5)} color={Colors.GRAY} onPress={setShow}/>}
            />
        </View>
        {isError ? <Text style={Font.errorText}>{errorMessage}</Text> : null}
    </MyView>
    )
}

export default FormInput;

const styles = ({
    cardInput:{
        ... StC.mb15,
        flex: 1,
    },
    borderPicker:{
        ... StC.flexR,
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        height: RFValue(45),
        paddingVertical: RFValue(10),
        paddingRight: RFValue(10),
        alignItems: 'center',
        backgroundColor: '#F6F5FA',
    },
})
