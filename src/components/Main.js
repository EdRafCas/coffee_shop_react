import React from 'react';
import styled from 'styled-components';
import BgTextura from '../assets/bg-textura.png';
import BgAcerca from '../assets/acerca-de.jpg';

const Main = () => {
      return ( 
            <ContenedorMain image={BgTextura}>
                  <AcercaDe>
                        <Contenedor>
                              <img  src={BgAcerca} alt={"sala de cafe"} />
                        </Contenedor>
                        <Cartel>
                              <h3>Acerca de</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente deserunt distinctio ut. At porro ipsam molestias laboriosam ipsa impedit aliquid alias quasi. Excepturi, natus doloremque! Doloremque id similique eum.</p>
                        </Cartel>
                  </AcercaDe>

                  <Menu>

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

const Contenedor=styled.div`
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
`


export default Main;