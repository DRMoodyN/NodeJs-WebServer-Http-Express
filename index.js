const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(5000, () => {
    console.log(`Servidor http://localhost:5000`);
});