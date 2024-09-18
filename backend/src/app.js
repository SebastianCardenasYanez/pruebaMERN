const express = require("express");
const cors = require("cors");
const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hola bienvenido");
})

app.use('/api/usuario', require("./routes/usuario"));

module.exports = app;