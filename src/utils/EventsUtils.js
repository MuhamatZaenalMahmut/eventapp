
import { showToast } from "@constants";
import { Event, EventDetail } from '@actions';
import { arrEvent } from '@constants';
import store from "@stores/store";
import firestore from '@react-native-firebase/firestore';

class EventsUtils {

    async add(params) {
        await firestore()
        .collection('events')
        .add(params)
        .then(() => {
            showToast('Create Event Success')
            this.byUserId(params.userID)
        });
    }

    async all() {
        const snapshot = await 
        firestore()
        .collection('events')
        .get()

        store.dispatch(Event(arrEvent(snapshot)))
    }

    async byUserId(params) {

        const snapshot = await 
        firestore()
        .collection('events')
        .where('userID', '==', params)
        .get()

        store.dispatch(Event(arrEvent(snapshot)))
    }

    async detail(params) {

        store.dispatch(EventDetail(params))
    }
}

const eventsUtils = new EventsUtils()

Object.freeze(eventsUtils)

export default eventsUtils