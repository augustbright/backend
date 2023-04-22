import Post from "./Post.js";
import filesService from "./files-service.js";

class PostsService {
    async create(post, picture) {
        if (picture) {
            const filename = await filesService.saveJpg(picture);
            post.picture = filename;
        }        
        return Post.create(post);
    }

    getAll(req, res) {
        return Post.find()
    }

    getOne(id) {
        if (!id) {
            throw new Error('Id is missing');
        }
        return Post.findById(id);
    }

    update(id, post) {
        if (!id) {
            throw new Error('Id is missing');
        }
        if (!post) {
            throw new Error('Post data is missing');
        }
        return Post.findByIdAndUpdate(id, post, { new: true });
    }

    delete(id) {
        if (!id) {
            throw new Error('Id is missing');
        }
        return Post.findByIdAndDelete(id);
    }
}

export default new PostsService();