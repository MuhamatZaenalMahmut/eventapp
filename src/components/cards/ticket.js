import React from 'react';
import { View, Text } from 'react-native';
import { Badge } from 'native-base';
import { StC, Font, Colors, Shadow } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { formatDate } from '@constants';
import QRCode from 'react-native-qrcode-svg';

function CardTicket({ item, onPress }) {
    let detail = JSON.parse(item.detail)

    return (
        <View onPress={onPress} style={styles.card}>
            <View style={[StC.flexR, StC.mb10]}>
                <Text style={[Font.value, {flex:1}]}>{item.createdat}</Text>
                <Badge colorScheme={item.status == 0 ? "success" : 'danger'}>{item.status == 0 ? 'Active' : 'Expired'}</Badge>
            </View>
            <Text style={styles.title}>{detail.name}</Text>
            <Text style={Font.label}>Place</Text>
            <Text style={Font.value}>{detail.location}</Text>
            <View style={[StC.flexR, StC.mt20]}>
                <View style={{flex:1}}>
                    <Text style={Font.label}>Date</Text>
                    <Text style={Font.value}>{formatDate(detail.date)}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={Font.label}>Time</Text>
                    <Text style={Font.value}>{detail.time} WIB</Text>
                </View>
            </View>
            <View style={styles.qrcode}>
                <QRCode
                    value={item.qrcode}
                    size={RFValue(150)}
                />
            </View>
        </View>
    )
}

export default CardTicket;

const styles = ({
    card:{
        ... Shadow.Normal,
        marginBottom: RFValue(15),
        marginLeft: RFValue(15),
        backgroundColor: Colors.WHITE,
        height: RFValue(430),
        width: RFValue(250),
        borderRadius: RFValue(20),
        padding: RFValue(15),
    },
    title:{
        ... Font.F14,
        ... Font.Medium,
        ... Font.BLACK,
        marginBottom: RFValue(25)
    },
    qrcode:{
        ... StC.mt40,
        alignItems: 'center',
    }
})
