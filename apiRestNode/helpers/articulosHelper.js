const validator = require("validator")

const articulosHelper = {
    validarDatos: (parametros) => {

        let validarTitulo = !validator.isEmpty(parametros.titulo)
        let validarContenido = !validator.isEmpty(parametros.contenido)

        if (!validarContenido || !validarTitulo) {
            throw new Error("NO SE HA VALIDADO LA INFO")




        }
    }
}

module.exports = articulosHelper