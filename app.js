/* eslint-disable quotes */
/* eslint-disable indent */
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    //If you type "http://localhost:8000/?name=oscar" in your browswer
    //Query starts after the ?
    //Log what we get from our query
    console.log(req.query);
    var name = req.query.name;
    //If there is no name, ask for one
    if(!name){
        name = "(please pass in a parameter in the url above:\nname=yourname)";
    }
    res.send(`Hello Express! Everything is installed and ready to rock and roll! Hello, ${name}`);
});

app.listen(8080, () => {
    console.log('Express server is listening on port 8000');
});
//console.log("works");