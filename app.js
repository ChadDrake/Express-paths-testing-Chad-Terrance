/* eslint-disable indent */
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello Express! Everything is installed and ready to rock!');
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
});
//console.log("works");