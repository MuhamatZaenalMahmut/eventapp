import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Icon } from 'native-base';
import { BaseContainer } from '@components';
import { StC, Font, Colors } from "@styles";
import { connect } from "react-redux";
import { menu } from "./menu.js";
import { RFValue } from 'react-native-responsive-fontsize';
import { SignOut } from '@actions';
import store from "@stores/store";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Profile({ users }) {

    const getDetail = async (menu) => {
        if(menu == 'logout'){
            Alert.alert(
                "Logout",
                'Are you sure you want to exit the application',
                [
                    {
                        text: 'No',
                    },
                    {
                        text: 'Yes',
                        onPress: () => store.dispatch(SignOut())
                    },
                ],
                { cancelable: false }
            )
        } else {
            alert('Coming Soon')
        }
    }
    
    let arr = menu
    if(users.users?.type == 'company'){
        arr = menu.filter(x => !x.isUser)
    }

    return (
        <BaseContainer>
            <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
            <View style={styles.header}>
                <Icon as={MaterialCommunityIcons} name={'account-circle'} color={Colors.WHITE} size={RFValue(10)} style={{marginRight: RFValue(10)}}/>
                <View>
                    <Text style={styles.name}>{users.users?.name}</Text>
                    <Text style={styles.email}>{users.users?.email}</Text>
                </View>
                
            </View>
            <FlatList
                data={arr}
                renderItem={(({ item }) => (
                    <TouchableOpacity onPress={()=> getDetail(item.menu)} style={styles.card}>
                        <Icon as={item.type} name={item.icon} color={Colors.GRAY} size={RFValue(5)} style={{width: RFValue(30)}}/>
                        <Text style={Font.label}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            />
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { users } = state;
    return { users }
}
  
export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
    header:{
        ... StC.flexR,
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(20),
        backgroundColor: Colors.BLACK,
        alignItems: 'center',
    },
    name:{
        ... Font.WHITE,
        ... Font.F14,
        ... Font.Medium
    },
    email:{
        ... Font.WHITE,
        ... Font.F12,
        ... Font.Light
    },
    card:{
        ... StC.flexR,
        height: RFValue(50),
        marginHorizontal: RFValue(15),
        alignItems: 'center',
    },
})