import { useState } from "react";
import React from 'react';

const Inputs = props =>{
    const [anioCurso, setAnioCurso] = useState("");
    const [letraCurso, setLetraCurso] = useState("");
    const [nombreCurso, setNombreCurso] = useState("");
    const [BloquesSemanales, setBloquesSemanales] = useState("");
  
    const handleSubmit = (event) => {
      setNombreCurso(anioCurso+letraCurso)
      console.log(anioCurso);
      console.log(letraCurso);
      console.log(nombreCurso);
      event.preventDefault();
      fetch('http://localhost:5000/cursos', { // cambiar a /cursos
      method: 'POST',
      body: JSON.stringify({
        nombre_curso: nombreCurso,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    })

    }
    if(!props.show){
      return null
    }
    return(
<div className = "shadowMateria">
  <form className="newCursoForm">
    {/* <div className = "alinearX">
        <p onClick = {props.onClose} className = "boton">X</p>
      </div> */}
        <label className="labelsAgregar">Año del curso:</label>
          <input 
            type="number" 
            placeholder="Escribe aqui"
            value={anioCurso}
            className="InputsAgregar"
            onChange={(e) => setAnioCurso(e.target.value)}
          />
        <label className="labelsAgregar">Letra del curso:</label>
          <input 
            type="text" 
            placeholder="Escribe aqui"
            value={letraCurso}
            className="InputsAgregar"
            onChange={(e) => setLetraCurso(e.target.value)}
          />
        <label className="labelsAgregar">Bloques semanales:</label>
          <input 
            type="number" 
            placeholder="Escribe aqui"
            value={BloquesSemanales}
            className="InputsAgregar"
            onChange={(e) => setBloquesSemanales(e.target.value)}
          />
      <div className="botonesAgregar">
        <button onClick={handleSubmit} className = "botonGuardar">Guardar</button>
        <button onClick = {props.onClose} className = "botonCancelar">Cerrar</button>  
      </div>    
        
        </form>
 </div>
    )
}
export {Inputs}
