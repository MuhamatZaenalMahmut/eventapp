import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Icon } from "native-base";
import { Font, StC, Colors } from "@styles";
import { showToast } from "@constants";
import { BaseContainer, ButtonFlex, FormTextArea, AppBar, FormInput, FormInputCurrency, FormInputPicker } from '@components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import { connect } from "react-redux";
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import eventsUtils from '@utils/EventsUtils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EventForm = ({ navigation, users, events }) => {
    

    let detail = events.detail

    const [loading, setLoading]             = useState(false)
    const [description, setDescription]     = useState(detail ? detail.description : '')
    const [price, setPrice]                 = useState(detail ? detail.price : '')
    const [date, setDate]                   = useState(moment(detail ? detail.date : new Date()).format('YYYY-MM-DD'))
    const [time, setTime]                   = useState(detail ? detail.time : moment(new Date()).format('HH:mm'))
    const [type, setType]                   = useState('date')
    const [isPickerShow, setIsPickerShow]   = useState(false);
    const [photo, setPhoto]                 = useState(detail ? detail.image : '')
    const [photoUri, setPhotoUri]           = useState(detail ? detail.image : '')
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

        if(description && price && date && time && photoUri){
            value.description   = description
            value.price         = price
            value.date          = moment(date).format('YYYY-MM-DD')
            value.time          = time
            value.userID        = users.users.key
            value.image         = photoUri
    
            setLoading(true)

            if(detail){
                await eventsUtils.update(value, detail.key)
            } else {
                await eventsUtils.add(value)
            }
    
            setTimeout(() => {
                setLoading(false)
                navigation.goBack()
            }, 1000)
        } else {
            showToast('Field is required')
        }
    }

    const setModal = async () => {
        Alert.alert(
            "Upload Cover From",
            '',
            [
                {
                    text: 'Close',
                },
                {
                    text: 'Galery',
                    onPress: () => handlePickImage('galery')
                },
                {
                    text: 'Camera',
                    onPress: () => handlePickImage('camera')
                },
            ],
            { cancelable: false }
        )
    }

    const handlePickImage = (type) => {
        if(type == 'camera'){
            launchCamera(
                {
                    mediaType: 'photo',
                    quality: 0.5,
                },
                (response) => {
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    } else {

                        const res = response?.assets?.[0];

                        if (res) {
                            handleUpdatePhoto(res);
                        } else {
                            console.log('Fail to pick image!');
                        }
                    }
                },
            );
            
        } else {
            launchImageLibrary(
                {
                    mediaType: 'photo',
                    quality: 0.5,
                },
                (response) => {
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    } else {
                        const res = response?.assets?.[0];

                        if(res) {
                            handleUpdatePhoto(res);
                        } else {
                            console.log('Fail to pick image!');
                        }
                    }
                },
            );
        }
    };

    const handleUpdatePhoto = async (respons) => {

        let photo = {
            uri: respons.uri,
            type: 'image/jpg',
            name: respons.fileName,
        }

        setPhoto(photo)
        setPhotoUri(respons.uri)
    }


    const confirm = () => {
        Alert.alert(
            "Delete",
            'Are you sure you want to delete this event',
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    onPress: async () => remove()
                },
            ],
            { cancelable: false }
        )
    }

    const remove = async () => {
        setLoading(true)
        await eventsUtils.remove(detail.key, users.users.key)
        setTimeout(() => {
            setLoading(false)
            navigation.goBack()
        }, 1000)
    }

    return (      
        <BaseContainer loading={loading}>
            <AppBar title="Event Form" navigation={navigation}/>
            <Formik
                validationSchema={dataValidationSchema}
                isValidating={true}
                initialValues={{ name: detail ? detail.name : '', location: detail ? detail.location : ''}}
                onSubmit={(value) => handleSave(value)}
            >
                {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                    <>
                        <ScrollView style={styles.content}>
                            <Text style={Font.label}>Cover</Text>
                            <TouchableOpacity style={styles.cardImage} activeOpacity={0.5} onPress={()=> setModal()}>
                                {photo ?
                                    <Image source={{uri: photoUri}} style={styles.image}/>
                                : 
                                    <Icon as={<FontAwesome5 name={'camera'}/>} size={RFValue(9)} color={Colors.GRAY_SOFT}/>
                                }
                            </TouchableOpacity>
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
                            <View style={StC.mb80}/>
                        </ScrollView>
                        <View style={[StC.flexR, {alignItems:'center'}]}>
                            {detail ?
                                <TouchableOpacity style={styles.trash} onPress={()=> confirm()}>
                                    <Icon as={<FontAwesome5 name={'trash'}/>} size={RFValue(5)} color={Colors.DANGER}/>
                                </TouchableOpacity>
                            : null }
                            <ButtonFlex
                                title={detail ? 'Update Event' : 'Save Event'} 
                                onPress={()=> handleSubmit()}
                                style={{flex:1}}
                            />
                        </View>
                        
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
    },
    cardImage:{
        ... StC.centerPage,
        width: '100%',
        height: RFValue(150),
        borderWidth: RFValue(1),
        borderRadius: RFValue(5),
        marginBottom: RFValue(10),
        borderColor: Colors.GRAY_SOFT,
        backgroundColor: '#F6F5FA',
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: RFValue(5),
    },
    trash:{
        ... StC.centerPage,
        borderWidth: RFValue(1),
        width: RFValue(45),
        height: RFValue(45),
        marginBottom: RFValue(10),
        marginLeft: RFValue(15),
        borderRadius: RFValue(15),
        borderColor: Colors.DANGER
    }
})