import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';
import { ButtonIcon } from '../Button/ButtonIcon';

export type ModalContainerProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode;
    title?: string;
    contentLabel?: string;
};

export function ModalContainer({
    title,
    isOpen = false,
    onRequestClose,
    contentLabel,
    children,
}: ModalContainerProps): JSX.Element {
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={onRequestClose}
            // style={customStyles}
            contentLabel={contentLabel}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    overflow: 'hidden',

                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: '800px',
                    background: 'transparent',
                    zIndex: 22,
                },
            }}
        >
            <Flex
                zIndex={10}
                direction="column"
                color="whiteAlpha"
                bg="gray.900"
                width="100%"
                px="2rem"
                py="2rem"
                borderRadius="10px"
            >
                {title && (
                    <Text fontSize="2.5rem" my="1rem" color="whiteAlpha.700">
                        {title}
                    </Text>
                )}

                <ButtonIcon
                    href="/dds"
                    icon={IoClose}
                    onClick={onRequestClose}
                    cursor="pointer"
                    position="absolute"
                    top={0}
                    right={0}
                    // background="transparent"
                    color="pink.500"
                    bg="whiteAlpha.800"
                    p="0"
                    fontSize="3rem"
                    transition="ease-in-out 300ms"
                    _hover={{
                        background: 'pink.500',
                        color: 'whiteAlpha.800',
                    }}
                />

                {children}
            </Flex>
        </Modal>
    );
}
