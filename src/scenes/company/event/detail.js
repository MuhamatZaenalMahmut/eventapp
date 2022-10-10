import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Fab, Icon, ScrollView } from 'native-base';
import { BaseContainer, AppBar, ButtonFlex } from '@components';
import { StC, Colors, Font} from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

function EventDetail({ event, navigation }) {
    const [isLoading, setIsLoading] = useState(false)

   
    return (
        <BaseContainer>
            <AppBar title="Detail Event" navigation={navigation}/>
            <ScrollView>
                <View style={styles.content}>
                    <Image source={{uri: 'https://media.goopps.com/upload/module/b_event_type/372x247_event-type-1581469983-2.jpeg'}} style={styles.cover}/>
                    <Text style={Font.header}>Music Jaxzx</Text>
                    <Text style={Font.title}>About</Text>
                    <Text style={Font.desc}>567890RTHJK,.VJKGHJKILOYUIOI</Text>
                </View>
            </ScrollView>
            <ButtonFlex
                title={'Get Ticket'} 
                onPress={()=> handleSubmit()}
            />
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