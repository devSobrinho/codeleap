import { Box, Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export default function Teste(): JSX.Element {
    const [advice, setAdvice] = useState('Escolha seu conselho');
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleClick = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        setAdvice(response.data.slip.advice);
        return advice;
    };

    return (
        <Flex
            justify="center"
            align="center"
            maxW="800px"
            maxH="100vh"
            mx="auto"
            my="5vh"
            bg="gray.900"
            borderRadius="2rem"
        >
            <Flex
                w="100%"
                h="90vh"
                justify="center"
                align="center"
                direction="column"
            >
                <Text color="gray.200" fontWeight={700}>
                    Conselho amigo:{' '}
                    <Text as="span" color="pink.500" fontWeight={400}>
                        {advice}
                    </Text>
                </Text>
                <Button my="2rem" onClick={() => handleClick()} bg="blue.500">
                    TROQUE A PORRA DO SEU CONSELHO
                </Button>
            </Flex>
        </Flex>
    );
}
