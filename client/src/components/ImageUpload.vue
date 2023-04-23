<template>
    <div class="container">
        <input @change="setImage" id="img-upload" :hidden="true" ref="input-ref" type="file" accept="image" />
        <label v-if="!hasSomeImage" for="img-upload" class="label">
            <div>Upload Picure</div>
        </label>
        <div v-if="hasSomeImage" class="image-container">
            <img :src="url" class="image" alt="post picture" />
        </div>
        <div v-if="hasSomeImage" class="toolbar">
            <label for="img-upload">
                <div class="btn">Change</div>
            </label>
            <button @click.prevent="clearImage" class="btn">Clear</button>
        </div>

    </div>
</template>

<script lang='ts'>
export default {
    props: {
        initialUrl: {
            type: String
        },
        image: {
            type: [File, undefined, null]
        }
    },
    computed: {
        url() {
            if (this.image) {
                return URL.createObjectURL(this.image);
            } else if (this.image !== null) {
                return this.initialUrl;
            }
        },
        hasSomeImage() {
            return Boolean(this.url);
        }
    },
    methods: {
        setImage() {
            const files = (this.$refs['input-ref'] as HTMLInputElement).files;
            if (files) {
                this.$emit('update:image', files[0])                
            }
        },
        clearImage() {
            this.$emit('update:image', null);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.label {
    flex-grow: 1;
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: dashed 1px gray;
    padding: 5px;
    cursor: pointer;
}

.label:hover {
    background: rgba(0, 0, 0, 0.1);
}

.label:active {
    background: rgba(0, 0, 0, 0.2);
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    padding: 5px;
    border: solid 1px gray;
    border-radius: 20px;
}

.image {
    max-width: 195px;
    max-height: 195px;
    border-radius: 20px;
}

.toolbar {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
</style>