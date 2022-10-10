import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import RootNavigator from "@navigations";
import store from "@stores/store";
import SplashScreen from 'react-native-splash-screen';
console.disableYellowBox = true;

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NativeBaseProvider>
            <StoreProvider store={store}>
                <RootNavigator/>
            </StoreProvider>
        </NativeBaseProvider>
    );
};

export default App;