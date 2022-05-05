import { Flex, Text } from '@chakra-ui/react';
import { FormEventHandler, ReactNode } from 'react';

export type FormProps = {
    method: 'GET' | 'POST';
    title: string;
    children: ReactNode;
    // eslint-disable-next-line react/no-unused-prop-types
    handleFormSubmit: FormEventHandler<HTMLDivElement>;
    subtitle?: string;
};

export function Form({
    method,
    title,
    subtitle,
    handleFormSubmit,
    children,
}: FormProps): JSX.Element {
    return (
        <Flex
            as="form"
            method={method}
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
                boxShadow: 'dark-lg',
                rounded: 'md',
            }}
            onSubmit={handleFormSubmit}
        >
            <Text position="absolute" top={-6} left={2} color="gray.500">
                {title}
            </Text>
            {subtitle && (
                <Text
                    fontWeight={700}
                    mb={8}
                    fontSize="1.375rem"
                    lineHeight="1.625rem"
                    color="pink.500"
                >
                    {subtitle}
                </Text>
            )}
            {children}
        </Flex>
    );
}
