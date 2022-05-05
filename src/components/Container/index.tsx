import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type ContainerProps = {
    children: ReactNode;
} & FlexProps;

export function Container({ children, ...rest }: ContainerProps): JSX.Element {
    return (
        <Flex as="main" direction="column" backgroundColor="gray.900" {...rest}>
            {children}
        </Flex>
    );
}
