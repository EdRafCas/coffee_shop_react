import React,{useRef} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Galeria from './components/Galeria';
import Ubicacion from './components/Ubicacion';
import Mapa from './components/Mapa';
import Footer from './components/Footer';
import {Helmet} from 'react-helmet';
import Favicon from './assets/1.jpg';

function App() {
  
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
      <Helmet>
        <title>Ed, Coffee & React</title>
      </Helmet>
      <Header 
        clickAcerca={()=>scrollTocomponent(scrollAcerca)}
        clickMenu={()=>scrollTocomponent(scrollMenu)}
        clickGaleria={()=>scrollTocomponent(scrollGaleria)}
        clickUbicacion={()=>scrollTocomponent(scrollUbicacion)}
        />
      <Main 
        referenceAcerca={scrollAcerca}
        referenceMenu={scrollMenu}
      />
      <Galeria referenceGaleria={scrollGaleria}/>
      <Ubicacion referenceUbicacion={scrollUbicacion}/>
      <Mapa/>
      <Footer />
    </>
  );
};

export default App;
