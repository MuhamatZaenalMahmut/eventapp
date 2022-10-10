import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";

function PlaceholderTicket() {

    return (
        <View style={styles.placeholder}>
            {[0, 1, 2].map((item, index) => (
                <View>
                    <ShimmerPlaceHolder
                        key={index}
                        LinearGradient={LinearGradient}
                        style={{
                            borderRadius: RFValue(15),
                            width: RFValue(250),
                            height: RFValue(430),
                            marginRight: RFValue(15),
                        }}
                    />
                </View>
            ))}
        </View>
    )
}

export default PlaceholderTicket;


const styles = StyleSheet.create({
    placeholder:{
        ... StC.flexR,
        marginBottom: RFValue(5), 
        paddingHorizontal: RFValue(15)
    },
})
