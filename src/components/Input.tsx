/* eslint-disable react/function-component-definition */
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

export type InputProps = {
    name: string;
    label?: string;
    error?: FieldError;
} & ChakraInputProps;

export const InputForward: ForwardRefRenderFunction<
    HTMLInputElement,
    InputProps
> = ({ label, name, error, ...rest }, ref): JSX.Element => {
    return (
        <FormControl isInvalid={!!error}>
            {label && (
                <FormLabel htmlFor={name} fontSize="1rem" lineHeight="1.25rem">
                    {label}
                </FormLabel>
            )}
            <ChakraInput
                name={name}
                transition="ease-in-out 300ms"
                _focus={{
                    borderColor: 'pink.500',
                }}
                _hover={{
                    borderColor: 'pink.500',
                }}
                ref={ref}
                {...rest}
            />

            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    );
};

export const Input = forwardRef(InputForward);
