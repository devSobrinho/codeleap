import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { PostProps } from '../Posts/Post/Post';

import { PostDelete } from '../Posts/Post/PostDelete';
import { ButtonIcon } from './ButtonIcon';

export type ButtonDeleteProps = {
    post: PostProps;
};

export function ButtonDelete({ post }): JSX.Element {
    const [isOpenDeletePost, setIsOpenDeletePost] = useState(false);

    const openModalDelete = (): void => {
        setIsOpenDeletePost(true);
    };
    const closeModalDelete = (): void => {
        setIsOpenDeletePost(false);
    };

    return (
        <Box>
            <ButtonIcon
                href="/aa"
                icon={MdDelete}
                bg="transparent"
                transition="ease-in-out 1500ms"
                textTooltip="Delete post"
                onClick={openModalDelete}
            />

            <PostDelete
                post={post}
                closeModalDelete={closeModalDelete}
                isOpenDeletePost={isOpenDeletePost}
            />
        </Box>
    );
}
