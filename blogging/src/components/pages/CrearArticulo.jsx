import React from 'react'
import { useState,useEffect } from 'react'
import {useForm} from "../../hooks/useForm"
import {Peticion} from "../../helpers/Peticion"
import {Global} from "../../helpers/Global"
import { useNavigate } from 'react-router-dom';


export const CrearArticulo = () => {

  const navegar = useNavigate()

  const {formulario,enviado,cambiado} = useForm({})
  const [resultado,setResultado] = useState("noEnviado")

  const guardarArticulos = async(e)=>{
    e.preventDefault();
    //RECOGER DATOS DEL FORMULARIO
    let nuevoArticulo = formulario

    //GUARDAR ARTICULO EN EL BACKEND
    const {datos,cargando}= await Peticion(Global.url+"articles","POST",nuevoArticulo);
    
      if(datos.status =="success"){
        setResultado("enviado");
        
        //subir Imagen
        const fileInput = document.querySelector("#file")
        
        const formData = new FormData();
        formData.append("file0",fileInput.files[0])
       
        const subidaImagen = await Peticion(Global.url+"articles/subir-imagen/"+datos.articulo._id,"POST",formData,true);
   
        if(subidaImagen.datos.status == "success"){
          setResultado("enviado")
          navegar("/articulos")
        }else{
          setResultado("error");
        }
      }
      else{
        setResultado("error");
      }
     
  }

  return (
    <div className='jumbo'>
      <h3>Crear Nuevo Artículo</h3>
     
    <strong> {resultado =="enviado" ? "Articulo Creado Con Éxito":""}</strong>
    <strong className='noEncontrado'> {resultado=="error" ? "Los Datos Proporcionados estan Incompletos o Contienen Algún Error.":""}</strong>
     
     <form className='formulario' onSubmit={guardarArticulos}>
        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} />  
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name='contenido'onChange={cambiado} />  
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
         <input type="file" id='file' name="file0" />  
        </div>

        <input type="submit" value="Guardar" className='btn btn-success'/>

      </form>
    </div>
  )
}
