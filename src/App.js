import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  
  const platillosMenu = [
    {id:1, nombre: "plato 1", precio: "10$"},
    {id:2, nombre: "plato 2", precio: "20$"},
    {id:3, nombre: "plato 3", precio: "30$"},
    {id:4, nombre: "plato 4", precio: "50$"},
  ];


  return (
    <>
      <Header />
      <Main 
        platillosMenu={platillosMenu}
      />
    </>
  );
};

export default App;
