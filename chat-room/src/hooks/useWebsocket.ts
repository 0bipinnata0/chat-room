import {useCallback, useEffect, useState} from 'react';
import {delay} from '../utils';

export type UseWebsocketType = ReturnType<typeof useWebsocket>;

export const useWebsocket = () => {
    const [websocket] = useState(() => new WebSocket('ws://10.128.105.107:3333/'));
    const [loading, setLoading] = useState(true);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        websocket.onopen = () => {
            setConnected(true);
            setLoading(false);
        };
        websocket.onclose = () => {
            setConnected(false);
            setLoading(true);
            console.log('连接断开');
        };
    }, [websocket]);

    const receiveMessage = useCallback((fn: (msg: MessageEvent) => void) => {
        setLoading(true);
        websocket.onmessage = async messageEvent => {
            console.log('接受到信息');
            // 模拟网络延迟
            const delayFn = await delay(0, fn);
            delayFn(messageEvent);
            setLoading(false);
        };
    }, [websocket]);

    const sendMessage = useCallback((message: string) => {
        setLoading(true);
        websocket.send(message);
    }, [websocket]);

    return {loading, connected, receiveMessage, sendMessage};
};
