const path = require("path");
const fs = require("fs");

const addNote = function (note, notesArr) {
  const newNote = note;
  notesArr.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "./db.json"),
    JSON.stringify({ notesArr }, null, 2)
  );

  return newNote;
};


module.exports = addNote;
