import { Avatar, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

import { useContextUser } from '../../contexts/userContext';
import { SignInButton } from '../Button/SignInButton';

export function Header(): JSX.Element {
    const { user } = useContextUser();

    return (
        <Flex
            as="header"
            justify="space-between"
            align="center"
            height="5rem"
            fontSize="1.5rem"
            fontFamily="mono"
            // backgroundColor="black"
            mx="2rem"
        >
            <Link href="/" passHref>
                <ChakraLink>
                    <Text>CodeLeap Network</Text>
                </ChakraLink>
            </Link>
            <Flex align="center" h="100%" justify="center">
                {user && (
                    <>
                        <Text
                            fontFamily="heading"
                            fontWeight={400}
                            px="1rem"
                            maxW="500px"
                        >
                            {user.name}
                        </Text>

                        {user.image ? (
                            <Avatar name={user.name} src={user.image} />
                        ) : (
                            <Avatar name={user.name} />
                        )}
                    </>
                )}

                <SignInButton />
            </Flex>
        </Flex>
    );
}
