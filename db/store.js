const path = require("path");
const fs = require("fs");

const addNote = function (note, noteArr) {
  const newNote = note;
  noteArr.push(newNote);
  fs.writeFileSync(
    path.join(_dirname, "./db.json"),
    JSON.stringify({ noteArr }, null, 2)
  );
};


module.exports = addNote;
