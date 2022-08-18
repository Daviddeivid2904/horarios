import { useState } from "react";
import React from 'react';
import "./styleProfes.css"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export {ListaProfes}
function ListaProfes() {

    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    const [abierto, setAbierto] = useState(false);
    
     function abrirModal() {
        setAbierto = ({abierto: !abierto});
      }
        
        return(
          <div className="principal">
            <div className="secundario">
          <Button color="success" onClick={abrirModal()}>Mostrar Modal</Button>  
          <Modal isOpen={this.state.abierto} style={modalStyles}>
            <ModalHeader>
              Iniciar Sesión
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="usuario">Usuario</Label>
                <Input type="text" id="usuario"/> 
              </FormGroup>
              <FormGroup>
                <Label for="password">Contraseña</Label>
                <Input type="text" id="password"/> 
              </FormGroup>
            </ModalBody>
    
            <ModalFooter>
                <Button color="primary">Iniciar Sesión</Button>
                <Button color="secondary" onClick={abrirModal()}>Cerrar</Button>
            </ModalFooter>
          </Modal>
         </div>       
     </div>

    )
  
}