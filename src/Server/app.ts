import express, {Application} from 'express'
import helmet from 'helmet'
import { router } from '../Routes/post.routes'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
const swaggerUi = require('swagger-ui-express')
const path = require('path')
//const swaggerFile = require('../swagger-output.json')
 

const PORT = process.env.PORT || 7070

import { db} from '../Config/db.config'

//assigning app to express
const app: Application = express()







//MiddleWares
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
app.use(express.urlencoded({extended: true}))
app.use(helmet())
// app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//routes
app.use('/api/v1', router)

//db connection then server connection
db.then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})