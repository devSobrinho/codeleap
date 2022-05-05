import {
    Flex,
    Button as ButtonChakra,
    FlexProps as FlexPropsChakra,
} from '@chakra-ui/react';
// import Link from 'next/link';

export type ButtonProps = {
    text: string;
    // href?: string;
    isLoading?: boolean;
} & FlexPropsChakra;

export function ButtonSubmit({
    text,
    // href = '',
    isLoading = false,
    ...rest
}: ButtonProps): JSX.Element {
    return (
        <Flex justifyContent="flex-end" {...rest}>
            {/* <Link passHref href={href}> */}
            <ButtonChakra
                // as="a"
                lineHeight="1.1875rem"
                fontWeight={700}
                fontSize="1rem"
                type="submit"
                bg="pink.500"
                transition="ease-in-out 300ms"
                _hover={{
                    filter: ' brightness(0.8)',
                }}
                isLoading={isLoading}
            >
                {text.toUpperCase()}
            </ButtonChakra>
            {/* </Link> */}
        </Flex>
    );
}
