import { Flex, Input } from '@chakra-ui/react';

import { ModalContainer } from '../../Modal';

export type PostEditProps = {
    isOpenEditPost: boolean;
    closeModalEdit: () => void;
};

export function PostEdit({ isOpenEditPost, closeModalEdit }): JSX.Element {
    if (isOpenEditPost) {
        return (
            <ModalContainer
                title="Edit"
                isOpen={isOpenEditPost}
                onRequestClose={closeModalEdit}
            >
                <Flex as="form">
                    <Input name="" />
                    aa
                </Flex>
            </ModalContainer>
        );
    }
}
