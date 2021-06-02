import React, {useEffect, useRef, useState} from 'react';

const Room = () => {
    const [websocket] = useState(() => new WebSocket("ws://10.128.105.107:3333/"));
    const [isConnected, setIsConnected] = useState(false);
    const [chatHistory, setChatHistory] = useState<Array<String>>([]);
    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        console.log('刷新')
        websocket.onopen = () => {
            setIsConnected(true)
        }
        websocket.onclose = () => {
            console.log('连接断开')
        }
        websocket.onmessage = ({data}) => {
            setChatHistory(val => ([data, ...val]))
        }
    }, []);

    function send() {
        if (inputRef.current) {
            const {value} = inputRef.current
            websocket.send(value)
        }
    }

    return isConnected ? (
        <div>
            <div>已连接</div>
            <div><input ref={inputRef}/>
                <button onClick={send}>发送</button>
            </div>
            <div>{chatHistory.map((chat, charIndex) => <div key={charIndex}>{chat}</div>)}</div>
        </div>) : <div>连接中</div>
}

export default Room;
