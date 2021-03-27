const express = require('express');
const path = require('path');
const axios = require('axios')



const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});




app.listen(port, () => console.log(`Listening on port ${port}`));






