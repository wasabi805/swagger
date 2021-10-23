import express from "express";
import db from "../db/db.js";
var router = express.Router();
router.get("/", function (req, res) {
    var data = db.data;
    data === null || data === void 0 ? void 0 : data.books.push({ id: 'you', name: 'someoneElse' });
    console.log('YEEEEE', data === null || data === void 0 ? void 0 : data.books);
    res.send("you made it!");
});
router.get("/somewhere", function (req, res) {
    var data = db.data;
    console.log('somewhere else', data === null || data === void 0 ? void 0 : data.books);
    res.send("you made it somewhere else!");
});
export default router;
