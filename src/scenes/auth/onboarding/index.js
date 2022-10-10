import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Colors, StC } from "@styles";
import { Icons } from "@assets";
import { BaseContainer, ButtonFlex } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignIn } from '@actions';
import store from "@stores/store";

const OnBoarding = ({ navigation }) => {
    
    const handlePress = (uri) => {
        navigation.navigate(uri);
    };

    return (      
        <BaseContainer>
            <View style={styles.authCont}>
                <Image source={Icons.logo} style={styles.logo}/>
                <View style={[StC.flexR, {marginTop: RFValue(150)}]}>
                    <ButtonFlex
                        style={[StC.mT10, {flex:1}]}
                        title={'SignIn'} 
                        onPress={async () => handlePress("SignIn")}
                    />
                    <ButtonFlex
                        outline
                        style={[StC.mT10, {flex:1}]}
                        title={'SignUp'}
                        onPress={async () => await handlePress('SignUp')}
                    />
                </View>
            </View>
        </BaseContainer>  
    )
}

export default OnBoarding;

const styles = StyleSheet.create({
    authCont: {
        paddingHorizontal: RFValue(10),
        paddingTop: RFValue(100)
    },
    logo:{
        width: RFValue(80),
        height: RFValue(80),
    }
})
