import { createContext, useContext, useState, ReactNode } from 'react';

import * as StorageService from "~@Services/storage";

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

export function AuthProvider({ children }: AuthProviderProps) {
    const [ token, setToken ] = useState(StorageService.get('token'));
    function setNewToken(token: string) {
        setToken(token);
        if (token) {
            StorageService.set('token', token);
            return;
        }
        StorageService.clear();
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
