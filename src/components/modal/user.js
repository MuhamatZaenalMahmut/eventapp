import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Font, StC } from '@styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import { ButtonFlex } from "@components";
import RBSheet from "react-native-raw-bottom-sheet";
import moment from "moment";

const ModalUser = ({ 
    open, 
    tickets, 
    onPress,
}) => {
    let ticket = tickets.detail
    let detail  = ticket ? JSON.parse(ticket.detail) : ''
    
    return (
        <RBSheet
            ref={open}
            height={RFValue(240)}
            openDuration={250}
            customStyles={{
                container: {
                    ... StC.centerPage
                }
            }}
        >
            <View style={styles.modal}>
                <Text style={Font.title}>{detail.name}</Text>
                <Text style={Font.title}>{moment().format('MM DD YYY')}</Text>
                <ButtonFlex
                    title={'OK'} 
                    onPress={onPress}
                    form
                />
            </View>
        </RBSheet>
    )
}

const mapStateToProps = function (state) {
    const { tickets } = state;
    return { tickets }
}
  
export default connect(mapStateToProps)(ModalUser);



const styles = StyleSheet.create({
    modal:{
        ... StC.wh100,
        padding: RFValue(15),
    },
    cardItem:{
        ... StC.flexR,
        marginVertical: RFValue(15),
        alignItems:'center'
    },
    txtDuration:{
        ... Font.F1,
        ... Font.Medium,
        ... Font.PRIMARY_SOFT,
        flex: 1
    },
    txtDurationActive:{
        ... Font.F13,
        ... Font.SemiBold,
        ... Font.PRIMARY,
        flex: 1
    },
    txtCheckout:{
        ... Font.F10,
        ... Font.Regular,
        ... Font.PRIMARY_SOFT,
    },
    txtCheckoutActive:{
        ... Font.F11,
        ... Font.Medium,
        ... Font.PRIMARY,
    }
})