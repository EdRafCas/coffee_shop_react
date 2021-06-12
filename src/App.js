import React,{useRef} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Galeria from './components/Galeria';
import Ubicacion from './components/Ubicacion';
import Mapa from './components/Mapa';
import Footer from './components/Footer';

function App() {
   //need to remove this to firebase
   //like reeeeally need to
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
      top: ref.current.offsetTop,
      left:0,
      behavior:'smooth'
    });
  
  const scrollAcerca = useRef();
  const scrollMenu = useRef();
  const scrollGaleria = useRef();
  const scrollUbicacion = useRef();
  



  return (
    <>
      <Header 
        clickAcerca={()=>scrollTocomponent(scrollAcerca)}
        clickMenu={()=>scrollTocomponent(scrollMenu)}
        clickGaleria={()=>scrollTocomponent(scrollGaleria)}
        clickUbicacion={()=>scrollTocomponent(scrollUbicacion)}
        />
      <Main 
        referenceAcerca={scrollAcerca}
        referenceMenu={scrollMenu}
        platillosMenu={platillosMenu}
      />
      <Galeria referenceGaleria={scrollGaleria}/>
      <Ubicacion referenceUbicacion={scrollUbicacion}/>
      <Mapa/>
      <Footer />
    </>
  );
};

export default App;
