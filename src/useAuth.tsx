import { keycloakConfig } from './keycloakConfig';
import Keycloak from 'keycloak-js';
import { useEffect, useState, useRef } from 'react';

const keycloak = new Keycloak(keycloakConfig);

const useAuth = () => {

    const isRun = useRef()

    const [isLogin, setLogin] = useState(false)
    const [token, setToken] = useState<String>("")

    useEffect(() => {
        if (isRun.current) return;

        keycloak.init({ onLoad: 'login-required', }).then((res) => {
            setLogin(res);

            const tokenFD: string = `${keycloak.token}`;

            setToken(tokenFD);
        })
    }, []);

    return [isLogin, token];
}

export default useAuth;
