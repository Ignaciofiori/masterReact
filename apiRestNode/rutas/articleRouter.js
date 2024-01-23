const express = require('express');
const router = express.Router();
const articleController = require('../controladores/articleController');
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./imagenes/articulos")
    },
    filename: function (req, file, cb) {
        cb(null, "articulo" + Date.now() + file.originalname)

    }
})

const subidas = multer({ storage: storage })

router.get('/:ultimos?', articleController.conseguirArticles);
router.get('/uno/:id', articleController.conseguirUnArticulo);
router.get("/imagen/:fichero",articleController.getImagen)
router.get("/buscar/:busqueda",articleController.articleFinder)

router.post("/", articleController.crearArticulo)
router.post("/subir-imagen/:id", [subidas.single("file0")], articleController.subirImagen)

router.put("/:id", articleController.editarArticulo)

router.delete("/:id", articleController.borrarArticulo)

module.exports = router;
