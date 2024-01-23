const mongoose = require("mongoose")

const conexion = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://ignacio:codigosamurai123@cluster0.tki11s7.mongodb.net/?retryWrites=true&w=majority")

        console.log("Conexion exitosa a la base de datos ")
    }catch(error){
        console.log(error)
        throw new Error("Error en la Conexion a la Base de Datos")
    }
}


module.exports = {
    conexion
}