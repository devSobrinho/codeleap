import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { useMutationPost } from '../../hooks/usePosts';

import { PostEdit } from '../Posts/Post/PostEdit';
import { ButtonIcon } from './ButtonIcon';

export type ButtonEditProps = {
    isOpenEditPost: boolean;
    openModalEdit: () => void;
    closeModalEdit: () => void;
};

export function ButtonEdit(): JSX.Element {
    // const { } = useMutationPost();
    const [isOpenEditPost, setIsOpenEditPost] = useState(false);

    const openModalEdit = (): void => {
        setIsOpenEditPost(true);
    };
    const closeModalEdit = (): void => {
        setIsOpenEditPost(false);
    };

    return (
        <Box>
            <ButtonIcon
                href="/aaa"
                icon={MdEdit}
                bg="transparent"
                transition="ease-in-out 1500ms"
                textTooltip="Edit post"
                onClick={openModalEdit}
            />

            <PostEdit
                closeModalEdit={closeModalEdit}
                isOpenEditPost={isOpenEditPost}
            />
        </Box>
    );
}
