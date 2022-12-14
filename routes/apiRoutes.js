const router = require("express").Router;
let {noteArr} = require("../Develop/db/db.json");
const addNote = require("../Develop/db/store");

router.get("/notes", (req, res) => {
  let results = noteArr;
  res.json(results);
});

router.post("/notes", (req, res) => {
  if (noteArr) {
    req.body.id = noteArr.length.toString();
  } else {
    req.body.id = 0;
  }
  res.json(addNote(req.body, noteArr));
});

module.exports = router;
