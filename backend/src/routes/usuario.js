const express = require("express");
const router = express();

const {getUsuario, getAlltUsuario, deleteUsuario, putUsuario, postUsuario, getUsuarioPWD, getUsuarioEmail} = require("../controller/usuarioCotroller");

router.route("/")  
    .get(getAlltUsuario)
    .post(postUsuario)

router.route("/:correo")
    .get(getUsuarioEmail)

router.route("/:contraseña")
    .get(getUsuarioPWD)

router.route("/:id")
    .get(getUsuario)
    .delete(deleteUsuario)
    .put(putUsuario)

module.exports = router;