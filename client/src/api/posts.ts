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
    picture: File | null | undefined;
};

class PostsApi {
    getAll() {
        return axios.get<{data: Array<TPostResponseDTO>}>(`/api/post/`);
    }

    create(post: TPostBodyDto) {
        return axios.post<{data: Array<TPostResponseDTO>}>(`/api/post/`, this.createFormData(post));
    }

    update(id: string, post: TPostBodyDto) {
        return axios.put<{data: Array<TPostResponseDTO>}>(`/api/post/${id}`, this.createFormData(post));
    }

    delete(id: string) {
        return axios.delete<{data: Array<TPostResponseDTO>}>(`/api/post/${id}`);
    }

    private createFormData(post: TPostBodyDto) {
        const formData = new FormData();
        Object.entries(post).forEach(([key, value]) => {
            if (value !== undefined) {
                formData.set(key, value);
            }            
        });
        return formData;
    }
};

export default new PostsApi();