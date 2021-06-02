import RoomScreen from "./room";
import {useWebsocket} from "../hooks/useWebsocket";
import {Loading} from "../components/loading";
import TalkScreen from "./talk";
import {Area, State} from "../components";
import {useRef} from "react";
import {useAuth} from "../hooks/useAuth";

const AreaScreen = () => {
    const {loading, connected, receiveMessage, sendMessage} = useWebsocket()

    return (
        <Area>
            <StateScreen loading={loading}/>
            <TalkScreen sendMessage={sendMessage}/>
            <RoomScreen receiveMessage={receiveMessage} connected={connected}/>
        </Area>
    );
};

const StateScreen = ({loading}: { loading: boolean }) => {
    const {nameMap, nameModify} = useAuth()
    const inputRef = useRef<HTMLInputElement>(null);

    const setName = () => {
        const input = inputRef.current
        if (input) {
            nameModify(input.value)
        }
    }

    return <State>
        <div>
            <div>已连接</div>
            {!nameMap.id ?
                <div>设置姓名<input ref={inputRef} onBlur={setName}/></div> :
                <div>你好: {nameMap.value}</div>
            }
        </div>
        <Loading loading={loading}/>
    </State>
}


export default AreaScreen;
