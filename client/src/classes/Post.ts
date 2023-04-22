export default class Post {
    constructor(
        public _id: string,
        public title: string,
        public author: string,
        public content: string,
        public picture: string | undefined
    ) {}
}