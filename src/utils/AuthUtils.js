
import { showToast } from "@constants";
import { SignIn } from '@actions';
import store from "@stores/store";
import firestore from '@react-native-firebase/firestore';

class AuthUtils {

    async register(params) {

        await firestore()
        .collection('users')
        .add(params)
        .then(() => {
            showToast('Create Account Success')
        });
    }

    async login(params) {

        const snapshot = await 
        firestore()
        .collection('users')
        .where('email', '==', params.email)
        .where('password', '==', params.password)
        .get()

        const arr = [];
        snapshot.forEach((res) => {
            const { name, email, type } = res.data();
            arr.push({
                key: res.id,
                name,
                email,
                type
            });
        });

        if(arr.length == 0){
            showToast('Account Not Found')
        } else {
            store.dispatch(SignIn(arr[0]))
        }
    }
}

const authUtils = new AuthUtils()

Object.freeze(authUtils)

export default authUtils