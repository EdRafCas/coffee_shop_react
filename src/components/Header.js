import React from 'react';
import styled from 'styled-components'
import BgImage from '../assets/bg.jpg'

const Header = () => {
      return ( 
           <ContenedorHeader image={BgImage}>
                 <Contenedor>
                        Hola
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
export default Header;