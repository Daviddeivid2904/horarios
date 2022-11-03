import React, {useEffect} from 'react';
import { useState } from "react";
import {Inputs} from "./newCurso";
import "./styleCursos.css";
export {ListaCursos}

function ListaCursos() {

const [show,setShow] = useState(false);
const [users, setUsers] = useState();

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/profesores" //cambiar a /GetCursos
  ).then((response) => response.json());
  setUsers(response);
};

useEffect(() => {
  getApiData();
}, []);


const eliminar = (event) => {
    fetch('http://localhost:5000/deleteProfe/'+event, { // que delfi cree un delete de cursos
      method: 'DELETE',
    })
    .then(res => {
      return res.json()
    }) 
    .then(data => console.log(data))
}


    return (
<div className="lista">
    <Inputs onClose = {()=> setShow(false)} refresh = {getApiData()} show = {show}/>
    <div>
        <ul className='uli'>
           {users && users.map((user) => (
             <div className = "cont">
                   <li className='liliana'><div className = "nombres">{user.nombre_curso}</div><div className = "equis" onClick = {() => eliminar(user.id_curso)}>X</div></li> 
             </div>
           ))}
        </ul>
    </div>
        <button className = "botonAgregar" onClick={()=> setShow(true)}>Nuevo Curso</button>
</div>
    )}