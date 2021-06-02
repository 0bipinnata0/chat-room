import React, {useCallback, useRef} from 'react';
import {UseWebsocketType} from "../hooks/useWebsocket";
import {Button, Input, Interactive} from "../components";

const TalkScreen = ({sendMessage}: Pick<UseWebsocketType, 'sendMessage'>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const sendMsg = useCallback(
        () => {
            if (inputRef.current) {
                const {value} = inputRef.current
                sendMessage(value)
            }
        },
        [sendMessage],
    );
    return (
        <Interactive>
            <Input ref={inputRef} type="email"/>
            <Button type="button" onClick={sendMsg}>Send</Button>
        </Interactive>
    );
};

export default TalkScreen;
