import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {

    
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
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Peliculas en Tendencia</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">Ver mas</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Peliculas Mejores Valoradas</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">Ver mas</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Series en Tendencia</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">Ver mas</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Series Mejores Valoradas</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">Ver mas</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
