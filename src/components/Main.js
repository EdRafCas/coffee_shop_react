import React from 'react';
import styled from 'styled-components';
import BgTextura from '../assets/bg-textura.png';
import BgAcerca from '../assets/acerca-de.jpg';
import PlatillosMenu from '../components/PlatillosMenu'

const Main = ({platillosMenu}) => {
      return ( 
            <ContenedorMain image={BgTextura}>
                  <AcercaDe>
                        <ContenedorAcercaDe>
                              <img  src={BgAcerca} alt={"sala de cafe"} />
                        </ContenedorAcercaDe>
                        <Cartel>
                              <h3>Acerca de</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente deserunt distinctio ut. At porro ipsam molestias laboriosam ipsa impedit aliquid alias quasi. Excepturi, natus doloremque! Doloremque id similique eum.</p>
                        </Cartel>
                  </AcercaDe>

                  <Menu>
                        <TituloMenu> Menu</TituloMenu>
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
      
`

const ContenedorAcercaDe=styled.div`
      max-width: 1000px;
      margin: auto;
      overflow: visible;
      position: relative;
      img{
            margin-top: -50px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
            width: 80%;
            position: absolute;

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

`

const Menu=styled.section`
      padding-top:570px;
      width:90%;
      max-width: 1000px;
      margin: auto;
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