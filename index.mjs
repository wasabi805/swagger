import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Routes
import booksRouter from './routes/Books.ts';


import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'; // you need this load swagger options from yml file 
const swaggerDocument = YAML.load("./openapi.yml")
console.log(swaggerDocument)

// EXPRESS
const app = express();
const router = express.Router();

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const spec = swaggerJsDoc(swaggerDocument)

const PORT = process.env.PORT || 4000;

app.use(
    '/api-docs',  //route
    swaggerUi.serve, // run serve as callback
    swaggerUi.setup(spec)) // specify the specs that will build the UI

//Middlewares
app.use(cors()); 

app.use(express.json()) //json parser
app.use(morgan("dev"))

router.get("/", (req, res)=>{
    res.send('hello')
})

//ROUTER
app.use('/', router)

app.use("/books", booksRouter)

app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))



