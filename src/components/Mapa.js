import React from 'react';
import styled from 'styled-components'

const Mapa = () => {
      return ( 
            <ContenedorMapa>
                  <Frame src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d836.9623409655084!2d-60.64123339797852!3d-32.95498625513741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1622504850237!5m2!1ses!2sar" 
                  ></Frame>
            </ContenedorMapa>
       );
}


const ContenedorMapa = styled.div`.
      margin:auto;
      width:100%;
      overflow: hidden;
      max-height:600px;
`

const Frame =styled.iframe`
      width:100%;
      height: 600px;
`

export default Mapa;