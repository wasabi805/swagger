import dotenv from "dotenv"

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Low, JSONFile } from 'lowdb'
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from 'swagger-jsdoc';
dotenv.config()
//Routes
import booksRouter from './routes/Books.mjs';

const PORT = process.env.PORT || 4000;

// Create new db
const dataBase = new Low(new JSONFile('db.json'))

//Database instance
const db = {
    ...dataBase,
    indexMsg: 'You are at the index',
  
}
// INITIAL STATE
db.books = []

// swagger options
const options={
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Comics API",
            version: "1.0.0",
            description: "A simple Express Server set up with Swagger"
        }
    },

    //list for all servers you can run swagger against
    servers:[{
        url: "http://localhost:4000"
    }],

    apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)

// EXPRESS
const app = express()
app.use(
    '/api-docs',  //route
    swaggerUI.serve, // run serve as callback
    swaggerUI.setup(specs)) // specify the specs that will build the UI

//do this so we can pass around db later with the router
app.db = db

//Middlewares
app.use(cors());
app.use(express.json()) //json parser
app.use(morgan("dev"))

app.use("/books", booksRouter)

app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))



