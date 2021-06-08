import React,{useRef} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Galeria from './components/Galeria';
import Ubicacion from './components/Ubicacion';
import Mapa from './components/Mapa';
import Footer from './components/Footer';

function App() {
  
  const platillosMenu = [
    {id:1, nombre: "Plato 1", precio: "10$"},
    {id:2, nombre: "Plato 2", precio: "20$"},
    {id:3, nombre: "Plato 3", precio: "30$"},
    {id:4, nombre: "Plato 4", precio: "50$"},
    {id:5, nombre: "Plato 5", precio: "70$"},
    {id:6, nombre: "Plato 6", precio: "50$"},
    {id:7, nombre: "Plato 7", precio: "60$"},
    {id:8, nombre: "Plato 8", precio: "80$"},

  ];

  const scrollTocomponent = (ref) => window.scroll({
      top:ref.current.offsetTop,
      left:0,
      behavior:'smooth'
    });
  const ele1 = useRef();
  const ele2 = useRef();


  return (
    <>
      <Header reference={ele1} click={()=>scrollTocomponent(ele2)} />
      <Main reference={ele2}
        platillosMenu={platillosMenu}
      />
      <Galeria />
      <Ubicacion />
      <Mapa/>
      <Footer />
    </>
  );
};

export default App;
