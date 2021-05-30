import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Galeria from './components/Galeria';
import Ubicacion from './components/Ubicacion'

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


  return (
    <>
      <Header />
      <Main 
        platillosMenu={platillosMenu}
      />
      <Galeria />
      <Ubicacion />
    </>
  );
};

export default App;
