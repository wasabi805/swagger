import dotenv from "dotenv"

import express from "express";
import cors from "cors";
import morgan from "morgan";

import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config()
import { db } from './db/db.ts'
console.log(db)
// set initial data 
// db.data =  db.data || { books: [] }

//Database instance
// const db = {
//     ...dataBase,
//     indexMsg: 'You are at the index', 
// }

//Routes
import booksRouter from './routes/Books.mjs';
import { type } from "os";


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
const PORT = process.env.PORT || 4000;

app.use(
    '/api-docs',  //route
    swaggerUI.serve, // run serve as callback
    swaggerUI.setup(specs)) // specify the specs that will build the UI

//do this so we can pass around db later with the router
// app.db = db
// console.log(db)

//Middlewares
app.use(cors());
app.use(express.json()) //json parser
app.use(morgan("dev"))

app.use("/books", booksRouter)

app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))



