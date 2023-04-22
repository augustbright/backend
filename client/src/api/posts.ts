import axios from 'axios';

type TPostResponseDTO = {
    _id: string;
    title: string;
    author: string;
    content: string;
    picture?: string;
};

type TPostBodyDto = {
    title: string;
    author: string;
    content: string;
};

class PostsApi {
    getAll() {
        return axios.get<{data: Array<TPostResponseDTO>}>(`/api/post/`);
    }

    create(post: TPostBodyDto) {
        return axios.post<{data: Array<TPostResponseDTO>}>(`/api/post/`, post);
    }

    update(id: string, post: TPostBodyDto) {
        return axios.put<{data: Array<TPostResponseDTO>}>(`/api/post/${id}`, post);
    }

    delete(id: string) {
        return axios.delete<{data: Array<TPostResponseDTO>}>(`/api/post/${id}`);
    }
};

export default new PostsApi();