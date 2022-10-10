import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { StC, Font, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { formatDate } from '@constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CardEvent({ item, onPress }) {
   
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{uri: item.cover}} style={styles.cover}/>
            <View style={{paddingLeft: RFValue(10), flex:1}}>
                <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
                <View style={[StC.flexR, {alignItems:'center'}]}>
                    <Icon as={MaterialCommunityIcons} name={'calendar'} color={Colors.GRAY} size={RFValue(4)} style={{marginRight: RFValue(7)}}/>
                    <Text style={styles.date}>{formatDate(item.date)}, {item.time}</Text>
                </View>
                <View style={[StC.flexR, StC.mt3, {alignItems:'center'}]}>
                    <Icon as={MaterialCommunityIcons} name={'map-marker'} color={Colors.GRAY} size={RFValue(4)} style={{marginRight: RFValue(7)}}/>
                    <Text style={styles.date}>{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardEvent;

const styles = ({
    card:{
        ... StC.flexR,
        marginBottom: RFValue(15),
        marginHorizontal: RFValue(15),
    },
    cover:{
        width: RFValue(90),
        height: RFValue(75),
        borderRadius: RFValue(10)
    },
    fab:{
        marginBottom: RFValue(60),
        backgroundColor: Colors.PRIMARY
    },
    title:{
        ... Font.F14,
        ... Font.Medium,
        ... Font.BLACK,
        ... StC.mb10
    },
    date:{
        ... Font.F12,
        ... Font.Light,
        ... Font.BLACK
    }
})
