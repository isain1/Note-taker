const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFil(path.join(_dirname, '../public/index.html'))
})

module.exports = router;