import React,{Fragment} from "react";

const MiComponente = () => {

let nombre= "Ignacio"
let web = "www.ignaciofiori.com"
let usuario={
    nombre:"ignacio",
    apellidos:"fiori",
    edad:"24"
}
    return(
        <div>
            <hr/>
            <h1>{nombre}</h1>
            <h2>{web}</h2>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellidos}</li>
                <li>Edad: {usuario.edad}</li>
            </ul>
        </div>
    )
}


export default MiComponente