export type PostCreateData = {
    username: string;
    title: string;
    content: string;
};

export type PostData = {
    content: string;
    created_datetime: string;
    id: number;
    title: string;
    username: string;
};

export type PostsResponseData = {
    count: number;
    next: string;
    previous: string;
    results: PostData[];
};
