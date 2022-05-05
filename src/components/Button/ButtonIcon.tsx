import {
    Icon,
    Button as ChakraButton,
    ButtonProps,
    Tooltip,
} from '@chakra-ui/react';
import { LinkProps } from 'next/link';

import { IconType } from 'react-icons';

export type ButtonIconProps = {
    text?: string;
    textTooltip?: string;
    icon: IconType;
} & LinkProps &
    ButtonProps;

export function ButtonIcon({
    icon,
    textTooltip,
    ...rest
}: ButtonIconProps): JSX.Element {
    return (
        // eslint-disable-next-line react/no-children-prop
        <Tooltip label={textTooltip}>
            <ChakraButton
                as="a"
                w="auto"
                bg="pink.500"
                fontSize="1.5rem"
                // color={"whiteAlpha.500"}
                transition="all ease-in-out 200ms"
                _hover={{
                    // color: 'gray.900',
                    bg: 'whiteAlpha.200',
                    color: 'white',
                }}
                {...rest}
            >
                <Icon as={icon} _hover={{}} />
            </ChakraButton>
        </Tooltip>
    );
}
