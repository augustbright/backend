<template>
    <div class="post">
        <header class="header">
            <h2>{{ post.title }}</h2>
            <span>By: {{ post.author }}</span>
        </header>
        <div class="body">
            <img v-if="post.picture" class="img" alt="post picture" :src="`/static/${post.picture}`"/>
            <div class="content">{{ post.content }}</div>
        </div>
        <footer class="footer">
            <post-form :initial="post" @save="update" class="btn">Edit</post-form>
            <button @click="$emit('delete')" class="btn">Delete</button>
        </footer>
    </div>
</template>

<script lang='ts'>
import Post from '../classes/Post';
import PostForm from './PostForm.vue';

export default {
    components: { PostForm },
    props: {
        post: {
            type: Post,
            required: true
        }
    },
    methods: {
        update(post) {
            this.$emit('update', post);
        }
    }
}
</script>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    border: solid 1px gray;
    padding: 10px;
    width: 600px;
    border-radius: 10px;
}

.header {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
}

.body {
    display: flex;
    flex: 1 0 auto;
}

.img {
    flex: 0 0 auto;
    width: 200px;
}

.footer {
    display: flex;
    column-gap: 10px;
    justify-content: end;
    border-top: dotted 1px lightgray;
    padding-top: 10px;
}
</style>