import { Box, Divider, Flex, HStack, Spinner } from '@chakra-ui/react';
import { IoRefresh } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { User } from 'next-auth';

import { Content } from '../components/Container/Content';
import { Header } from '../components/Header';
import { Posts } from '../components/Posts/Posts';
import { PostCreate } from '../components/Posts/Post/PostCreate';
import { Container } from '../components/Container';
import { usePosts } from '../hooks/usePosts';
import { ButtonIcon } from '../components/Button/ButtonIcon';
import { GoTop } from '../components/GoTop';

export default function Home(): JSX.Element {
    const { ref, inView } = useInView();

    const {
        data,
        isLoading,
        isFetching,
        isRefetching,
        error,
        refetch,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = usePosts();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    const handleRefreshClick = (): void => {
        refetch();
    };

    return (
        <Container minH="100vh" id="#top">
            <Header />
            <Box position="fixed" bottom={0} right={0}>
                <GoTop />
            </Box>

            <Content>
                <Divider mb="2rem" />

                <PostCreate />

                <Divider my="2rem" />

                <HStack w="100%" justifyContent="flex-end" px="2rem">
                    <ButtonIcon
                        href="#refresh"
                        icon={IoRefresh}
                        bg="transparent"
                        onClick={handleRefreshClick}
                        textTooltip="Refresh all posts"
                    />
                </HStack>

                {data?.pages.map((page, index) => {
                    return (
                        <Posts
                            key={`${index + 0}-${page.data.next}`}
                            posts={page.data}
                            isLoading={isLoading}
                            isFetching={isFetching}
                        />
                    );
                })}

                {!isFetchingNextPage && hasNextPage && (
                    <Flex ref={ref} justify="center" my="4rem">
                        <Spinner />
                    </Flex>
                )}
            </Content>
            <Flex
                bg="pink.500"
                width="100%"
                p="2rem"
                justify="center"
                align="center"
            >
                Web site created by Morcego.
            </Flex>
        </Container>
    );
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//     const { USER: user } = parseCookies(ctx);
//     // console.log('o user get', cookies);
//     console.log('eentra aq', user);

//     return {
//         props: { user: user ?? null },
//     };
// };
