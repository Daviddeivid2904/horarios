import { useState } from "react";
import React from 'react';
import "./styleMaterias.css"

const Materia = props =>{
    const [nombreMateria, setNombreMateria] = useState("");
    const [horas, setHoras] = useState(1);
    const [seguida, setSeguida] = useState(false);
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(seguida)
      fetch('http://localhost:5000/infoMateria', {
      method: 'POST',
      body: JSON.stringify({
        nombre_materia: nombreMateria,
        continuidad: seguida,
        horas_por_semana:horas,
      }),
      headers: {
        'Content-Type': 'application/json'// AQUI indicamos el formato
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
  <form>
  <div className="materiabody">
        <label className="labelsAgregar">Nombre de la materia:</label>
          <input 
            className="InputsAgregar"
            placeholder="Escribe aqui"
            type="text" 
            value={nombreMateria}
            onChange={(e) => setNombreMateria(e.target.value)}
          />

        <label>
          <input 
            type="checkBox" 
            value={seguida}
            onChange={(e) => setSeguida(e.target.checked)}
            checked = {seguida}
          />
          Puede ser continua?
        </label>
        <br></br>
        <label className="labelsAgregar">Horas por semana:</label>
          <input 
           className="InputsAgregar"
           placeholder="Escribe aqui"
            type="number" 
            min = "1"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />

        <div className="botonesAgregar">
        <button onClick={handleSubmit} className = "botonGuardar">Guardar</button>
        <button onClick = {props.onClose} className = "botonCancelar">Cerrar</button>  
        </div>   
        </div>
        </form>
 </div>
    )
}
export {Materia}
