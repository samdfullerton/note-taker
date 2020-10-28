var path = require("path");
var router = require ("express").Router();
var fs =require("fs");
const { patch } = require("./html-routes");
    
router.get("/api/notes",(req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        res.status(200).json(data)
    })
})
router.post("/api/notes", (req, res) => {
  const newNote = req.body //this will be an object that comes from front end requeat
    fs.write("filename", newNote, (err, data) => {


    })
}) 
module.exports = router;