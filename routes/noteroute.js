const { fstat } = require('fs');
const path = require('path');
const router = require('express').Router();
// const displayNote = (data) => {
//     fs.readFileSync("./db/db.json", JSON.parse(data))
// }

router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
router.post("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
// router.get("/notes", (req,res) => {
//     res.displayNote(data);
// })

module.exports = router