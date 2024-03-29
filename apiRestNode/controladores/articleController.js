const Article = require("../modelos/Article")
const articulosHelper = require("../helpers/articulosHelper")
const fs = require("fs")
const path = require("path")

const articleController = {
    prueba: (req, res) => {
        return res.status(200).send({ mensaje: "hola" })
    },

    crearArticulo: async (req, res) => {
        //Recoger Datos para Guardar
        let parametros = req.body
        console.log(parametros)
        //Validar Datos
        try {
            articulosHelper.validarDatos(parametros)

        } catch (error) {
            return res.status(400).json({
                status: "error",
                mensaje: "Faltan datos Por Enviar"
            })
        }
        // Crear objeto a Guardar
        try {
           
            const articulo = new Article(parametros);
            //Guardar Articulo
            const articuloGuardado = await articulo.save();
            //Response
            return res.status(200).json({
                status: "success",
                mensaje: "Se Guardo Exitosamente el articulo",
                articulo: articuloGuardado

            })
        } catch (error) {
            return res.status(400).json({
                status: "error",
                mensaje: "Error al Guardar los datos"
            })
        }
    },

    subirImagen: async (req, res) => {
        
        if (req.file == undefined) {
            //si no tiene filename
            let fileName = "default.png"
            //Actualizar Articulo
            let articuloId = req.params.id

            let articulo = await Article.findOneAndUpdate({ _id: articuloId }, { imagen: fileName }, { new: true })


            //respuesta exitosa
            return res.status(200).json({
                status: "success",
                mensaje: "Imagen Subida Exitosamente",
                articulo,
                file: req.file,
            })

        } else  {
            console.log(req.file)
            //nombre ARCHIVO
            let fileName = req.file.originalname

            //consigo extension del archivo
            let fileSplit = fileName.split(".")
            let extensionFile = fileSplit[1]
            console.log(extensionFile)

            //validacion de la extension
            if ((extensionFile != "png" && extensionFile != "jpeg"  && extensionFile != "gif" && extensionFile != "jpg") ) {

                //borrar archivo invalido
                fs.unlink(req.file.path, (error) => {

                    //dar respuesta
                    return res.status(400).json({
                        status: "error",
                        mensaje: "Extension De Archivo Invalido"
                    })
                });

            }

            else {
                //Actualizar Articulo
                let articuloId = req.params.id

                let articuloEditado = await Article.findOneAndUpdate({ _id: articuloId }, { imagen: req.file.filename }, { new: true })


                //respuesta exitosa
                return res.status(200).json({
                    status: "success",
                    mensaje: "Imagen Subida Exitosamente",
                    articuloEditado,
                    file: req.file,
                })
            }
        }
    },

    conseguirArticles: async (req, res) => {

        try {
            let consulta = await Article.find().sort({ fecha: -1 })

            if (req.params.ultimos) {
                let consulta = await Article.find().sort({ fecha: -1 }).limit(3);

                return res.status(200).json({
                    status: "success",
                    articulos: consulta,
                    contador: consulta.length
                })
            }

            return res.status(200).json({
                status: "success",
                articulos: consulta,
                contador: consulta.length
            })

        } catch (error) {
            return res.status(404).json({
                status: "error",
                mensaje: "No Se Han Encontrado Articulos"
            })
        }
    },

    conseguirUnArticulo: async (req, res) => {
        try {
            //recoger id por url
            let id = req.params.id
            //metodo para buscar articulo
            let consulta = await Article.findById(id)

            return res.status(200).json({
                status: "success",
                articulos: consulta
            })

        } catch (error) {
            return res.status(404).json({
                status: "error",
                mensaje: "No Se Han Encontrado Articulos"
            })
        }
    },

    borrarArticulo: async (req, res) => {
        try {
            let id = req.params.id

            let articulo = await Article.findById(id)
            await Article.findOneAndDelete({ _id: id })

            return res.status(200).json({
                status: "success",
                mensaje: "Articulo Borrado Exitosamente",
                articulo

            })

        } catch (error) {
            return res.status(400).json({
                status: "error",
                mensaje: "No Se Ha podido Borrar el Articulo"
            })
        }
    },

    editarArticulo: async (req, res) => {

        try {
            let id = req.params.id
            let parametros = req.body


            try {
                
            }
            catch {

                return res.status(400).json({
                    status: "error",
                    mensaje: "Faltan datos Por Enviar"
                })
            }


            let articuloEditado = await Article.findOneAndUpdate({ _id: id }, parametros, { new: true })

            return res.status(200).json({
                status: "success",
                mensaje: "Articulo Editado Exitosamente",
                articuloEditado
            })
        }
        catch (error) {
            return res.status(400).json({
                status: "error",
                mensaje: "No se Pudo Editar el Articulo",

            })

        }

    },

    getImagen: (req, res) => {
        let fichero = req.params.fichero;
        let rutaFisica = "./imagenes/articulos/" + fichero;
        //compruebo si existe el fichero en la ruta que le estoy pasando
        fs.stat(rutaFisica, (error, existe) => {
            if (existe) {
                return res.sendFile(path.resolve(rutaFisica))
            } else {
                return res.status(404).json({
                    status: "error",
                    mensaje: "La Imagen No Existe"
                })
            }
        })
    },
    articleFinder: async (req, res) => {
        try {
            //string de busqueda 
            let busqueda = req.params.busqueda;
            //Find o OR
            let busquedaArticulos = await Article.find({
                "$or": [
                    { "titulo": { "$regex": busqueda, "$options": "i" } },
                    { "contenido": { "$regex": busqueda, "$options": "i" } }
                ]
            })
                .sort({ fecha: -1 })

            if (busquedaArticulos.length == 0) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "No Se Han Encontrado Articulos"
                })
            }
            
            return res.status(200).json({
                status: "success",
                articulos: busquedaArticulos
            })

        } catch (error) {

            return res.status(404).json({
                status: "error",
                mensaje: "No Se Han Encontrado Articulos"
            })
        }

    }
}

module.exports = articleController