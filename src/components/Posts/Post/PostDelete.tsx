import { Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useMutationPostDelete } from '../../../hooks/usePosts';

import { ModalContainer } from '../../Modal';
import { PostProps } from './Post';

export type PostEditProps = {
    isOpenDeletePost: boolean;
    closeModalDelete: () => void;
    post: PostProps;
};

export function PostDelete({
    isOpenDeletePost,
    closeModalDelete,
    post,
}: PostEditProps): JSX.Element {
    const { data, mutate } = useMutationPostDelete();

    const handleDeletePostClick = (): void => {
        // mutate(post.id);
        // axios.delete('http://dev.codeleap.co.uk/careers/4553', {
        //     headers: {
        //         'Cont'
        //     }
        // });
        console.log('aa', data);
    };

    return (
        isOpenDeletePost && (
            <ModalContainer
                title="Delete Post"
                isOpen={isOpenDeletePost}
                onRequestClose={closeModalDelete}
            >
                <Text>Are you sure you want to delete this item?</Text>

                <Flex justifyContent="flex-end" mt="2rem">
                    <Button
                        bg="pink.500"
                        fontSize="1rem"
                        fontWeight={800}
                        px="1.5rem"
                        transition="all ease-in-out  300ms"
                        _hover={{
                            filter: ' brightness(0.7)',
                        }}
                        mx="2rem"
                        onClick={() => closeModalDelete()}
                    >
                        CANCEL
                    </Button>
                    <Button
                        bg="pink.500"
                        fontSize="1rem"
                        fontWeight={800}
                        px="1.5rem"
                        transition="all ease-in-out  300ms"
                        _hover={{
                            filter: ' brightness(0.7)',
                        }}
                        onClick={() => handleDeletePostClick()}
                    >
                        DELETE
                    </Button>
                </Flex>
            </ModalContainer>
        )
    );
}
