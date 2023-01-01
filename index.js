const express = require("express");
const hbs = require("hbs");
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + "/views/partials", function (error) {

})

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    });
})

app.get("/generic", (req, res) => {
    res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
    res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});

app.listen(5000, () => {
    console.log(`Servidor http://localhost:5000`);
});