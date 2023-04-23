import postsService from "./posts-service.js"

class PostsController {
    async create(req, res) {
        try {
            const picture = req.files?.picture;
            const { author, content, title } = req.body;
            const post = await postsService.create({ author, content, title }, picture);
            res.json({ data: post });
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    async getAll(req, res) {
        try {
            const posts = await postsService.getAll();
            res.json({ data: posts });
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const posts = await postsService.getOne(id);
            res.json({ data: posts });

        } catch (e) {
            res.status(500).json({ error: e });
        }

    }

    async update(req, res) {
        try {
            const picture = req.files?.picture;
            const { id } = req.params;
            const post = req.body;
            const updatedPost = await postsService.update(id, post, picture);
            res.json({ data: updatedPost });
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const post = await postsService.delete(id);
            res.json({ data: post });
        } catch (e) {
            res.status(500).json({ error: e });
        }

    }
}

export default new PostsController();