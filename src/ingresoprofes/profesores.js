import React from 'react';
import { useState } from "react";
import {Inputs} from "./nuevoProfes.js";
import "./styleProfes.css";
export {ListaProfes}

function ListaProfes() {

const [show,setShow] = useState(false);
function click(){
if(!show){
    setShow(true);
    console.log(show)
}
}
    return (
<div>
<button  onClick = {click()}> show Modal </button>
</div>
      )
  
}