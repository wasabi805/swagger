import express from "express";
import db from 
var router = express.Router();
var idLength = 8;


router.get("/", function (req, res) {
    res.send("you made it!");
});

export default router;
