import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Routes
import booksRouter from './routes/Books.ts';

//SwaggerJsDocs : used to display components schemas
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'; // you need this in order to load swagger options from yml file 
const swaggerDocument = YAML.load("./openapi.yml")
console.log(swaggerDocument)

// EXPRESS
const app = express();
const router = express.Router();

const spec = swaggerJsDoc(swaggerDocument)

app.use(
    '/api-docs',  //route
    swaggerUi.serve, // run serve as callback
    swaggerUi.setup(spec)) // specify the specs that will build the UI

//Middlewares
app.use(cors()); 
app.use(express.json()) //json parser
app.use(morgan("dev"))

//ROUTER
const PORT = process.env.PORT || 4000;
router.get("/", (req, res)=>{
    res.send(`to view swaggerUI, go to :  http://localhost:4000/api-docs/` )
})
app.use('/', router)

app.use("/books", booksRouter)

app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))
