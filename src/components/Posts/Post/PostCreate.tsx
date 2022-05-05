import { Flex, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../Input';
import { TextArea } from '../../TextArea';
import { ButtonSubmit } from '../../Button/ButtonSubmit';
import { useContextUser } from '../../../contexts/userContext';
import { useMutationPost, usePosts } from '../../../hooks/usePosts';

type PostCreateData = {
    title: string;
    content: string;
};

const schema = yup
    .object({
        title: yup.string().required().max(30),
        content: yup.string().required().max(255),
    })
    .required();

export function PostCreate(): JSX.Element {
    const { user } = useContextUser();
    const { refetch } = usePosts();
    const { mutate, isLoading, isSuccess } = useMutationPost();
    const { register, handleSubmit, formState } = useForm<PostCreateData>({
        resolver: yupResolver(schema),
    });

    const handleCreatePostSubmit: SubmitHandler<PostCreateData> = async ({
        title,
        content,
    }) => {
        const data = {
            username: user.name,
            title,
            content,
        };

        // Create post
        mutate(data);

        // refetch all post
        (await refetch()).refetch();
    };
    return (
        <Flex
            as="form"
            direction="column"
            width="100%"
            mx="4rem"
            maxW="550px"
            onSubmit={handleSubmit(handleCreatePostSubmit)}
        >
            <Text
                as="h2"
                mb="2rem"
                fontSize="1.5rem"
                fontWeight={700}
                lineHeight="1.625rem"
            >
                What’s on your mind?
            </Text>

            <Input
                width="100%"
                name="title"
                label="Title"
                placeholder="Insert title"
                {...register('title')}
                error={formState.errors.title}
            />
            <TextArea
                title="Content"
                name="content"
                height="8rem"
                placeholder="Content"
                {...register('content')}
                error={formState.errors.content}
            />
            <ButtonSubmit
                my="2.25rem"
                text="Create"
                isLoading={formState.isSubmitting}
            />
        </Flex>
    );
}
