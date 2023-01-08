import React, { useState } from "react";
import './App.css';
import {Button, Form, Row, Col,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [nFilas, setNFilas] = useState([
    {
      nombre: '',
      edad: ''
    }
  ]);

  const addFila = () =>{
    let newFila = {
      nombre: '',
      edad: ''
    }
    setNFilas([...nFilas, newFila])

  }
  
  function handleSubmit  (e){
    e.preventDefault();
    console.log(nFilas);

  }
  const handleFormChange = (index, event) => {
    let data = [...nFilas];
    data[index][event.target.name] = event.target.value;
    setNFilas(data);
 }
 const borrarFila = (indice) =>{
  let data = [...nFilas];
  data.splice(indice,1)
  setNFilas(data);

 }


  
  return (
    <div className="App">
       <h1 className="titulo">Creador de formularios</h1>
       
       <div className="contenido">
       <Form>
            <Row>
              <Col xs ={10}>
              <Form.Control type="text" placeholder="Campo de texto"></Form.Control>
              </Col>
              <Col xs ={2}>
              <Button variant="secondary" size="lg" onClick={addFila }> Añadir Otro</Button></Col>
            </Row>
           
          </Form>

       </div>
       <div className="formulario">
        <Form onSubmit={handleSubmit}>

        <Table >
          
          <tbody>
            {
              nFilas.map((input, index) =>{
                return (
                  <tr key={index}>
                  <td> #{index+1}</td>
                  <td>
                  <Form.Control type="text" name="nombre" placeholder="Nombre" value={input.nombre} onChange= {event => handleFormChange(index, event)}></Form.Control>
                 

              </td>
              <td><Form.Control xs={2} type="text" name="edad" placeholder="Edad" value={input.edad} onChange= {event => handleFormChange(index, event)} ></Form.Control></td>
              <td>
              <Button variant="outline-danger" onClick={ ()=>borrarFila(index) }>Borrar</Button>
              </td>
            </tr>

                );

              })
            }
            
          </tbody>



        </Table>
        <Button variant="primary" size="lg" onClick={handleSubmit} >Enviar</Button>
         

        </Form>
        
        

       </div>
        
      
    </div>
  );
}

export default App;
