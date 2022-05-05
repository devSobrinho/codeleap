import { useSession, signIn } from 'next-auth/react';
import { ImGithub } from 'react-icons/im';
import { Button, Flex, Text, Tooltip } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

import { GetServerSideProps } from 'next';
import { Input } from '../components/Input';
import { ButtonSubmit } from '../components/Button/ButtonSubmit';
import { useContextUser } from '../contexts/userContext';

type UserFormData = {
    name: string;
};

const schema = yup
    .object({
        name: yup.string().required('Field username required').min(6),
    })
    .required();

export default function SignUp(): JSX.Element {
    const router = useRouter();
    const { data: session } = useSession();
    const { signIn: signInContext, user } = useContextUser();

    const { register, handleSubmit, formState } = useForm<UserFormData>({
        resolver: yupResolver(schema),
    });

    const handleLoginUser: SubmitHandler<UserFormData> = userData => {
        signInContext({
            name: userData.name,
        });
        router.push('/');
    };

    const handleLoginUserGithub = (): void => {
        signIn('github', {
            redirect: true,
            callbackUrl: '/',
        });
    };

    return (
        <main>
            <Flex
                maxWidth="1440px"
                justify="center"
                align="center"
                height="100vh"
                mx="auto"
                direction="column"
            >
                <Flex
                    as="form"
                    method="POST"
                    w="520px"
                    backgroundColor="gray.900"
                    minH="220px"
                    borderRadius="0.33rem"
                    p="2rem"
                    direction="column"
                    position="relative"
                    transition="ease-in-out 300ms"
                    _hover={{
                        borderRadius: '1rem',
                        boxShadow: '12px 15px 26px 8px rgba(0,0,0,0.67)',
                        rounded: 'md',
                    }}
                    onSubmit={handleSubmit(handleLoginUser)}
                >
                    <Text
                        position="absolute"
                        top={-6}
                        left={2}
                        color="gray.500"
                    >
                        Login
                    </Text>

                    <Text
                        fontWeight={700}
                        mb={8}
                        fontSize="1.375rem"
                        lineHeight="1.625rem"
                        color="pink.500"
                    >
                        Welcome to CodeLeap network!
                    </Text>

                    <Input
                        name="name"
                        label="Please enter your name"
                        placeholder="username"
                        error={formState.errors.name}
                        {...register('name')}
                    />
                    <ButtonSubmit mt="1rem" text="Enter" />
                </Flex>

                <Text my="2rem">or</Text>

                <Flex>
                    <Tooltip>
                        <Button
                            leftIcon={<ImGithub fontSize="1.5rem" />}
                            bg="pink.500"
                            transition="ease-in-out 500ms"
                            _hover={{
                                boxShadow:
                                    '12px 15px 26px 8px rgba(0,0,0,0.67)',
                                background: 'gray.900',
                                // color: 'pink.500',
                            }}
                            onClick={
                                () => handleLoginUserGithub()
                                // () => signIn()
                                // 'github', {
                                //     redirect: true,
                                //     callbackUrl: '/',
                                // }
                            }
                        >
                            Login in Github
                        </Button>
                    </Tooltip>
                </Flex>
            </Flex>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { USER: user } = parseCookies(ctx);

    if (user) {
        console.log('tentou', user);

        return {
            props: {},
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
