import {useContext} from "react";
import {AuthContext} from "../context/authContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('不在AuthContext 环境中使用')
    }
    return context
}
