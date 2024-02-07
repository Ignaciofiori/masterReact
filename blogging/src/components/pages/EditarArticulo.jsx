import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from "../../hooks/useForm"
import { Peticion } from "../../helpers/Peticion"
import { Global } from "../../helpers/Global"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const EditarArticulo = () => {

  const params = useParams();
  const navegar = useNavigate();

  const { formulario, enviado, cambiado } = useForm({})
  const [resultado, setResultado] = useState("noEnviado")
  const [articulo, setArticulo] = useState({});



  useEffect(() => {
    conseguirArticulo();
  }, []);



  const conseguirArticulo = async () => {
    const url = Global.url + "articles/uno/" + params.id

    const { datos } = await Peticion(url, "GET");

    if (datos.status == "success") {
      setArticulo(datos.articulos);

    }

  }

  const editarArticulos = async (e) => {
    e.preventDefault();
    
    //RECOGER DATOS DEL FORMULARIO
    let nuevoArticulo = formulario

    //GUARDAR ARTICULO EN EL BACKEND
    const { datos } = await Peticion(Global.url + "articles/"+ articulo._id, "PUT", nuevoArticulo);


    //CONFIRMO QUE LA PETICION SEA exitosa
    if (datos.status == "success") {
      setResultado("enviado");
      navegar("/articulo/" + params.id)
    }else {
      setResultado("error");
    }

      //subir Imagen
      const fileInput = document.querySelector("#file")

if (datos.status == "success" && fileInput.files[0] ){

  
  const formData = new FormData();
  formData.append("file0", fileInput.files[0])

  const subidaImagen = await Peticion(Global.url + "articles/subir-imagen/" + articulo._id, "POST", formData, true);
  console.log(subidaImagen)

  if (subidaImagen.datos.status == "success") {
    console.log(articulo)
    
    navegar("/articulos")
  } else {
    setResultado("error");
  ;
  }
}

}

    

  

  return (
    <div className='jumbo'>
      <h3>Editar Artículo</h3>

      <strong> {resultado == "enviado" ? "Articulo Editado Con Éxito" : ""}</strong>
      <strong className='noEncontrado'> {resultado == "error" ? "Los Datos Proporcionados estan Incompletos o Contienen Algún Error." : ""}</strong>

      <form className='formulario' onSubmit={editarArticulos}>
        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} defaultValue={articulo.titulo} />
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          
          <div className='mascara'>
            {articulo.imagen == "default.png" &&
              <>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81dQ4l8Z8Wlui4ALzrIXSO0bzTzYvst2GH4tDuwqQ4_m5KdI6I3tEQrjXLss1O42O0aI&usqp=CAU" alt="imagen" />
                <strong className='noEncontrado'>Es Posible que no Hayas Seleccionado una Imagen para tu Articulo, o que el archivo que seleccionaste no sea compatible (JPG,JPEG,PNG O GIF)</strong>
              </>}

            {articulo.imagen != "default.png" && <img src={Global.url + "articles/imagen/" + articulo.imagen} alt="imagen" />}
            <input type="file" id='file' name="file0" />

          </div>
        </div>

        <input type="submit" value="Guardar" className='btn btn-success' />

      </form>
    </div>
  )
}
