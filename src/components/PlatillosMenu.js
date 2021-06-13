import React from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig'



const PlatillosMenu = () => {
      const platillosDeMenu = [
            {id:1, nombre: "Plato 1", precio: "10$"},
            {id:2, nombre: "Plato 2", precio: "20$"},
            {id:3, nombre: "Plato 3", precio: "30$"},
            {id:4, nombre: "Plato 4", precio: "50$"},
            {id:5, nombre: "Plato 5", precio: "70$"},
            {id:6, nombre: "Plato 6", precio: "50$"},
            {id:7, nombre: "Plato 7", precio: "60$"},
            {id:8, nombre: "Plato 8", precio: "80$"}  
      ];
      
      return ( 
            <div>
                  <ContenedorDePlatillos>
                        {platillosDeMenu.map((platillo, index)=>{
                              return(
                                    <Platillo key={index}>
                                          <Nombre>{platillo.nombre}</Nombre>
                                          <Precio>{platillo.precio}</Precio>
                                          <Descripcion>   lorem25    </Descripcion>
                                          {/* <Boton>Agregar al carrito</Boton> */}
                                    </Platillo>
                              );
                        })}     
                  </ContenedorDePlatillos>
                 
            </div>
       );
}

const ContenedorDePlatillos = styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 20px 0;
      box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
      @media(max-width:800px) {
            grid-template-columns: repeat(1, 1fr); 
            gap: 0px;         
      }
`
const Platillo =styled.div`
      margin-bottom:30px;
      padding-bottom:20px;
      border-bottom:4px dotted #000;
      overflow:hidden;
      text-align: center;
`

const Nombre = styled.p`
      font-size:25px;
      margin-bottom:15px;
      float:left;
`

const Precio = styled.p`
      font-size:20px;
      margin-bottom:15px;
      float:right;
`
const Descripcion= styled.p`
      font-size:16px;
      color:#676767;
      margin-bottom:15px;
      clear:both;
`


const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;



 
export default PlatillosMenu;