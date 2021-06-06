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
      if(offsetY>520){
            desplazamiento = 520;
      } else{
            desplazamiento= offsetY;
      }
//-----------------------------------------------------------------------------------------------------//
      let posicionesIniciales={
            op:"0",
            divTexto:"350",
            enlace1:"-100",
            enlace2:"-150",
            enlace3:"-200",
            enlace4:"-250"
      };
      
      const contador = () => setInterval(() => {
            contadorFuncional();  
      }, 10);
      const contadorFuncional = () => {
            if(posicionesIniciales.enlace1 === 0){
                  clearInterval(contador); 
            } else{
                  posicionesIniciales.enlace1++;
                  setAltura(posicionesIniciales.enlace1);
            };
            if(posicionesIniciales.enlace2 === 0){
                  clearInterval(contador); 
            } else{
                  posicionesIniciales.enlace2++;
                  setAltura2(posicionesIniciales.enlace2);
            };
            if(posicionesIniciales.enlace3 === 0){
                  clearInterval(contador); 
            } else{
                  posicionesIniciales.enlace3++;
                  setAltura3(posicionesIniciales.enlace3);
            };
            if(posicionesIniciales.enlace4 === 0){
                  clearInterval(contador); 
            } else{
                  posicionesIniciales.enlace4++;
                  setAltura4(posicionesIniciales.enlace4);
            };
            if(posicionesIniciales.divTexto === 250){
                  clearInterval(contador); 
            } else{
                  posicionesIniciales.divTexto--;
                  posicionesIniciales.op++;
                  setAltura5(posicionesIniciales.divTexto);
                  setopacity(posicionesIniciales.op);
            };

      };
      
      const [altura, setAltura]= useState(-100);
      const [altura2, setAltura2]= useState(-150);
      const [altura3, setAltura3]= useState(-200);
      const [altura4, setAltura4]= useState(-250);
      const [altura5, setAltura5]= useState(350);
      const [opacity, setopacity]= useState(0);

      const handleAltura = () => setAltura(() =>{
            contador()}
      );
      useEffect(()=>{
            window.addEventListener('load', handleAltura);
            return() => window.removeEventListener("load", handleAltura);
           
      }, []);

//------------------------------------------------------------------------------------------------------------------------------------------//
      

      return ( 
           <ContenedorHeader image={BgImage}>
                 <Contenedor>
                        <Menu>
                              <Enlace style={{top:`${altura}px`}}>Acerca de </Enlace>
                              <Enlace style={{top:`${altura2}px`}}>Menu </Enlace>
                              <Enlace style={{top:`${altura3}px`}}>Galeria</Enlace>
                              <Enlace style={{top:`${altura4}px`}}>Ubicacion</Enlace>
                        </Menu>
                        <Textos 
                              style={{transform:`translateY(${desplazamiento*0.5}px)`, top:`${altura5}px`, opacity:`${opacity/100}`}} 
                              className={".sala-de-cafe"}
                        >
                              <Nombre >Café</Nombre>
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
const Enlace= styled.a`
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
      margin-top:48px;
      opacity: 0; 
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