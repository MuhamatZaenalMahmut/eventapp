import { Alert, Dimensions, LayoutAnimation, Platform, ToastAndroid, Text } from 'react-native';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

export const currencyFloat = (number) => {
    let num = parseFloat(number)
    if(!isNaN(num)){
        if(num.toString().indexOf('.') != -1){
            return 'Rp ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        } else {
            var rupiah = '';
            var numrev = num.toString().split('').reverse().join('');
            for (var i = 0; i < numrev.length; i++) if (i % 3 == 0) rupiah += numrev.substr(i, 3) + '.';

            let ret = rupiah.split('', rupiah.length - 1).reverse().join('')

            if(ret < 0){
                return '- IDR ' + ret.replace('-', '')
            } else {
                return 'IDR ' + ret
            }
        }
    } else {
        return 0
    }
}

export const formatDate = (date, short) => {
    return moment(date).format('DD MMM YYYY')
}

export const onRotate = () => {
    const { width, height } = Dimensions.get('window')
    return height >= width
}

export const Notif = (title, message) => {
    if (message) {
        Alert.alert(title, message)
    }
}

export const ToastConnection = () => {
    Alert.alert('Perhatian', 'Tidak dapat memproses data, silahkan coba kembali')
}

export const AnimationLayout = () => {
    return LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}

export const showToast = async (msg) => {
    if (Platform.OS == 'ios') {
        Toast.show(`${msg}`, Toast.SHORT);
    } else {
        ToastAndroid.show(`${msg}`, ToastAndroid.SHORT)
    }
}

export const mailRegex = () => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
}

export const phoneRegex = () => {
    return /^08[1-9][0-9]{7,10}$/
}

export const generateQrcode = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}


export const required = (isRequired) => {
    return isRequired ? <Text style={Font.required}>*</Text> : null
}

export const arrEvent = (snapshot) => {
    const arr = [];
    snapshot.forEach((res) => {
        const { userID, name, description, date, time, image, location, price } = res.data();
        arr.push({
            key: res.id,
            userID,
            name,
            description,
            date,
            time,
            image,
            location,
            price
        });
    });

    return arr
}

export const arrTicket = (snapshot) => {
    const arr = [];
    snapshot.forEach((res) => {
        const { userID, companyID, qrcode, status, detail, createdat } = res.data();
        arr.push({
            key: res.id,
            userID,
            companyID,
            qrcode,
            status,
            detail,
            createdat,
        });
    });

    return arr
}