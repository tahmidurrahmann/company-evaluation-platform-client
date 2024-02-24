import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import HrSendMeet from '../Dashboard/Hr/HrSendMeet';

function randomID(len: number): string {
    let result = '';
    const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
    const maxPos = chars.length;
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(url: string = window.location.href): URLSearchParams {
    const urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
}

const Meets: React.FC = () => {
    const roomID = getUrlParams().get('roomID') || randomID(5);
    const myMeetingRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        const startMeeting = async () => {
            // generate Kit Token
            const appID = 1267105206;
            const serverSecret = "5dba5947649dbb13b2a81fc17975fa21";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            // start the call
            zp.joinRoom({
                container: myMeetingRef.current!,
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

        startMeeting();
    }, [roomID]);

    return (
        <>
            <div>
                <div
                    className="myCallContainer "
                    ref={myMeetingRef}
                    style={{ width: '100%', height: '100vh' }}
                ></div>

                <div>
                    <h1 className='text-5xl text-center font-bold text-white mt-5 mb-12 italic'>feel free Share the link with your<span className='text-blue-400'> employees</span></h1>
                    <HrSendMeet />
                </div>
            </div>

            <div
                className="myCallContainer "
                style={{ width: '80vw', height: '90vh' }}
            ></div>
        </>
    );
};

export default Meets;