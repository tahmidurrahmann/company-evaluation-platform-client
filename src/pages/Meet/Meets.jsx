import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import HrSendMeet from '../Dashboard/Hr/HrSendMeet';
import SharedHeading from '../../shared/SharedHeading/SharedHeading';
import { FaAccessibleIcon, FaArrowAltCircleDown } from 'react-icons/fa';


function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(
    url = window.location.href
) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
}

const Meets = () => {
    const roomID = getUrlParams().get('roomID') || randomID(5);

    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 1267105206;
        const serverSecret = "5dba5947649dbb13b2a81fc17975fa21";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return (


        <div>
            <div
                className="myCallContainer "
                ref={myMeeting}
                style={{ width: '100%', height: '100vh' }}
            ></div>

            {/* meet end here  */}
            <div>
                <h1 className='text-5xl text-center font-bold text-black mt-5 mb-12 italic'>feel free Share the link with your<span className='text-blue-400'> employees</span></h1>
            

                <HrSendMeet />
            </div>
        </div>

        <div
            className="myCallContainer "
            ref={myMeeting}
            style={{ width: '80vw', height: '90vh' }}
        ></div>

    );
};

export default Meets;
