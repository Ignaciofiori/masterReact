//REQUIRES
const { conexion } = require("./database/conexion");
const express = require("express");
const app = express();
const cors = require("cors")
const articleRouter = require("./rutas/articleRouter")

//INICIALIAR APP
console.log("App de Node Incializada");

//CONECCION A LA BASE DE DATOS
conexion();

//***** MIDDLEWARES
//configurar corse
app.use(cors())
//recibir datos con content type app/json
app.use(express.json())
//recibir datos con form-urlencoded (postman)
app.use(express.urlencoded({ extended: true }))

//RUTAS
app.use("/api/articles", articleRouter)


//LISTENER / SERVIDOR DE NODE
app.listen(4000, () => {
    console.log("Servidor Levantado Correctamente en el puerto 3900")
})