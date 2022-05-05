import { signOut as signOutGithub, useSession } from 'next-auth/react';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { User } from '../shared/types/user';

type UserProviderProps = {
    children: ReactNode;
};

type UserContextData = {
    user: User;
    setUser: (user: User) => void;
    signIn: (userData: User) => void;
    signOut: () => void;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps): JSX.Element {
    const [user, setUser] = useState<User>(() => {
        return null;
    });

    const { data: session } = useSession();

    // Cria quando o usuario abre pela primeira vez a aplicação
    useEffect(() => {
        console.log('aaaa');

        const { USER: userCookie } = parseCookies();
        if (userCookie) {
            const { email, image, name } = JSON.parse(userCookie);

            setUser({ name, email, image });
        }
    }, []);

    // session como dependencia e quando muda, cria o cookies de USER. Session ven do provider do Github
    useEffect(() => {
        if (session) {
            setCookie(null, 'USER', JSON.stringify(session.user), {
                path: '/',
                maxAge: 60 * 60 * 24 * 7, // 7 dias
            });

            setUser({
                image: session.user.image,
                email: session.user.email,
                name: session.user.name,
            });
        }
    }, [session]);

    const signIn = (userData: User): void => {
        if (userData) {
            setCookie(null, 'USER', JSON.stringify(userData), {
                path: '/',
                maxAge: 60 * 60 * 24 * 7, // 7 dias
            });

            setUser(userData);
        }
    };
    const signOut = (): void => {
        destroyCookie(undefined, 'USER');
        if (session) {
            signOutGithub();
        }
        setUser(null);
    };

    const context = useMemo(() => ({ user, setUser, signOut, signIn }), [user]);

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
}

export const useContextUser = (): UserContextData => {
    const context = useContext(UserContext);

    return context;
};
