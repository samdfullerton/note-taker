var note = require("../db/notes")
var router = require("express").Router();
var fs = require("fs");
var path = require("path");

router.get("/notes", (req, res) => {
    note.getNotes()
    .then(notes => {
      console.log(notes);
      res.json(notes)
    })
    .catch(err => res.status(500).json(err))
});

router.post("/notes", (req, res) => {
  note.addNote(req.body)
  .then(notes => {
    console.log(notes);
    res.json(notes)
  })
  .catch(err => res.status(500).json(err))
  }) 

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  note.deleteNote(id)
  .then(()=> res.json({ok: true}))
  .catch(err => res.status(500).json(err))
})
module.exports = router;