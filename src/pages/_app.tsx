import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import { ReactQueryDevtools } from 'react-query/devtools'; // dev tools

import { UserProvider } from '../contexts/userContext';
import { queryClient } from '../services/queryClient';
import { theme } from '../styles/theme';

import 'react-toastify/dist/ReactToastify.css';

let isDevelopment = false;
if (process.env.NODE_ENV === 'development') {
    isDevelopment = true;
}
// react-modal
Modal.setAppElement('#__next');

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}): JSX.Element {
    return (
        <SessionProvider session={session}>
            <UserProvider>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider resetCSS theme={theme}>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </ChakraProvider>
                    {isDevelopment && <ReactQueryDevtools />}
                </QueryClientProvider>
            </UserProvider>
        </SessionProvider>
    );
}

export default MyApp;
