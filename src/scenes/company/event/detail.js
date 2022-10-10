import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Fab, Icon } from 'native-base';
import { BaseContainer, AppBar, ButtonFab } from '@components';
import { StC, Colors, Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

function EventDetail({ event, navigation }) {
    const [isLoading, setIsLoading] = useState(false)

    let data = [
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        },
        {
            name: 'Music Jaseee',
            cover: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg',
            date: '2022-09-15',
            time: '20:20',
            location: 'Surabaya'
        }
    ]
    return (
        <BaseContainer>
            <AppBar title="Detail Event" navigation={navigation}/>
            
            
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { event } = state;
    return { event }
}
  
export default connect(mapStateToProps)(EventDetail);

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: RFValue(15)
    },
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
        ... Font.F13,
        ... Font.Medium,
        ... Font.BLACK
    }
})