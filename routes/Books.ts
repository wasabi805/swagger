import express from "express"
import db from "../db/db.js";
const router = express.Router();

router.get("/", (req, res) => {
    const data = db.data
    data?.books.push({id: 'you' , name: 'someoneElse'})
    console.log('newBook Added' , data?.books)
    res.send( `you made it!` )
})

router.get("/somewhere", (req, res) => {
    const data = db.data
    console.log('you can see db persisits at different route' , data?.books)
    res.send( `you made it somewhere else!` )
})



export default router