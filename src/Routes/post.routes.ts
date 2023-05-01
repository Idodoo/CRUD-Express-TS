// importing modules
import express from "express";
import { PostController } from "../Controllers/post.controller";

//initiating  the router
export const router = express.Router()

// add post route
router.post('/posts',PostController.addPost)

//get posts
router.get('/posts',PostController.getPosts)

// get single post
router.get('/posts/:id',PostController.getAPost)

// update a post
router.put('/posts/:id',PostController.updatePost)

// delete a post
router.delete('/posts/:id',PostController.deletePost)