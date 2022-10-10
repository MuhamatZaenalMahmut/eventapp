
import { showToast } from "@constants";
import { Ticket, TicketDetail } from '@actions';
import { arrTicket } from '@constants';
import store from "@stores/store";
import firestore from '@react-native-firebase/firestore';

class TicketUtils {

    async add(params) {
        await firestore()
        .collection('ticket')
        .add(params)
        .then(() => {
            showToast('Transaction Success')
            this.byUserId(params.userID)
        });
    }

    async byUserId(params) {

        const snapshot = await 
        firestore()
        .collection('ticket')
        .where('userID', '==', params)
        .get()

        store.dispatch(Ticket(arrTicket(snapshot)))
    }

    async detail(params) {

        store.dispatch(TicketDetail(params))
    }

    async scanner(params) {

        const snapshot = await 
        firestore()
        .collection('ticket')
        .where('qrcode', '==', params)
        .get()

        let arr = arrTicket(snapshot)
        if(arr.length == 0){
            showToast('Ticket Not Found')
        } else {
            this.detail(arr[0])
            this.update(arr[0].key)
            return 200
        }
    }

    async update(params) {
        await firestore()
        .collection('ticket')
        .doc(params)
        .update({
          status: 1,
        })
        .then(() => {
          console.log('User updated!');
        });
    }
}

const ticketUtils = new TicketUtils()

Object.freeze(ticketUtils)

export default ticketUtils