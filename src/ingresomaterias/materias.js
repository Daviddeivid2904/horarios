import React, {useEffect} from 'react';
import { useState } from "react";
import {Materia} from "./newMaterias";
import "./styleMaterias.css";
export {ListaMaterias}

function ListaMaterias() {

const [show,setShow] = useState(false);
const [users, setUsers] = useState();

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/materias"
  ).then((response) => response.json());
  setUsers(response);
};

const eliminar = (event) => {
    fetch('/deleteMateria/:'+event, {
      method: 'DELETE',
    })
    .then(res => {
      return res.json()
    }) 
    .then(data => console.log(data))
}

useEffect(() => {
  getApiData();
}, []);

    return (
<div className="lista">
    <Materia onClose = {()=> setShow(false)} refresh = {getApiData()} show = {show}/>
    <div>
        <ul className='uli'>
           {users && users.map((user) => (
           <div>
                <li className='liliana'><div className = "nombres">{user.nombre_materia}</div><div onClick = {eliminar(user.id_materia)}>X</div></li>      
           </div>
             ))}
        </ul>
    </div>
        <button className = "botonAgregar" onClick={()=> setShow(true)}>Nueva materia</button>
</div>
    )}