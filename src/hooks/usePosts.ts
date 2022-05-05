import { AxiosResponse } from 'axios';
import { useInfiniteQuery, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import {
    PostCreateData,
    PostsResponseData,
} from '../shared/types/postsRequestOrResponse';
import { api } from '../services/api';

// get de infinitos posts
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getInfinitePosts = async ({ pageParam = 1 }) => {
    const offset = 10;
    const limit = 10;
    const page = `?limit=${limit}&offset=${(pageParam - 1) * offset}`;

    const response: AxiosResponse<PostsResponseData> = await api.get(
        `/${page}`
    );

    return { ...response, totalPages: response.data.count };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePosts = () => {
    return useInfiniteQuery(['posts'], getInfinitePosts, {
        getNextPageParam: (lastPage, pages) => {
            const totalPages = lastPage.data.count / 10;

            if (pages.length < totalPages) {
                return pages.length + 1;
            }
            return undefined;
        },
    });
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const postMutationPost = async (data: PostCreateData) => {
    const { data: response } = await api.post('/', data);
    return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const postMutationDelete = async (id: number) => {
    const { data: response } = await api.delete(`/${id}`);
    return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMutationPost = () => {
    return useMutation(postMutationPost, {
        onSuccess: data => {
            toast.success(`${data.username} created a new post`);
        },
        onError: () => {
            toast.error(`Sorry, there was an error`);
        },
        // onSettled: () => {
        //     queryClient.invalidateQueries('create');
        // },
    });
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMutationPostDelete = () => {
    return useMutation(postMutationDelete);
};

// export const useMutationPostPut = () => {
//     return useMutation(postMutationPut);
// };
