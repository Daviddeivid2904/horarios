import { useState } from "react";
import React from 'react';
import "./styleMaterias.css"
export {Materia}

function Materia(){
    const [nombreMateria, setNombreMateria] = useState("");
    const [horas, setHoras] = useState(0);
    const [seguida, setSeguida] = useState(false);
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(seguida)
      alert(`la materia: ${nombreMateria} tendra ${horas} bloques por semana y ${seguida}`)
    }
    return(
<form onSubmit={handleSubmit}>
      <label>ingrese nombre de la materia:
        <input 
          type="text" 
          value={nombreMateria}
          onChange={(e) => setNombreMateria(e.target.value)}
        />
      </label>
      <button>Enviar</button>

      <br></br>  <br></br>  <br></br>

      <label>horas por semana:
        <input 
          type="number" 
          min = "1"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />
      </label>
      
      <br></br>  <br></br>  <br></br>

      <label> puede ser seguida ?
        <input 
          type="checkBox" 
          value={seguida}
          onChange={(e) => setSeguida(e.target.checked)}
          checked = {seguida}
        />
      </label>
    </form>
    )
}