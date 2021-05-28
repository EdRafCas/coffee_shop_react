import React from 'react';
import styled from 'styled-components';

const PlatillosMenu = ({platillosMenu}) => {
      return ( 
            <div>
                  <ContenedorDePlatillos>
                        {platillosMenu.map((platillo, index)=>{
                              return(
                                    <Platillo key={index}>
                                          <p>{platillo.nombre}</p>
                                          <p>Breve descripcion</p>
                                          <p>{platillo.precio}</p>
                                          <Boton>Agregar al carrito</Boton>
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
`
const Platillo =styled.div`
      padding: 20px;
      border: 1px solid #ebeef3;
      border-radius: 5px;
      text-align: center;
      
      p {
      margin-bottom: 10px;
      font-weight: bold;
      }
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