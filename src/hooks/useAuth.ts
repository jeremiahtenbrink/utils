import decode from 'jwt-decode';

export const useAuth = (key: string,
    token: string | null = null): IUseAuth => {

    const setToken = (someToken: string): void => {
        localStorage.setItem(key, someToken);
    };

    const getToken = (): string => {
        return localStorage.getItem(key) as string;
    };

    const isAuthenticated = (): boolean => {
        const token = getToken();
        const decoded = decode(token);

        if (Date.now() / 1000 > decoded.exp) {
            localStorage.removeItem(key);
            return false;
        } else {
            return true;
        }
    };

    const logOut = () => {
        localStorage.removeItem(key);
    };

    return [isAuthenticated, { setToken, getToken, logOut }];
};

type authenticated = () => boolean;

interface jwt {
    setToken: (token: string) => void
    getToken: () => string;
    logOut: () => void;
}

type IUseAuth = [authenticated, jwt]