import express, {Application} from 'express'
import helmet from 'helmet'
import { router } from '../Routes/post.routes'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
const swaggerUi = require('swagger-ui-express')
const path = require('path')

const swaggerFile = path.join(__dirname, '..','..','swagger-output.json')
console.log(swaggerFile)
const PORT = process.env.PORT || 7070
const options = {
    definition: {
        swagger: "2.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
        },
      ],
    },
    apis: [],
    paths: {
        "/posts": {
          "post": {
            "description": "",
            "parameters": [],
            "responses": {}
          },
          "get": {
            "description": "",
            "parameters": [],
            "responses": {}
          }
        },
        "/posts/{id}": {
          "get": {
            "description": "",
            "parameters": [],
            "responses": {}
          },
          "put": {
            "description": "",
            "parameters": [],
            "responses": {}
          },
          "delete": {
            "description": "",
            "parameters": [],
            "responses": {}
          }
        }
      }
  };




import { db} from '../Config/db.config'
// import { options } from 'joi'

//assigning app to express
const app: Application = express()







//MiddleWares
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
app.use(express.urlencoded({extended: true}))
app.use(helmet())
const spec = swaggerJSDoc(options);
app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(spec))

//routes
app.use('/api/v1', router)

//db connection then server connection
db.then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})