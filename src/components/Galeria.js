import React from 'react';
import styled from 'styled-components';
import Imagen1 from '../assets/1.jpg';
import Imagen2 from '../assets/2.jpg';
import Imagen3 from '../assets/3.jpg';
import Imagen4 from '../assets/4.jpg';


const Galeria = () => {
      return ( 
            <ContenedorGaleria>
                  <ContenedorFoto>
                        <Foto src={Imagen1} alt={"imagen de muestra"}></Foto>
                  </ContenedorFoto>
                  <ContenedorFoto>
                        <Foto src={Imagen2} alt={"imagen de muestra"}></Foto>
                  </ContenedorFoto>
                  <ContenedorFoto>
                        <Foto src={Imagen3} alt={"imagen de muestra"}></Foto>
                  </ContenedorFoto>
                  <ContenedorFoto>
                        <Foto src={Imagen4} alt={"imagen de muestra"}></Foto>
                  </ContenedorFoto>
            </ContenedorGaleria>

       );
}
 
const ContenedorGaleria=styled.div`
      display: grid;
      width:100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 0px;
      box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`

const ContenedorFoto = styled.div`
      float:left;
`

const Foto=styled.img`
      width:100%;
      height: auto;
      vertical-align: top;
      opacity:0.7;
      &:hover{
            opacity: 1.0;
            -webkit-transition:all .3s ease;
            -o-transition:all .3s ease;
            transition:all .3s ease;
      }
`

export default Galeria;