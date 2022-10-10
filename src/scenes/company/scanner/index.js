import React, { useRef } from 'react';
import { BaseContainer, ModalUser } from '@components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ticketUtils from '@utils/TicketUtils';

const Scanner = ({ navigation }) => {

    const refModalUser  = useRef();

    const onBarCodeRead = async (e) => {
        let res = await ticketUtils.scanner(e.data)

        if(res == 200){
            refModalUser.current.open()
        }
    }

    return (      
        <BaseContainer>
            <QRCodeScanner
                onRead={onBarCodeRead}
                cameraStyle={{width:'100%', height:'100%'}}
            />
            <ModalUser
                open={refModalUser}
                onPress={()=> refModalUser.current.close()}
            />
        </BaseContainer>  
    )
}

export default Scanner;