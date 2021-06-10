import React from 'react';
import styled from 'styled-components';

const Footer = () => {
      return ( 
            <PiedePagina>
                  <Contenedor>
                       <p>Copyright @2021</p> 
                  </Contenedor>
            </PiedePagina>
       );
}

const PiedePagina=styled.footer`
      width:100%
      margin:auto;
      background: #000;
`
const Contenedor=styled.div`
      margin:auto;
      text-align:center; 
      color:#fff;
      padding 20px;
`

 
export default Footer;