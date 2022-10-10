
import { now_playing, popular, top_rated, upcoming, detail } from "@constants/apiMovies";
import { showToast } from "@constants";
import { Movies_now_playing, Movies_popular, Movies_top_rated, Movies_upcoming, Movies_detail } from '@actions';
import store from "@stores/store";
import AsyncStorage from "@react-native-community/async-storage";

class AuthUtils {

    async signin(params) {

        // alert(JSON.stringify(params))
        const value = await AsyncStorage.getItem('users');
        
        // let arr = []
        // if(value){

        //     alert(JSON.stringify(arr))
        // } else {
        //     arr = [params]
        // }

        // try {
            // await AsyncStorage.setItem('users', params);
        //     showToast('Register success')
        // } catch (error) {
        //     showToast('Register failed')
        // }
    }
}

const authUtils = new AuthUtils()

Object.freeze(authUtils)

export default authUtils