const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const displayNote = (data) => {
    fs.readFileSync("./db/db.json", JSON.parse(data))
}

router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// router.post("/notes", (req,res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"))
//     displayNote(req.body);
// })
// router.get("/notes", (req,res) => {
//     res.displayNote(ata);
// })
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router