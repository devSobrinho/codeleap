import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type ContentProps = {
    children: ReactNode;
} & FlexProps;

export function Content({ children, ...rest }: ContentProps): JSX.Element {
    return (
        <Flex
            justify="center"
            align="center"
            maxW="1440px"
            w="100%"
            mx="auto"
            px="20px"
            direction="column"
            {...rest}
        >
            {children}
        </Flex>
    );
}
