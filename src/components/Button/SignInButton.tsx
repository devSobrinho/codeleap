import { useSession } from 'next-auth/react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useContextUser } from '../../contexts/userContext';

export function SignInButton(): JSX.Element {
    const { signOut } = useContextUser();
    const { status } = useSession();
    const { USER: user } = parseCookies();

    const router = useRouter();

    const handleButtonSignOut = (): void => {
        signOut();
    };

    const handleButtonSignUp = (): void => {
        router.push('/signup');
    };

    if (status === 'loading') {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>;
    }

    if (user) {
        return (
            <Button
                bg="red.500"
                mx="2rem"
                transition="all ease-in-out  300ms"
                _hover={{
                    filter: ' brightness(0.8)',
                }}
                _focus={{
                    filter: ' brightness(0.8)',
                }}
                onClick={handleButtonSignOut}
            >
                <FaSignOutAlt fontSize="1rem" />
            </Button>
        );
    }

    return (
        <Link href="/signup" passHref>
            <Button
                as="a"
                bg="green.500"
                transition="ease-in-out 300ms"
                _hover={{
                    filter: ' brightness(0.8)',
                }}
                _focus={{
                    filter: ' brightness(0.8)',
                }}
                onClick={handleButtonSignUp}
            >
                <FaSignInAlt />
            </Button>
        </Link>
    );
    // }
}
