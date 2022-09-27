import React, {useEffect} from 'react';
import { useState } from "react";
import {Materia} from "./newMaterias";
import {Editar} from "./editMaterias";
import "./styleMaterias.css";
export {ListaMaterias}

function ListaMaterias() {

const [showMateria,setShowMateria] = useState(false);
const [showEditar,setShowEditar] = useState(false);
const [users, setUsers] = useState();
const [id,setId] = useState(0);

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/materias"
  ).then((response) => response.json());
  setUsers(response);
};

function abrir(value) {
setId(value)
setShowEditar(true);
}

useEffect(() => {
  getApiData();
}, []);

/*const eliminar = (event) => {
    fetch('http://localhost:5000/deleteMateria/'+event, {
      method: 'DELETE',
    })
    .then(res => {
      return res.json()
    }) 
    .then(data => console.log(data))
}*/
    return (
<div className="lista">
    <Materia onClose = {()=> setShowMateria(false)} refresh = {getApiData()} show = {showMateria}/>
    <Editar onClose = {()=> setShowEditar(false)} refresh = {getApiData()} show = {showEditar} id_materia = {id}/>
    <div>
        <ul className='uli'>
           {users && users.map((user) => (
           <div>
                <li className='liliana'><div onClick={()=>abrir(user.id_materia)} className = "nombres">{user.nombre_materia}</div><div /*onClick = {eliminar(user.id_materia)}*/>X</div></li>      
           </div>
             ))}
        </ul>
    </div>
        <button className = "botonAgregar" onClick={()=> setShowMateria(true)}>Nueva materia</button>
</div>
    )}