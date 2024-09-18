const usuarioCtrl = {}

const Usuario = require("../models/usuario");

usuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario)
}

usuarioCtrl.getAlltUsuario = async(req, res) => {
    const usuario = await Usuario.find({})
    res.json(usuario)
}

usuarioCtrl.postUsuario = async(req, res) => {
    const {nombre, Username, edad, correo, password} = req.body;
    const newUsuario = new Usuario({
        nombre: nombre,
        Username: Username,
        edad: edad,
        correo: correo,
        password : password
    })
    await newUsuario.save();
    res.json({message: "user created succesfulled"})
}

usuarioCtrl.deleteUsuario = async(req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.json(usuario)
}

usuarioCtrl.putUsuario = async(req, res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: "user update"})
}

usuarioCtrl.getUsuarioPWD = async(req, res) => {
    const usuario = await Usuario.find(req.params.contraseña)
    res.json(usuario)
}

usuarioCtrl.getUsuarioEmail = async(req, res) => {
    const usuario = await Usuario.find(req.params.correo)
    res.json(usuario)
}

module.exports = usuarioCtrl;