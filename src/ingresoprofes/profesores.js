import React from 'react';
import { useState } from "react";
import {Inputs} from "./nuevoProfes";
import "./styleProfes.css";
export {ListaProfes}

function ListaProfes() {

const [show,setShow] = useState(false);

const [profesores, setprofesores] = useState([]);
const [input, setInput] = useState("");

const addprofe = (profe) => {
  const newprofe = {
    id: Math.random(),
    profe: profe,
  };

  setprofesores([...profesores, newprofe]);

  setInput("");
};

    return (
<div>
    <Inputs onClose = {()=> setShow(false)} show = {show}/>
    <div>
      <h1>Profesores</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addprofe(input)}>Add</button>
      <ul>
        {profesores.map((profe) => (
          <li key={profe.id}>
            {profe.profe}
          </li>
        ))}
      </ul>
    </div>
    <div className = "newProfesor">
        <button className = "botonProfesor" onClick={()=> setShow(true)}>Nuevo profesor</button>
    </div>
</div>
    )}