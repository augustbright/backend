import { config } from 'dotenv';
config();
import express from 'express';
import mongoose from 'mongoose';
import PostsRouter from './posts-router.js';
import fileupload from 'express-fileupload';

const port = process.env.PORT ?? 5000;
const app = express();

app.use(fileupload());
app.use(express.json());
app.use('/static', express.static('static'));
app.use('/api/post', PostsRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(port, () => { console.log(`LISTENING ON ${port}`) });
    } catch (e) {
        console.error(e);
    }
};

start();