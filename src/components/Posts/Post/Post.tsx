/* eslint-disable react/button-has-type */
import {
    Button,
    Divider,
    Flex,
    HStack,
    SimpleGrid,
    Text,
    Tooltip,
    VStack,
} from '@chakra-ui/react';
import { ButtonDelete } from '../../Button/ButtonDelete';
import { ButtonEdit } from '../../Button/ButtonEdit';

export type PostProps = {
    id: number;
    title: string;
    username: string;
    createdAt: string;
    content: string;
    isMyPost?: boolean;
};

export function Post({
    id,
    username,
    content,
    title,
    createdAt,
    isMyPost = false,
}: PostProps): JSX.Element {
    const post = { id, username, content, title, createdAt, isMyPost };
    return (
        <Flex
            as="li"
            direction="column"
            maxW="800px"
            border="1px solid"
            borderColor="pink.500"
        >
            <HStack
                h="auto"
                justify="center"
                position="relative"
                align="center"
                p="1rem"
            >
                <Text
                    as="h3"
                    p="0.25rem"
                    bg="purple.800"
                    w="100%"
                    textAlign="center"
                    fontSize="1.3rem"
                    fontWeight={700}
                    lineHeight="1.45rem"
                    pr="2rem"
                >
                    {title}
                </Text>
                {isMyPost && (
                    <SimpleGrid
                        gap="2rem"
                        w="7rem"
                        minChildWidth="2rem"
                        position="absolute"
                        top={0}
                        right={8}
                    >
                        {/* <PostContextProvider> */}
                        <ButtonDelete post={post} />
                        <ButtonEdit />
                        {/* </PostContextProvider> */}
                    </SimpleGrid>
                )}
            </HStack>
            <VStack
                p="2rem"
                pt="0.5rem"
                bg="whiteAlpha.100"
                background="transparent"
            >
                <Divider borderBottomColor="pink.500" w="80%" />
                <HStack
                    justifyContent="space-between"
                    w="100%"
                    fontSize="1.125rem"
                    lineHeight="1.5rem"
                    color="gray.300"
                >
                    <Tooltip
                        label={`${
                            isMyPost
                                ? 'Enter my profile'
                                : `Enter profile @${username} `
                        }`}
                        placement="top"
                    >
                        <Button
                            bg="transparent"
                            as="a"
                            href={`/profile/${username}`}
                            fontWeight={600}
                            color={`${isMyPost ? 'yellow.400' : 'gray.300'}`}
                            _hover={{
                                color: 'blue.200',
                                bg: 'transparent',
                            }}
                        >
                            @{username}
                        </Button>
                    </Tooltip>
                    <Text as="time" fontWeight={400}>
                        {createdAt}
                    </Text>
                </HStack>
                <Text textAlign="justify" w="100%" pt=".5rem">
                    {content}
                </Text>
            </VStack>
        </Flex>
    );
}
