import React from 'react';
import styled from 'styled-components'

const Ubicacion = () => {
      return ( 
            <Contenedor>
                  <Titulo>Donde encontrarnos</Titulo>
                  <ContenedorDireccion>
                        <Direccion>
                              <p>Zeballos 1189</p>
                              <p>Rosario, Santa fe</p>
                              <br/>

                              <p>+541197551892</p>
                              <p>Correo de muestra</p>
                        </Direccion>
                        <Horarios>
                              <TituloHorario><p>HORARIOS DE ATENCION</p></TituloHorario>
                              <ContenedorHorarios>
                                    <p>Lunes a viernes</p>
                                    <p>8:00am - 9:00pm</p>
                              </ContenedorHorarios>
                              <ContenedorHorarios>
                                    <p>Sabados y domingos</p>
                                    <p>8:00am - 10:00pm</p>
                              </ContenedorHorarios>
                        </Horarios>
                  </ContenedorDireccion>
            </Contenedor>

       );
}

const Contenedor=styled.div`
      width:80%;
      max-width:1000px;
      margin:auto;  
      padding-bottom: 50px;
      padding-top: 50px    
`
const Titulo=styled.h3`
      font-size:50px;
      font-weight: 600;
      margin:auto;
      text-align: center;
      padding-bottom:20px;

`

const ContenedorDireccion=styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap:20px
`
const Direccion=styled.div`
      padding:20px;
      grid-column: span 1;
      p{
            font-size:20px;
      }
      `
const Horarios=styled.div`
      grid-column:span 1;
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      `

const ContenedorHorarios=styled.div`
      grid-column: span 1;
      text-align: center;
      p{
            font-size:20px;
      }

`
const TituloHorario=styled.div`
      grid-column: span 2;
      font-size: 20px;
      font-weight: 600;
      text-align: center;     
`

export default Ubicacion;