/* eslint-disable quotes */
/* eslint-disable indent */
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  //If you type "http://localhost:8000/?name=oscar" in your browser
  //Query starts after the ?
  //Log what we get from our query
  console.log(req.query);
  var name = req.query.name;
  //If there is no name, ask for one
  if (!name) {
    name = "(please pass in a parameter in the url above:\nname=yourname)";
  }
  res.send(
    `Hello Express! Everything is installed and ready to rock and roll! Hello, ${name}`
  );
});

app.get("/cipher", (req, res) => {
  const text = req.query.text;
  const shift = parseInt(req.query.shift);
  let textCipherArr = [];
  let textCipherEncryptedArr = [];
  for (let i = 0; i < text.length; i++) {
    textCipherArr.push(text[i].charCodeAt(0) + shift);
  }
  for (let i = 0; i < textCipherArr.length; i++) {
    textCipherEncryptedArr.push(String.fromCharCode(textCipherArr[i]));
  }
  textCipherEncryptedArr = textCipherEncryptedArr.join("");
  res.send(textCipherEncryptedArr);
});

app.get("/lotto", (req, res) => {
  const userNumbers = req.query.arr;
  let lotto = [];
  for (let i = 0; i < 6; i++) {
    lotto.push(Math.floor(Math.random() * Math.floor(20)));
  }
  let matches = 0;
  for (let i = 0; i < 6; i++) {
    if (parseInt(userNumbers[i]) === lotto[i]) {
      matches = matches + 1;
    }
  }
  let result = "";
  if (matches < 4) {
    result = "Sorry, you lose again";
  } else if (matches === 4) {
    result = "Congratulations, you win a free ticket";
  } else if (matches === 5) {
    result = "Congratulations! You win $100!";
  } else if (matches === 6) {
    result = "If only this were a real ticket...";
  }
  res.send(result);
});

app.get("/sum", (req, res) => {
  console.log(req.query);
  console.log("/sum endpoint");
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = a + b;
  res.send(JSON.stringify(result));
});

app.listen(8080, () => {
  console.log("Express server is listening on port 8080");
});
//console.log("works");
