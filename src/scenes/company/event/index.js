import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import { BaseContainer, CardEvent, PlaceholderEvent, ButtonFab, Empty } from '@components';
import { Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import eventsUtils from '@utils/EventsUtils';

function Event({ users, events, navigation }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
        await eventsUtils.byUserId(users?.users?.key)

        setTimeout(() => {
            setLoading(false)
        }, 1000) 
    }

    const getDetail = (uri) => {
        // navigation.navigate('EventForm')
    }

    return (
        <BaseContainer>
            <Text style={[Font.header, {marginHorizontal: RFValue(15)}]}>{'List Event'}</Text>
            {loading ? 
                <PlaceholderEvent/>
                : 
                <FlatList
                    data={events?.events}
                    renderItem={(({ item, index }) => (
                        <CardEvent item={item} onPress={()=> getDetail()}/>
                    ))}
                    ListEmptyComponent={
                        <Empty message="Event not found"/>
                    }
                    refreshControl={
                        <RefreshControl onRefresh={()=> getData()}/>
                    }
                />
            }
            <ButtonFab label="Add Event" onPress={()=> navigation.navigate('EventForm')}/>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { users, events } = state;
    return { users, events }
}
  
export default connect(mapStateToProps)(Event);