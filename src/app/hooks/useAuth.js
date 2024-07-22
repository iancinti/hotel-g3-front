
import { useState, useEffect } from 'react';

const useAuth = ( isInvited = false ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!isInvited) {
            const token = localStorage.getItem('authToken');
            setIsAuthenticated(!!token);
        }else{
            setIsAuthenticated(true);
        }
    }, []);

    return isAuthenticated;
};

export default useAuth;
