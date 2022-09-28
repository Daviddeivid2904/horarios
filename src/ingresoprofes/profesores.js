import React, {useEffect} from 'react';
import { useState } from "react";
import {Inputs} from "./nuevoProfes";
import {Editar} from "./editProfes";
import "./styleProfes.css";
export {ListaProfes}

function ListaProfes() {

const [show,setShow] = useState(false);
const [showEditar,setShowEditar] = useState(false);
const [users, setUsers] = useState();
const [id,setId] = useState(0);

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/profesores"
  ).then((response) => response.json());
  //console.log(response);
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
    fetch('http://localhost:5000//deleteProfe/'+event, {
      method: 'DELETE',
    })
    .then(res => {
      return res.json()
    }) 
    .then(data => console.log(data))
}*/


    return (
<div className="lista">
    <Inputs onClose = {()=> setShow(false)} refresh = {getApiData()} show = {show}/>
    <Editar onClose = {()=> setShowEditar(false)} refresh = {getApiData()} show = {showEditar} id_profesor = {id}/>
    <div>
        <ul className='uli'>
           {users && users.map((user) => (
             <div>
                   <li className='liliana'><div onClick={()=>abrir(user.id_profesor)} className = "nombres">{user.nombre +" "+ user.apellido}</div><div /*onClick = {eliminar(user.id_profesor)}*/>X</div></li> 
             </div>
           ))}
        </ul>
    </div>
        <button className = "botonAgregar" onClick={()=> setShow(true)}>Nuevo profesor</button>
</div>
    )}