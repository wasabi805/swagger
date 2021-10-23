import express from "express";
import db from "../db/db.js";
var router = express.Router();
// Note: the indentation below HAS TO BE synamticlly be correct in order to display in the ui.
//  see : https://swagger.io/docs/specification/components/
/**
 * @openapi
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              -title
 *
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
/**
 * @openapi
 *  /books:
 *      get:
 *          description: Welcome to swagger-jsdoc!
 *          responses:
 *              200:
 *                  description: Spawn's Necroplasm -The true source of the costume is the necroplasm in Spawn's body, from which it feeds. It is possible for Spawn to draw this energy back when he needs it, using it to power his abilities without draining his own reserves.
 */
router.get("/", function (req, res) {
    var data = db.data;
    res.send(data === null || data === void 0 ? void 0 : data.books);
});
router.get('/somewhere', function (req, res) {
    var data = db.data;
    console.log('you can see db persisits at different route', data === null || data === void 0 ? void 0 : data.books);
    res.send("you made it somewhere else!");
});
export default router;
