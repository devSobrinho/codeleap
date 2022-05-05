import { Flex } from '@chakra-ui/react';
import { useContextUser } from '../../contexts/userContext';
import { PostData } from '../../shared/types/postsRequestOrResponse';

import { formatDistanceDate } from '../../utils/formatDistanceDate';
import { Post, PostProps } from './Post/Post';

export type PostsProps = {
    isLoading: boolean;
    isFetching: boolean;
    posts: PostProps[];
};

export function Posts({ posts, isLoading, isFetching }): JSX.Element {
    const contextUser = useContextUser();

    return (
        <Flex
            as="ul"
            direction="column"
            gap={10}
            width="100%"
            maxW="700px"
            my="2rem"
        >
            {isLoading ? (
                <Flex justify="center">{/* <Spinner /> */}</Flex>
            ) : (
                posts &&
                posts.results.map((post: PostData) => {
                    const dateFormatted = formatDistanceDate(
                        post.created_datetime
                    );

                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            username={post.username}
                            content={post.content}
                            createdAt={dateFormatted}
                            isMyPost={Boolean(
                                contextUser.user?.name === post.username
                            )}
                        />
                    );
                })
            )}
        </Flex>
    );
}
