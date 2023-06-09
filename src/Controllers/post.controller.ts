//import modules
import { postServices } from '../Services/post.service'
import { Request, Response } from 'express'
import {PostSchemaValidate} from '../Models/posts'

class postController {
    //add post controller
    
    addPost = async (req: Request, res: Response) => {
          /*  #swagger.tags = ['Post']
            #swagger.description = 'Endpoint to create a post.' */
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        }
        //validating the request
        const {error, value} = PostSchemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const post = await postServices.createPost(value)
            res.status(201).send(post)          
        }
        
    }

    //get all posts
    getPosts = async (req: Request, res: Response) => {
           /*  #swagger.tags = ['Post']
            #swagger.description = 'Endpoint to get all posts.' */
        const posts = await postServices.getPosts()
        res.send(posts)
    }


    //get a single post
    getAPost = async (req: Request, res: Response) => {
          /*  #swagger.tags = ['Post']
            #swagger.description = 'Endpoint to get a post by id.' */
        const id = req.params.id
        const post = await postServices.getPost(id)
        res.send(post)
    }

    //update post
    updatePost = async (req: Request, res: Response) => {
                   /*  #swagger.tags = ['Post']
            #swagger.description = 'Endpoint to update a post by id.' */
        const id = req.params.id
       const post = await postServices.updatePost(id, req.body)  
        res.send(post)
    }


    //delete a post
    deletePost = async (req: Request, res: Response) => {
                /*  #swagger.tags = ['Post']
            #swagger.description = 'Endpoint to delete a post by id.' */
        const id = req.params.id
        await postServices.deletePost(id)
        res.send('post deleted')
    }

}

//export class
export const PostController = new postController()