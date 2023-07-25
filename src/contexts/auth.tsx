import { createContext, useContext, useState, ReactNode } from 'react';

import { LocalStorage } from "~@Services/storage/LocalStorage";
import { ILocalStorage } from "~@Services/storage/ILocalStorage";

type AuthContextType = {
    token: string|null,
    setToken(token: string): void
}

const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken() { }
});

export function useAuth() {
    return useContext(AuthContext);
}

type AuthProviderProps = {
    children: ReactNode
}

const localStorage: ILocalStorage = new LocalStorage();
export function AuthProvider({ children }: AuthProviderProps) {
    const [ token, setToken ] = useState(localStorage.get('token'));
    function setNewToken(token: string) {
        setToken(token);
        if (token) {
            localStorage.set('token', token);
            return;
        }
        localStorage.clear();
    }
    return(
        <AuthContext.Provider value={{
            token,
            setToken: setNewToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}
