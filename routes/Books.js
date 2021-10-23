import express from "express";
import db from "../db/db.js";
var router = express.Router();
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
router.get("/", function (req, res) {
    var data = db.data;
    data === null || data === void 0 ? void 0 : data.books.push({ id: 'you', name: 'someoneElse' });
    console.log('newBook Added', data === null || data === void 0 ? void 0 : data.books);
    res.send("you made it!");
});
router.get("/somewhere", function (req, res) {
    var data = db.data;
    console.log('you can see db persisits at different route', data === null || data === void 0 ? void 0 : data.books);
    res.send("you made it somewhere else!");
});
export default router;
