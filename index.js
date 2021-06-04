const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";

// TODO: With more time, extract to another file and improve guard clause.
function fib(n) {
  if(isNaN(n)){
    return "Bad Value"
  }

  return n < 2 ? n : fib(n - 1) + fib(n - 2);
  }

app.get("/", (req, res) => {
  res.status(200).send("Provide Route parameter to receive the nth value in a Fibonacci sequence. ie: {URL}/5");
});


// TODO: Add better error handling
app.get("/:id", (req, res) => {
  const fibNum = req.params.id
  res.status(200).send(JSON.stringify({ NthValue: fib(fibNum) }));
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});