import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { StC, Font } from "@styles";
import { Icons } from "@assets";
import { BaseContainer, ButtonFlex } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';

const OnBoarding = ({ navigation }) => {
    
    const handlePress = (uri) => {
        navigation.navigate(uri);
    };

    return (      
        <BaseContainer>
            <View style={styles.authCont}>
                <View style={styles.text}>
                    <Image source={Icons.logo} style={styles.logo}/>
                    <Text style={Font.header}>eventApp</Text>
                    <Text style={Font.label}>Create an account with us & enjoy all the our exciting event</Text>
                </View>
                <View style={[StC.flexR, {marginTop: RFValue(80)}]}>
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
        width: RFValue(40),
        height: RFValue(40),
    },
    text:{
        marginTop: RFValue(60),
        marginHorizontal: RFValue(15)
    }
})
