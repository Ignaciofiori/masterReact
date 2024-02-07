import React from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from "../../helpers/Peticion"
import { Link } from "react-router-dom"
export const Listado = ({ articulos, setArticulos }) => {

  const eliminar = async (id) => {
    let { datos } = await Peticion(Global.url + "articles/" + id, "DELETE")

    console.log(articulos)

    if (datos.status == "success") {
      0
      let articulosActualizados = articulos.filter(articulo => { return articulo._id !== id })
      setArticulos(articulosActualizados);
    }
  }


  return (

    articulos.map((articulo, i) => {
      console.log(articulo._id)
      const contenidoCorto = articulo.contenido.length > 1000 ? `${articulo.contenido.substring(0, 1000)}...` : articulo.contenido;

      return (
        <article key={i + articulo.titulo} className="articulo-item">
          
          <div className='mascara'>
            
            {articulo.imagen == "default.png" && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81dQ4l8Z8Wlui4ALzrIXSO0bzTzYvst2GH4tDuwqQ4_m5KdI6I3tEQrjXLss1O42O0aI&usqp=CAU" alt="imagen" />}
            
            {articulo.imagen != "default.png" && <img src={Global.url + "articles/imagen/" + articulo.imagen} alt="imagen" />}
          
          </div>
          
          <div className='datos'>
            
            <h3 className="title"><Link to={"/articulo/" + articulo._id}>{articulo.titulo}</Link></h3>
            
            <p className="description">{contenidoCorto}</p>
            
            <Link to={"/editar/" + articulo._id}> <button className="edit" >Editar</button> </Link>
            <Link to={"/articulo/" + articulo._id}> <button className="edit" >Leer Más</button></Link>
            <button className="delete"
              onClick={() => { eliminar(articulo._id) }}>Borrar
            </button>
          </div>
        </article>
      );
    })
  )

}