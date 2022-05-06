const router = require('express').Router();
const data = require('../db/db.json');
const fs = require('fs')
const uuid = require('uuid')
const path = require('path')
const exportData = (data) => {
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
}
router.get("/api/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
})

router.post("/api/notes", (req,res) => {
    const notes = req.body
        notes.id = uuid.v4()
        data.push(notes)
    exportData(data);
        res.sendFile(path.join(__dirname, "../db/db.json"))
});

module.exports = router