var fs = require("fs");
var util = require("util");
var { v4: uuidv4 } = require("uuid");
const { get } = require("http");

// two methods using promisify against read file and write file.
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

class Note {
  read(){
      return readFileAsync("db/db.json", "utf8")
  }
  write(note){
      return writeFileAsync("db/db.json", JSON.stringify(note))
  } 
  getNotes(){
      return this.read().then(notes => {
          var parseNotes;
          try {
              parseNotes = [].concat(JSON.parse(notes));
              console.log(parseNotes);
          } catch (err) {
              parseNotes = []
          }
          return parseNotes
      })
  }
  addNote(note){
     const {title, text} = note;
     const newNote = {title, text, id: uuidv4()};
     return this.getNotes().then(notes => [...notes, newNote])
     .then(info => this.write(info))
     .then(()=> newNote);
    
  }
  deleteNote(id){
    return this.getNotes().then(notes => notes.filter(item => item.id !== id))
    .then(notes => this.write(notes));
  }
}
module.exports = new Note();