import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import BgImage from '../assets/bg.jpg'

const Header = () => {
      const [offsetY, setOffsetY] =useState(0);
      const handleScroll = () => setOffsetY(window.pageYOffset);

      console.log(window.pageYOffset);
      useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return() => window.removeEventListener('scroll', handleScroll);
      }, []);

      let desplazamiento="";
      if(offsetY>430){
            desplazamiento = 430;
      } else{
            desplazamiento= offsetY;
      }
      
      let posicionesIniciales={divTexto:"-100", enlace:"-100"};
      
      const contador = () => setInterval(() => {
            contadorFuncional();  
      }, 10);
      const contadorFuncional = () => {
            if(posicionesIniciales.divTexto == 0){
                  clearInterval(contador); 
            } else{
                  posicionesIniciales.divTexto++;
                  setAltura(posicionesIniciales.divTexto); 
            };     
      };
      
      const [altura, setAltura]= useState(-100);
      const handleAltura = () => setAltura(() =>{
            contador()}
      );
      useEffect(()=>{
            window.addEventListener('load', handleAltura);
            return() => window.removeEventListener("load", handleAltura);
           
      }, []);

      
      return ( 
           <ContenedorHeader image={BgImage}>
                 <Contenedor>
                        <Menu>
                              <Enlaces style={{top:`${altura}px`}}>Acerca de </Enlaces>
                              <Enlaces>Menu </Enlaces>
                              <Enlaces>Galeria</Enlaces>
                              <Enlaces>Ubicacion</Enlaces>
                        </Menu>
                        <Textos 
                              style={{transform:`translateY(${desplazamiento*0.5}px)`, top:``}} 
                        >
                              <Nombre>Café</Nombre>
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
      width: 90%;
      max-width: 1000px;
      margin: auto;
      overflow: hidden;
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
      &:hover{
            text-decoration: underline;
      }

`

const Textos = styled.div`
      width: 100%;
      color: #fff;
      position:absolute;
      top: 50%;     
      opacity: 1; 
`
const Nombre =styled.h1`
      display:inline-block;
      font-size: 50px;
      font-weight: 600;
      margin: auto;
`

const Eduardo = styled.h1`
      display: inline-block;
      font-size: 50px;
      font-weight: 300;
      margin-left:20 px;
      margin-left: 20px
`

const Titulo = styled.h3`
      font-weight: 300;
      font-size: 25px;
      font-style: italic;
      height:auto;
      margin:0;
`

export default Header;