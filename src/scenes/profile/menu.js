import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

module.exports = {
    menu:[
        {
            title: 'History',
            icon: 'clock',
            type: Octicons,
            isUser: true
        },
        {
            title: 'Ticket',
            icon: 'book-plus-outline',
            type: MaterialCommunityIcons,
            menu: 'Collections',
            isUser: true
        },
        {
            title: 'My Point',
            icon: 'star-circle-outline',
            type: MaterialCommunityIcons,
            isUser: true
        },
        {
            title: 'Language',
            icon: 'translate',
            type: MaterialCommunityIcons,
        },
        {
            title: 'Setting',
            icon: 'settings-outline',
            type: Ionicons,
        },
        {
            title: 'FAQ',
            icon: 'ios-chatbubbles-outline',
            type: Ionicons,
        },
        {
            title: 'Feedback',
            icon: 'question',
            type: Octicons,
        },
        {
            title: 'Logout',
            icon: 'logout',
            type: MaterialCommunityIcons,
            menu: 'logout'
        },
    ],
}