const path = require('path');
const express = require('express');
const app = express();
const port = 3078;

app.use(express.static('fonts'));

app.listen(port, () => 
{
    console.log(`KW Icons theme served on port ${port}`)
});