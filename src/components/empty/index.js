import React from "react";
import { Text, StyleSheet } from 'react-native';
import { Center, Icon } from "native-base";
import { Font, Colors, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Empty = ({
    message,
}) => {
        
    return (
        <Center style={styles.card}>
            <Icon as={MaterialCommunityIcons} name={'clipboard-text-search-outline'} color={Colors.GRAY} size={RFValue(15)}/>
            <Text style={styles.txtMessage}>{message}</Text>
        </Center>
    )
}

export default Empty;

const styles = StyleSheet.create({
    card: {
        paddingTop: RFValue(200)
    },
    txtMessage: {
        ... Font.F13,
        ... Font.Medium,
        ... Font.GRAY_SOFT,
        ... StC.mt5
    },
});