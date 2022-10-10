import React, { Fragment } from "react";
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from "@styles";

const BaseContainer = ({
    children, 
}) => {
        
    return (
        <Fragment>
            <SafeAreaView style={styles.bottomSafeArea}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.BACKGROUND} />
                {children}
            </SafeAreaView>
        </Fragment>
    )
}

export default BaseContainer;


const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0, 
        backgroundColor: Colors.BACKGROUND
    }, 
    bottomSafeArea: {
        flex:1,
        backgroundColor: Colors.BACKGROUND
    }
});