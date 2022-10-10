import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Font, StC } from "@styles";
import { showToast } from "@constants";
import { BaseContainer, ButtonFlex, FormTextArea, AppBar, FormInput, FormInputCurrency, FormInputPicker } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import { connect } from "react-redux";
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import eventsUtils from '@utils/EventsUtils';

const EventForm = ({ navigation, users }) => {
    
    const [loading, setLoading]             = useState(false)
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
            .min(2, ({ min }) => `Name ${min} character`)
            .required('Name is required'),
        location: yup
            .string()
            .required('Location is required'),
    })

    const onChange = (value) => {
        type == 'date' ? setDate(moment(value).format('YYYY-MM-DD')) : setTime(moment(value).format("HH:mm"));
        setIsPickerShow(false);
    };

    const handleSave = async (value) => {

        if(description && price && date && time){
            value.description   = description
            value.price         = price
            value.date          = date
            value.time          = time
            value.userID        = users.users.key
    
            setLoading(true)
            await eventsUtils.add(value)
    
            setTimeout(() => {
                setLoading(false)
                navigation.goBack()
            }, 1000)
        } else {
            showToast('Field is required')
        }
    }

    return (      
        <BaseContainer loading={loading}>
            <AppBar title="Event Form" navigation={navigation}/>
            <Formik
                validationSchema={dataValidationSchema}
                isValidating={true}
                initialValues={{ name:'', location:''}}
                onSubmit={(value) => handleSave(value)}
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

const mapStateToProps = function (state) {
    const { users, events } = state;
    return { users, events }
}
  
export default connect(mapStateToProps)(EventForm);

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: RFValue(15),
        paddingTop: RFValue(10)
    },
    datePicker:{
        ... Font.Regular,
        ... Font.F13,
    }
})