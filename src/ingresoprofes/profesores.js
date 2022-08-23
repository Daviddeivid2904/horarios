import React, {useEffect} from 'react';
import { useState } from "react";
import {Inputs} from "./nuevoProfes";
import "./styleProfes.css";
export {ListaProfes}

function ListaProfes() {

const [show,setShow] = useState(false);
const [users, setUsers] = useState();

const getApiData = async () => {
  const response = await fetch(
    "http://localhost:5000/profesores"
  ).then((response) => response.json());
  console.log(response);
  setUsers(response);
};

useEffect(() => {
  getApiData();
}, []);


    return (
<div>
    <Inputs onClose = {()=> setShow(false)} show = {show}/>
    <div className="app">
  {users &&
    users.map((user) => (
      <div className="item-container">
        nombre:{user.nombre +" "+ user.apellido}
      </div>
   ))}
</div>
    <div className = "newProfesor">
        <button className = "botonProfesor" onClick={()=> setShow(true)}>Nuevo profesor</button>
    </div>
</div>
    )}