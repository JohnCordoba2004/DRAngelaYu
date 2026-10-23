import express from "express";

const app = express();

//Get
app.get("/", (req, res) => {
  res.send("<h1>Vista General</h1>");
});

//Post
app.post("/register", (req, res) => {
  res.sendStatus(201);
});

//Put
app.put("/user/john", (req, res) => {
  res.sendStatus(200);
});

//patch
app.patch("/user/john", (req, res) => {
  res.sendStatus(200);
});

//delete
app.delete("/user/john", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
