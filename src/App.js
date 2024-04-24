import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

import IntroLoader from './components/introLoader/introLoader.jsx'

function App() {

  const [showLoader, setShowLoader] = useState(true);


  // Simula el tiempo de carga con setTimeout
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 8500);
  }, []);

  

// Define una función para eliminar un iframe dentro del body
  const removeIframeFromBody = () => {
    const iframeToRemove = document.querySelector('body > iframe');
    if (iframeToRemove) {
      iframeToRemove.parentNode.removeChild(iframeToRemove);
    }
  };
  
  // Agrega un listener para el evento load del documento
  document.addEventListener('DOMContentLoaded', () => {
    // Agrega un listener para el evento load de los iframes
    document.addEventListener('load', (event) => {
      // Verifica si el elemento cargado es un iframe
      if (event.target.tagName.toLowerCase() === 'iframe') {
        // Ejecuta la función para eliminar el iframe del body
        removeIframeFromBody();
      }
    }, true); // Usa el tercer parámetro true para capturar el evento durante la fase de captura
  });


    return (
          <BrowserRouter>
            <Route
              render={(props) => (
                <>
                  {showLoader && <IntroLoader />}
                  <Header {...props} />
                  <Routes />
                  <Footer />
                </>
              )}
            />
          </BrowserRouter>
    );
}

export default App;
