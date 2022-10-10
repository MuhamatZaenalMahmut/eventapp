import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Font, StC } from "@styles";
import { mailRegex, generateUserId } from "@constants";
import { BaseContainer, ButtonFlex, FormTextArea, AppBar, FormInput, FormInputCurrency, FormInputPicker } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import authUtils from '@utils/AuthUtils';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const EventForm = ({ navigation }) => {
    
    const [isSwitch, setIsSwitch]           = useState(false)
    const [description, setDescription]     = useState('')
    const [price, setPrice]                 = useState('')
    const [date, setDate]                   = useState('')
    const [time, setTime]                   = useState('')
    const [type, setType]                   = useState('date')
    const [isPickerShow, setIsPickerShow]   = useState(false);
    const defaultDate = new Date()

    const dataValidationSchema = yup.object().shape({
        name: yup
            .string()
            .min(5, ({ min }) => `Name ${min} character`)
            .required('Name is required'),
        location: yup
            .string()
            .required('Location is required'),
    })

    const actionNavigation = (uri) => {
        navigation.navigate(uri)
    }

    const handleSignIn = async (value) => {
        value.type  = isSwitch ? 'company' : 'user',
        value.key   = generateUserId()

        await authUtils.signin(value)
    }

    const onChange = (value) => {
        type == 'date' ? setDate(moment(value)) : setTime(moment(value).format("HH:mm"));
        setIsPickerShow(false);
    };

    return (      
        <BaseContainer>
            <AppBar title="Event Form" navigation={navigation}/>
            
            <Formik
                validationSchema={dataValidationSchema}
                isValidating={true}
                initialValues={{ name:'', location:''}}
                onSubmit={(value) => handleSignIn(value)}
            >
                {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                    <>
                        <ScrollView style={styles.content}>
                            <FormInput
                                label={'Name'}
                                placeholder={'Name'}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                isError={errors.name && touched.name}
                                errorMessage={errors.name}
                            />
                            <FormTextArea
                                label="Keterangan"
                                placeholder="Keterangan"
                                onChangeText={(val)=> setDescription(val)}
                                value={description}
                            />
                            <View style={[StC.flexR, StC.mT10]}>
                                <FormInputPicker
                                    label={'Event Date'}
                                    placeholder={'Event Date'}
                                    value={date}
                                    onPress={()=> {setIsPickerShow(true), setType('date')}}
                                    required
                                    disabledIcon
                                />
                                <View style={{marginHorizontal: RFValue(5)}}/>
                                <FormInputPicker
                                    label={'Event Time'}
                                    placeholder={'Event Time'}
                                    value={time}
                                    onPress={()=> {setIsPickerShow(true), setType('time')}}
                                    required
                                    disabledIcon
                                    time
                                />
                            </View>
                            <FormInput
                                label={'Location'}
                                placeholder={'Location'}
                                value={values.location}
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                isError={errors.location && touched.location}
                                errorMessage={errors.location}
                            />
                            <FormInputCurrency
                                label="Price Ticket"
                                placeholder={'0'}
                                value={price}
                                prefix={'Rp '}
                                onChangeText={(val) => setPrice(val)}
                                keyboardType={'number-pad'}
                                required
                                precision={0}
                            />
                        </ScrollView>
                        <ButtonFlex
                            title={'Save Event'} 
                            onPress={()=> handleSubmit()}
                        />
                    </>
                )}
            </Formik>
            {isPickerShow && (
                <DateTimePicker
                    value={defaultDate}
                    mode={type}
                    display={'default'}
                    is24Hour={true}
                    onChange={(event, selectedDate) => onChange(selectedDate)}
                    style={styles.datePicker}
                />
            )}
        </BaseContainer>  
    )
}

export default EventForm;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: RFValue(15),
        paddingTop: RFValue(10)
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