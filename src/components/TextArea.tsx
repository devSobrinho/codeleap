/* eslint-disable react/function-component-definition */
import {
    FormControl,
    FormErrorMessage,
    Text,
    Textarea as ChakraTextArea,
    TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

export type TextAreaProps = {
    name: string;
    title?: string;
    error?: FieldError;
} & ChakraTextareaProps;

export const TextAreaForward: ForwardRefRenderFunction<
    HTMLTextAreaElement,
    TextAreaProps
> = ({ title, name, error, ...rest }, ref): JSX.Element => {
    return (
        <FormControl isInvalid={!!error} mt="1.5rem">
            {title && (
                <Text fontSize="1rem" lineHeight="1.25rem" mb="0.5rem">
                    {title}
                </Text>
            )}
            <ChakraTextArea
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

export const TextArea = forwardRef(TextAreaForward);
