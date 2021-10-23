import express from "express"
import db from "../db/db.js";
const router = express.Router();

// Note: the indentation below HAS TO BE synamticlly be correct in order to display in the ui.
//  see : https://swagger.io/docs/specification/components/
/**
 * @openapi
 * components:
 *  schemas: 
 *      Book:
 *          type:
 *          properties:
 *              id:
 *                  type: string
 *                  description: an auto generated id
 *                  example: d5_gK2ci9
 *              title: 
 *                  type: string
 *                  description: title of the series
 *                  example: The Uncanny X-Men
 *              issueNumber: 
 *                  type: string
 *                  description: the issue number of the title series
 *              artist:
 *                  type: string
 *                  description: name of the author
 *                  example: jim lee
 *              writer:
 *                  type: string
 *                  description: name of the story creator
 *                  example: Garth Enis
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