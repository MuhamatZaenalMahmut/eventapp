import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Font, StC } from "@styles";
import { mailRegex } from "@constants";
import { BaseContainer, ButtonFlex, AppBar, FormInput } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import authUtils from '@utils/AuthUtils';
import * as yup from 'yup';

const SignIn = ({ navigation }) => {
    
    const [isPassword, setIsPassword]       = useState(false)
    const [loading, setLoading]             = useState(false)

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

    const handleSignIn = async (value) => {
       
        setLoading(true)
        await authUtils.login(value)

        setTimeout(() => {
            setLoading(false)
        }, 1000)        
    }

    return (      
        <BaseContainer loading={loading}>
            <AppBar title="SignIn" navigation={navigation}/>
            <ScrollView style={styles.content}>
                <Formik
                    validationSchema={dataValidationSchema}
                    isValidating={true}
                    // initialValues={{ email:'', password:''}}
                    initialValues={{ email:'zencode11@gmail.com', password:'Qwerty'}}
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
        paddingTop: RFValue(150)
    },
    labelSignIn:{
        ... Font.Regular,
        ... Font.F13,
        ... StC.mt20,
        textAlign:'center'
    }
})