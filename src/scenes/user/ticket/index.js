import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Fab, Icon } from 'native-base';
import { BaseContainer, CardTicket, PlaceholderEvent, ButtonFab } from '@components';
import { StC, Colors, Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Ticket({ event, navigation }) {
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

    const getDetail = (uri) => {
        navigation.navigate('TicketDetail')
    }

    return (
        <BaseContainer>
            <Text style={[Font.header, {marginHorizontal: RFValue(15)}]}>{'List Ticket'}</Text>
            {isLoading ? 
                <PlaceholderEvent/>
                : 
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={(({ item, index }) => (
                        <CardTicket item={item}/>
                    ))}
                />
            }
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { event } = state;
    return { event }
}
  
export default connect(mapStateToProps)(Ticket);