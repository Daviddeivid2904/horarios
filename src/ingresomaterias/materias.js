import React from 'react';
import { useState } from "react";
import {Materia} from "./newMaterias";
import "./styleMaterias.css";
export {ListaProfes}

function ListaProfes() {

const [show,setShow] = useState(false);

    return (
<div>
<button onClick={()=> setShow(true)}> show Modal </button>
<Inputs onClose = {()=> setShow(false)} show = {show}/>
</div>
    )}