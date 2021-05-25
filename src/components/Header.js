import React from 'react';
import styled from 'styled-components'
import BgImage from '../assets/bg.jpg'

const Header = () => {
      return ( 
           <ContenedorHeader image={BgImage}>
                 <Contenedor>
                        <Menu>
                              <Enlaces>Acerca de </Enlaces>
                              <Enlaces>Menu </Enlaces>
                              <Enlaces>Galeria</Enlaces>
                              <Enlaces>Ubicacion</Enlaces>
                        </Menu>
                        <Textos>
                              <Nombre>Cafe</Nombre>
                              <Eduardo>Eduardo Castillo</Eduardo>
                              <Titulo>Lorem ipsum dolor sit amet consectetur adipisicing.</Titulo>
                        </Textos>
                 </Contenedor>
           </ContenedorHeader>
       );
}

const ContenedorHeader = styled.header`
      background: url(${(props) => props.image || 'bg.jpg' });
      background-size: cover;
      width:100%;
      background-attachment: fixed;
      background-position: center 0; 
      font-size: 30px;
`;

const Contenedor =styled.div`
      position:relative;
      height:700px;      
`

const Menu =styled.nav`
      width:100%;
      text-align:right;
`
const Enlaces = styled.a`
      color: #fff;
      font-size: 20px;
      font-weight: 100;
      display: inline-block;
      margin: 40px 20px;
      text-decoration: none;
      position: relative; 

`

const Textos = styled.div`
      display: block;
      flex-direction: row;
      width: 100%;
      color: #fff;
      top: 50%;
      margin-top: 48px;
      opacity: 1; 
      border: 1px solid;
`
const Nombre =styled.h1`
      display:inline-block;
      font-size: 50px;
      font-weight: 600;
      border: 1px solid;
      margin: auto;
`

const Eduardo = styled.h1`
      display: inline-block;
      margin: 50 50;
      font-size: 50px;
      font-weight: 300;
      margin-left:20 px;
      border: 1px solid;
`

const Titulo = styled.h3`
      display:block;
      width:100%;
      font-weight: 300;
      font-size: 25px;
      font-style: italic;
      height:auto;
      border: 1px solid;
      margin:0;
`

export default Header;