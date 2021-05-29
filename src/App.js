import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Galeria from './components/Galeria'

function App() {
  
  const platillosMenu = [
    {id:1, nombre: "Plato 1", precio: "10$"},
    {id:2, nombre: "Plato 2", precio: "20$"},
    {id:3, nombre: "Plato 3", precio: "30$"},
    {id:4, nombre: "Plato 4", precio: "50$"},
  ];


  return (
    <>
      <Header />
      <Main 
        platillosMenu={platillosMenu}
      />
      <Galeria />
    </>
  );
};

export default App;
