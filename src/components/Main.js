import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import BgTextura from '../assets/bg-textura.png';
import BgAcerca from '../assets/acerca-de.jpg';
import PlatillosMenu from '../components/PlatillosMenu'

const Main = ({platillosMenu, referenceAcerca, referenceMenu}) => {

      const [offsetY, setOffsetY] =useState(0);
      const handleScroll = () => setOffsetY(window.pageYOffset);

      console.log(window.pageYOffset);
      useEffect(() => {
            var windowWidth = window.innerWidth;
            if (windowWidth >= 800){
                  window.addEventListener('scroll', handleScroll);
                  return() => window.removeEventListener('scroll', handleScroll);
            }
      }, []);

      let desplazamiento="";
      if(offsetY>430){
            desplazamiento = 430;
      } else{
            desplazamiento= offsetY;
      }


      return ( 
            <ContenedorMain image={BgTextura}>
                  <AcercaDe ref={referenceAcerca} >
                        <ContenedorAcercaDe>
                              <img  src={BgAcerca} alt={"sala de cafe"} />
                        </ContenedorAcercaDe>
                        <Cartel style={{transform:`TranslateY(${-desplazamiento*0.6}px)`}}>
                              <h3>Acerca de</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente deserunt distinctio ut. At porro ipsam molestias laboriosam ipsa impedit aliquid alias quasi. Excepturi, natus doloremque! Doloremque id similique eum.</p>
                        </Cartel>
                  </AcercaDe>

                  <Menu>
                        <TituloMenu ref={referenceMenu}> Menu</TituloMenu>
                        <ContenedorExternoMenu>
                              <ContenedorInternoMenu>
                                    <PlatillosMenu 
                                          platillosMenu={platillosMenu} 
                                    />
                              </ContenedorInternoMenu>    
                        </ContenedorExternoMenu>
                  </Menu>
            </ContenedorMain>
       );
}
 

const ContenedorMain=styled.main`
      background: url(${(props) => props.image || 'bg-textura.png'});
      background-repeat: repeat;

`

const AcercaDe=styled.section`
      width:90%;
      max-width:1000px;
      margin: auto;
      overflow: visible;
      position: relative;
      
`

const ContenedorAcercaDe=styled.div`
      max-width: 1000px;
      overflow: visible;
      position: relative;
      margin-top: -50px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
      position: absolute;
            img{
                  vertical align: top;
                  width:100%;         
      }
      @media(max-width:800px) {
            position: relative
            width:100%;
      }
`
const Cartel=styled.article`
      background: #fff;
      padding: 40px;
      width: 50%;
      position: relative;
      top: 200px;
      z-index: 1;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
      float: right;
      h3{
            font-size: 50px;
            font-weight: 100px;
            margin-bottom: 40px; 
      }
      p{
            line-height: 28px;
            margin-bottom: 15px; }
      }
      @media(max-width:800px) {
            width:100%;
            position:relative;
            margin-top:-50px;
      }
`

const Menu=styled.section`
      padding-top:570px;
      width:90%;
      max-width: 1000px;
      margin: auto;
      padding-bottom: 50px;
`
const TituloMenu= styled.h3`
      font-size: 40px;
      font-weight:300;
      text-align: center;
      margin-bottom: 40px;

`
const ContenedorExternoMenu= styled.div`
      border: 1px solid #000;
      background:transparent;
      padding:10px;
      overflow:hidden;
`  
const ContenedorInternoMenu= styled.div`
      border: 1px solid #000;
      background:transparent;
      padding:10px;
      overflow:hidden;
`

export default Main;