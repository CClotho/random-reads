 // __mocks__/useAuth.ts
import { createContext, useContext } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children } :{children:React.ReactNode}) => {
    const[loading, setLoading]  = useState(true); 
    const [authentication, setAuth] = useState(false); 
    const [user, setUser] = useState<any>({});
    const access = false;

    const context = {
        loading,
        user,
        authentication,
        setLoading,
        setAuth,
        setUser
     }
    return (
        <AuthContext.Provider value={context}>
             {loading && access ? <p>Loading... from AuthProvider</p> : children}
        </AuthContext.Provider>
    );
};
