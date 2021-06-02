import React, {useCallback, useState} from "react";

export const AuthContext = React.createContext<{ nameModify: NameModifyType, nameMap: NameMapType }
    | null>(null)

interface NameMapType {
    id: string,
    value: string
}

interface NameModifyType {
    (name?: string): void
}

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [nameMap, setNameMap] = useState<NameMapType>({id: '', value: ''});
    const nameModify: NameModifyType = useCallback(
        (name) => {
            if (!name) return
            setNameMap({id: (new Date().getTime()) + '', value: name})
        },
        [],
    );

    return <AuthContext.Provider value={{nameModify, nameMap}}>{children}</AuthContext.Provider>
}
