import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Font, StC } from "@styles";
import { mailRegex } from "@constants";
import { BaseContainer, ButtonFlex, FormInputSwitch, AppBar, FormInput } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import authUtils from '@utils/AuthUtils';
import * as yup from 'yup';

const SignUp = ({ navigation }) => {
    
    const [isSwitch, setIsSwitch]           = useState(false)
    const [isPassword, setIsPassword]       = useState(true)
    const [isRePassword, setIsRePassword]   = useState(true)
    const [loading, setLoading]             = useState(false)

    const dataValidationSchema = yup.object().shape({
        name: yup
            .string()
            .min(3, ({ min }) => `Name ${min} character`)
            .required('Name is required'),
        email: yup
            .string()
            .matches(mailRegex(), 'Email address invalid')
            .required('Email address is required'),
        password: yup
            .string()
            .min(6, ({ min }) => `Password minimal ${min} character`)
            .required('Password is required'),
        repassword: yup
            .string()
            .min(6, ({ min }) => `Password confirmation minimal ${min} character`)
            .required('Password confirmation is required')
            .oneOf([yup.ref('password')], 'Password not match'),
    })

    const actionNavigation = (uri) => {
        navigation.navigate(uri)
    }

    const handleSignUp = async (value) => {
        value.type  = isSwitch ? 'company' : 'user',

        setLoading(true)
        let res = await authUtils.register(value)

        setTimeout(() => {
            setLoading(false)
            res == 400 ? null : navigation.navigate('SignIn')
        }, 1000)        
    }

    return (      
        <BaseContainer loading={loading}>
            <AppBar title="SignUp Form" navigation={navigation}/>
            <ScrollView style={styles.content}>
                <FormInputSwitch label={['User', 'Event Organizer']} isSwitch={isSwitch} onPress={()=> {setIsSwitch(!isSwitch)}} style={[StC.mb20]}/>
                <Formik
                    validationSchema={dataValidationSchema}
                    isValidating={true}
                    initialValues={{ name:'', email:'', password:'', repassword:''}}
                    onSubmit={(value) => handleSignUp(value)}
                >
                    {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                        <>
                            <FormInput
                                label={'Name'}
                                placeholder={'Name'}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                isError={errors.name && touched.name}
                                errorMessage={errors.name}
                            />
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
                            <FormInput
                                label={'Password Confirmation'}
                                placeholder={'Password Confirmation'}
                                value={values.repassword}
                                onChangeText={handleChange('repassword')}
                                onBlur={handleBlur('repassword')}
                                isError={errors.repassword && touched.repassword}
                                errorMessage={errors.repassword}
                                password
                                setShow={()=> setIsRePassword(!isRePassword)}
                                secureTextEntry={isRePassword}
                            />
                            <ButtonFlex
                                title={'Create Account'} 
                                onPress={()=> handleSubmit()}
                                form
                            />
                            <Text style={styles.labelSignIn}>Have an account <Text style={[Font.Medium, Font.PRIMARY]} onPress={actionNavigation.bind(this, 'SignIn')}>SignIn</Text></Text>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </BaseContainer>  
    )
}

export default SignUp;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: RFValue(15),
        paddingTop: RFValue(20)
    },
    labelSignIn:{
        ... Font.Regular,
        ... Font.F13,
        ... StC.mt20,
        textAlign:'center'
    }
})