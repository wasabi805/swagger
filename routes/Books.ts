import express from "express"
import db from "../db/db.js";
const router = express.Router();



// Note: the indentation here has to synamticlly be correct in order to display in the ui.
//see : https://swagger.io/docs/specification/components/
/**
 * @openapi
 * components:
 *  schemas: 
 *      Book:
 *          type:
 *          properties:
 *              id:
 *                  type: string
 *                  title: string
 */
               
 

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