import express from "express"

import { nanoid } from "nanoid" //generates ids

const router = express.Router();

const idLength = 8;

router.get("/", (req, res)=>{
    const { db } = req.app
    const {indexMsg, books} =  db
    console.log(db)
    res.send( `${ indexMsg } | you made it` )
  
})

//Find book by id
router.get("/:id", (req, res)=>{
    const book = req.app.db.get("books").find({id: req.params.id }).value()

    res.send(book)
})

//Add a book
router.post("/add", (req, res)=>{
    try{
        const book = {
            id: nanoid(idLength),
            ...req.body
        }

        req.app.db.get("books").push(book).write()

    }catch(error){
        return res.status(500).send(error)
    }
})

//update book
router.put('/:id', (req, res)=>{
    try{
        const { db } = res.app
        // first, we write the data to also contain the updated book data...
        db.get("books").find({id:req.params.id}).assign(req.body)// loqdb method that allows us to merge the update book data in req.body to db.books
        .write()

        //second, we send the updated data we just wrote
        res.send(db.get("books")).find({id: req.params})

    }catch(error){
        return res.status(500).send(error)
    }
})

//delete book
router.delete('/:id', (req,res)=>{
    res.app.db.get("books").remove({id: req.params.id}).write()
    res.sendStatus(200)
})

export default router