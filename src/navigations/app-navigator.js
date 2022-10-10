import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { Icon } from "native-base";
import { Colors, Font } from "@styles";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { Ticket, Profile, Home, Event, EventForm, Scanner, EventDetail, TicketDetail } from "@scenes";
import Octicons from 'react-native-vector-icons/Octicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UsersTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    minHeight: 64,
                    borderTopWidth: 0,
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: Colors.WHITE,
                },
                tabBarLabel: ({ focused }) => {
                    let title;

                    switch (route.name) {
                        case "Home":
                            title = 'Home';
                            break;
                        case "Ticket":
                            title = 'Ticket';
                            break;
                        case "Profile":
                            title = 'Profile';
                            break;  
                    }

                    return <Text style={[Font.F10, Font.Medium, focused ? Font.PRIMARY : Font.GRAY]}>{title}</Text>;
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = 'home';
                            break;
                        case "Ticket":
                            iconName = 'bookmark';
                            break;
                        case "Profile":
                            iconName = 'person';
                            break;
                    }

                    return <Icon as={Octicons} name={iconName} color={focused ? Colors.PRIMARY : Colors.GRAY} size={RFValue(5)}/>;
            },
        })}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="Ticket" component={Ticket} options={{headerShown: false}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
};

const CompanyTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Event"
            backBehavior="initialRoute"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    minHeight: 64,
                    borderTopWidth: 0,
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: Colors.WHITE,
                },
                tabBarLabel: ({ focused }) => {
                    let title;

                    switch (route.name) {
                        case "Event":
                            title = 'Event';
                            break;
                        case "Scanner":
                            title = 'Scanner';
                            break;
                        case "Profile":
                            title = 'Profile';
                            break;  
                    }

                    return <Text style={[Font.F12, Font.Medium, focused ? Font.PRIMARY : Font.GRAY]}>{title}</Text>;
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case "Event":
                            iconName = 'organization';
                            break;
                        case "Scanner":
                            iconName = 'screen-full';
                            break;
                        case "Profile":
                            iconName = 'person';
                            break;
                    }

                    return <Icon as={Octicons} name={iconName} color={focused ? Colors.PRIMARY : Colors.GRAY} size={RFValue(5)}/>;
            },
        })}>
            <Tab.Screen name="Event" component={Event} options={{headerShown: false}}/>
            <Tab.Screen name="Scanner" component={Scanner} options={{headerShown: false}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
};

const AppNavigator = ({ auth }) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="UsersTabs" component={UsersTabs} options={{headerShown: false}}/>
            {/* <Stack.Screen name="CompanyTabs" component={CompanyTabs} options={{headerShown: false}}/> */}
            <Stack.Screen name="EventForm" component={EventForm} options={{headerShown: false}}/>
            <Stack.Screen name="EventDetail" component={EventDetail} options={{headerShown: false}}/>
            <Stack.Screen name="TicketDetail" component={TicketDetail} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>

        </Stack.Navigator>
    );
};

const mapStateToProps = function (state) {
    const { auth } = state;
    return { auth }
}
  
export default connect(mapStateToProps)(AppNavigator);
