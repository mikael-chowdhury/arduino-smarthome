const express = require("express");
const app = express();
const Host = require("socket.engine").host;

const h = new Host();
h.start();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/setpin/", (req, res) => {
  const body = req.body;

  console.log(body);

  console.log(h);

  h.write_ALL("setpin", "test");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
