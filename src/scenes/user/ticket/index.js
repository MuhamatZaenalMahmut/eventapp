import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import { BaseContainer, CardTicket, PlaceholderTicket, Empty } from '@components';
import { Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import ticketUtils from '@utils/TicketUtils';

function Ticket({ users, tickets, navigation }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
        await ticketUtils.byUserId(users?.users?.key)

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }


    return (
        <BaseContainer>
            <Text style={[Font.header, {marginHorizontal: RFValue(15)}]}>{'List Ticket'}</Text>
            {loading ? 
                <PlaceholderTicket/>
                :
                tickets?.tickets?.length == 0 ? <Empty message="Ticket not found"/> :
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={tickets?.tickets}
                    renderItem={(({ item, index }) => (
                        <CardTicket item={item}/>
                    ))}
                    refreshControl={
                        <RefreshControl onRefresh={()=> getData()}/>
                    }
                />
            }
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { users, tickets } = state;
    return { users, tickets }
}
  
export default connect(mapStateToProps)(Ticket);