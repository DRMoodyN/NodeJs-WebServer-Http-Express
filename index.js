const express = require("express");
const app = express();

app.use(express.static("public"));

app.use("/generic", (req, res) => {
    res.sendFile(__dirname + "/public/generic.html");
});

app.use("/elements", (req, res) => {
    res.sendFile(__dirname + "/public/elements.html");
});

app.use("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});

app.listen(5000, () => {
    console.log(`Servidor http://localhost:5000`);
});