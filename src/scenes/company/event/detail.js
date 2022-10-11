import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ScrollView } from 'native-base';
import { BaseContainer, AppBar, ButtonFlex } from '@components';
import { Colors, Font, StC } from "@styles";
import { generateQrcode, formatDate } from '@constants';
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import ticketUtils from '@utils/TicketUtils';
import moment from 'moment';

function EventDetail({ users, events, navigation }) {
    const [loading, setLoading] = useState(false)

    let event = events.detail

    const handleGet = async () => {
        let temp = {
            userID: users.users.key,
            companyID: event.userID,
            qrcode: generateQrcode(),
            status: 0,
            createdat: moment().format('YYYY-MM-DD HH:mm'),
            detail: JSON.stringify(event)
        }

        setLoading(true)
        await ticketUtils.add(temp)

        setTimeout(() => {
            setLoading(false)
            navigation.goBack()
        }, 1000)
    }

    return (
        <BaseContainer loading={loading}>
            <AppBar title="Detail Event" navigation={navigation}/>
            <ScrollView>
                <View style={styles.content}>
                    <Image source={{uri: event.image}} style={styles.cover}/>
                    <Text style={Font.header}>{event.name}</Text>
                    <Text style={Font.title}>About</Text>
                    <Text style={Font.desc}>{event.description}</Text>
                    <Text style={[Font.label, StC.mt20]}>Place</Text>
                    <Text style={Font.value}>{event.location}</Text>
                    <View style={[StC.flexR, StC.mt20]}>
                        <View style={{flex:1}}>
                            <Text style={Font.label}>Date</Text>
                            <Text style={Font.value}>{formatDate(event.date)}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={Font.label}>Time</Text>
                            <Text style={Font.value}>{event.time} WIB</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ButtonFlex
                title={'Get Ticket'} 
                onPress={()=> handleGet()}
            />
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { users, events } = state;
    return { users, events }
}
  
export default connect(mapStateToProps)(EventDetail);

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: RFValue(15)
    },
    cover:{
        width: '100%',
        height: RFValue(200),
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