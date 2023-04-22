<template>
  <div class="app">
    <h1>Client side</h1>
    <div class="toolbar">
      <post-form @save="createPost">Add Post</post-form>
    </div>
    <my-post v-for="post in posts" :key="post._id" :post="post" @delete="deletePost(post._id)" @update="(newPost) => updatePost(post._id, newPost)" />
  </div>
</template>

<script lang='ts'>
import MyPost from './components/MyPost.vue';
import PostForm from './components/PostForm.vue';
import Post from './classes/Post';
import postsApi from './api/posts';

export default {
  components: { MyPost, PostForm },
  data: () => ({
    posts: [] as Array<Post>,
  }),
  async mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const { data } = await postsApi.getAll();
      this.posts = data.data.map(post => new Post(post._id, post.title, post.author, post.content, post.picture));
    },
    async createPost(post) {
      await postsApi.create(post);

      await this.fetchPosts();
    },
    async deletePost(id: string) {
      await postsApi.delete(id);
      await this.fetchPosts();
    },
    async updatePost(id: string, post) {
      await postsApi.update(id, post);
      await this.fetchPosts();
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.input {
  padding: 10px;
}

.btn {
  background: unset;
  border: solid 1px gray;
  cursor: pointer;
  padding: 10px 20px;
}

.btn:hover {
  background: lightgray;
}
</style>

<style scoped>
.app {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}

</style>