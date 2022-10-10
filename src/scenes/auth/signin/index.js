import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Colors, Font, StC } from "@styles";
import { mailRegex } from "@constants";
import { BaseContainer, ButtonFlex, FormInputSwitch, AppBar, FormInput } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import store from "@stores/store";
// import authUtils from '@utils/AuthUtils';
import * as yup from 'yup';

const SignIn = ({ navigation }) => {
    
    const [isPassword, setIsPassword]       = useState(false)

    const dataValidationSchema = yup.object().shape({
        email: yup
            .string()
            .matches(mailRegex(), 'Email address invalid')
            .required('Email address is required'),
        password: yup
            .string()
            .min(6, ({ min }) => `Password minimal ${min} character`)
            .required('Password is required'),
    })

    const actionNavigation = (uri) => {
        navigation.navigate(uri)
    }

    return (      
        <BaseContainer>
            <AppBar title="SignIn" navigation={navigation}/>
            <ScrollView style={styles.content}>
                <Formik
                    validationSchema={dataValidationSchema}
                    isValidating={true}
                    initialValues={{ name:'', email:'', password:'', repassword:''}}
                    onSubmit={(value) => handleSignIn(value)}
                >
                    {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                        <>
                            <FormInput
                                label={'Email'}
                                placeholder={'Email'}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                isError={errors.email && touched.email}
                                errorMessage={errors.email}
                            />
                            <FormInput
                                label={'Password'}
                                placeholder={'Password'}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                isError={errors.password && touched.password}
                                errorMessage={errors.password}
                                password
                                setShow={()=> setIsPassword(!isPassword)}
                                secureTextEntry={isPassword}
                            />
                            <ButtonFlex
                                title={'SignIn'} 
                                onPress={()=> handleSubmit()}
                                form
                            />
                            <Text style={styles.labelSignIn}>Don't have an account <Text style={[Font.Medium, Font.PRIMARY]} onPress={actionNavigation.bind(this, 'SignUp')}>SignUp</Text></Text>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </BaseContainer>  
    )
}

export default SignIn;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: RFValue(15),
        paddingTop: RFValue(20)
    },
    logo:{
        width: RFValue(80),
        height: RFValue(80),
    },
    labelSignIn:{
        ... Font.Regular,
        ... Font.F13,
        ... StC.mt20,
        textAlign:'center'
    }
})