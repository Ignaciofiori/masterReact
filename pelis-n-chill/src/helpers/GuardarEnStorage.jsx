export const GuardarEnStorage = (claveElemento,elemento) =>{
    //Conseguir elementos dentro del sotrage
    let  elementos = JSON.parse(localStorage.getItem(claveElemento))
    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //añadir elemento nuevo si es un array
      elementos.push(elemento)
    }else{
      //crear array con la nueva peli si no es un array
      elementos = [elemento]
    }
    //guardar en el storage
    localStorage.setItem(claveElemento,JSON.stringify(elementos))
    //devolver objeto guardado
    return elemento
    }