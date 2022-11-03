import { createContext, useContext, useState } from 'react';

import { StorageService } from "~@Services/storage";

const AuthContext = createContext({
    token: null
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [ token, setToken ] = useState(StorageService.get('token'));
    function setNewToken(token) {
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
