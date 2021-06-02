import React, {useEffect, useState} from 'react';
import {UseWebsocketType} from "../hooks/useWebsocket";
import {Room, Scroll} from "../components";


const RoomScreen = ({receiveMessage, connected}: Pick<UseWebsocketType, 'receiveMessage' | 'connected'>) => {
    const [chatHistory, setChatHistory] = useState<Array<string>>([]);

    useEffect(() => {
        receiveMessage(({data}) => {
            // setChatHistory(val => ([data, ...val]))
            setChatHistory(val => (new Array(100).fill(Math.random())))
        })
    }, [receiveMessage]);

    return <Room>
        <Scroll>
            <div>
                {connected ? chatHistory.map((chat, charIndex) => (
                    <div key={charIndex}>{chat}</div>)) : ''}
            </div>
        </Scroll>
    </Room>
}
export default RoomScreen;
