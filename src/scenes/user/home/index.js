import React, { useEffect, useState } from 'react';
import { RefreshControl, FlatList, Text } from 'react-native';
import { BaseContainer, CardEvent, PlaceholderEvent, Empty } from '@components';
import { Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import eventsUtils from '@utils/EventsUtils';

function Home({ events, navigation }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
        await eventsUtils.all()

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const getDetail = async (item) => {

        await eventsUtils.detail(item)
        navigation.navigate('EventDetail')
    }

    return (
        <BaseContainer>
            <Text style={[Font.header, {marginHorizontal: RFValue(15)}]}>{'List Event'}</Text>
            {loading ? 
                <PlaceholderEvent/>
                : 
                <FlatList
                    data={events?.events}
                    renderItem={(({ item }) => (
                        <CardEvent item={item} onPress={()=> getDetail(item)}/>
                    ))}
                    ListEmptyComponent={
                        <Empty message="Event not found"/>
                    }
                    refreshControl={
                        <RefreshControl onRefresh={()=> getData()}/>
                    }
                />
            }
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { events } = state;
    return { events }
}
  
export default connect(mapStateToProps)(Home);