import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { StC, Font, Colors, Shadow } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { formatDate } from '@constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCode from 'react-native-qrcode-svg';

function CardTicket({ item, onPress }) {
   
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={Font.label}>Place</Text>
            <Text style={Font.value}>{item.location}</Text>
            <View style={[StC.flexR, StC.mt20]}>
                <View style={{flex:1}}>
                    <Text style={Font.label}>Date</Text>
                    <Text style={Font.value}>{formatDate(item.date)}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={Font.label}>Time</Text>
                    <Text style={Font.value}>{item.time} WIB</Text>
                </View>
            </View>
            <View style={styles.qrcode}>
                <QRCode
                    value="http://awesome.link.qr"
                    size={RFValue(150)}
                />
            </View>
        </TouchableOpacity>
    )
}

export default CardTicket;

const styles = ({
    card:{
        ... Shadow.Normal,
        marginBottom: RFValue(15),
        marginLeft: RFValue(15),
        backgroundColor: Colors.WHITE,
        height: RFValue(500),
        width: RFValue(250),
        borderRadius: RFValue(20),
        padding: RFValue(15),
    },
    title:{
        ... Font.F14,
        ... Font.Medium,
        ... Font.BLACK,
        marginBottom: RFValue(30)
    },
    qrcode:{
        ... StC.mt40,
        alignItems: 'center',
    }
})
