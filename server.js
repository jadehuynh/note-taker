const express = require('express');
const apiRoutes = require('./routes/apiroutes.js');
const noteRoutes = require('./routes/noteroute.js')
const path = require('path')
// const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/", apiRoutes)
app.use("/", noteRoutes)
app.listen(PORT, () => console.log(`Listening on PORT: PORT`));

