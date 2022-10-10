import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Fab, Icon } from 'native-base';
import { BaseContainer, CardEvent, PlaceholderEvent, ButtonFab } from '@components';
import { StC, Colors, Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Event({ event, navigation }) {
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
        navigation.navigate('EventForm')
    }

    return (
        <BaseContainer>
            <Text style={[Font.header, {marginHorizontal: RFValue(15)}]}>{'List Event'}</Text>
            {isLoading ? 
                <PlaceholderEvent/>
                : 
                <FlatList
                    data={data}
                    renderItem={(({ item, index }) => (
                        <CardEvent item={item} onPress={()=> getDetail()}/>
                    ))}
                />
            }
            <ButtonFab label="Add Event" onPress={()=> navigation.navigate('EventForm')}/>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { event } = state;
    return { event }
}
  
export default connect(mapStateToProps)(Event);