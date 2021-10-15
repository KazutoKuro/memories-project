import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


export default router;