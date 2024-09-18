const {Schema, model} = require("mongoose");

const usuarioSchema = new Schema({
    nombre: String,
    Username: String,
    edad: Number,
    correo: String,
    password: String
})

module.exports = model('usuario', usuarioSchema);