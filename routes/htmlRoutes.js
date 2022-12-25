const path = require('path');
const router = require('express').Router;
let noteArr = require('../db/db');
const 

//get routes that return notes and index pages.
router.get('/notes'. (req, res) => {
    let results = noteArr;
    res.json(result)
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;
