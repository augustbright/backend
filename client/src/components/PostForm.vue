<template>
    <button class="btn" @click="isVisible = true">
        <slot></slot>
    </button>
    <div v-if="isVisible" class="modal" @click="cancel">
        <form class="createForm" @submit.prevent @click.stop>
            <input v-model="author" required class="input" type="text" placeholder="author">
            <input v-model="title" required class="input" type="text" placeholder="title">
            <input v-model="content" required class="input" type="text" placeholder="content">
            <button @click="save" class="btn saveButton">Save</button>
        </form>
    </div>
</template>

<script lang='ts'>
import Post from '../classes/Post';

export default {
    props: {
        initial: {
            type: Post
        }
    },
    data() {
        return {
            isVisible: false,
            author: '',
            title: '',
            content: ''
        }
    },
    watch: {
        isVisible(visible) {
            if (visible) {
                this.reset();
            }
        }
    },
    methods: {
        cancel() {
            this.isVisible = false;
            this.reset();
        },
        save() {
            this.isVisible = false;
            this.$emit('save', {
                author: this.author,
                title: this.title,
                content: this.content
            });
            this.reset();
        },
        reset() {
            this.author = this.initial?.author ?? '';
            this.title = this.initial?.title ?? '';
            this.content = this.initial?.content ?? '';
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.createForm {
    border: solid 1px gray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    background: white;
    box-shadow: black 0 0 10px;
    border-radius: 10px;
    width: 600px;
}

.saveButton {
    align-self: flex-end;
}
</style>