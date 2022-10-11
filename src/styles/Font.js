import { StyleSheet } from "react-native";
import { Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    Bold:{
        fontFamily:'GothamRounded-Bold'
    },
    BoldItalic:{
        fontFamily:'GothamRounded-BoldItalic'
    },
    Light:{
        fontFamily:'GothamRounded-Light'
    },
    Medium:{
        fontFamily:'GothamRounded-Medium'
    },
    SemiBold:{
        fontFamily:'GothamRounded-SemiBold'
    },

    F7:{
        fontSize: RFValue(7),
    },
    F8:{
        fontSize: RFValue(8),
    },
    F9:{
        fontSize: RFValue(9),
    },
    F10:{
        fontSize: RFValue(10),
    },
    F11:{
        fontSize: RFValue(11),
    },
    F12:{
        fontSize: RFValue(12),
    },
    F13:{
        fontSize: RFValue(13),
    },
    F14:{
        fontSize: RFValue(14),
    },
    F15:{
        fontSize: RFValue(15),
    },
    F16:{
        fontSize: RFValue(16),
    },
    F17:{
        fontSize: RFValue(17),
    },
    F18:{
        fontSize: RFValue(18),
    },
    F19:{
        fontSize: RFValue(19),
    },
    F20:{
        fontSize: RFValue(20),
    },
    F24:{
        fontSize: RFValue(24),
    },
    F25:{
        fontSize: RFValue(25),
    },
    F30:{
        fontSize: RFValue(30),
    },
    F35:{
        fontSize: RFValue(35),
    },
    F40:{
        fontSize: RFValue(40),
    },
    F50:{
        fontSize: RFValue(50),
    },

    WHITE:{
        color: Colors.WHITE
    },
    PRIMARY:{
        color: Colors.PRIMARY
    },
    GRAY:{
        color: Colors.GRAY
    },
    BLACK:{
        color: Colors.BLACK
    },
    DANGER:{
        color: Colors.DANGER
    },

    title:{
        fontFamily:'GothamRounded-Medium',
        fontSize: RFValue(16),
        color: Colors.BLACK,
    },
    label:{
        fontFamily:'GothamRounded-Medium',
        fontSize: RFValue(14),
        color: Colors.BLACK,
        marginBottom: RFValue(5)
    },
    value:{
        fontFamily:'GothamRounded-Light',
        fontSize: RFValue(13),
        color: Colors.GREY,
    },
    desc:{
        fontFamily:'GothamRounded-Light',
        fontSize: RFValue(13),
        color: Colors.GRAY,
    },
    errorText:{
        marginTop: RFValue(3),
        fontSize: RFValue(12),
        color: Colors.DANGER,
        fontFamily:'GothamRounded-Medium',
    },
    header:{
        marginVertical: RFValue(10),
        fontFamily:'GothamRounded-Bold',
        fontSize: RFValue(25),
        color: Colors.BLACK,
    }
})
