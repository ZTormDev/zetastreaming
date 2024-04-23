import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import CastList from './CastList';

import MovieList from '../../components/movie-list/MovieList';
import SeasonList from '../../components/season-list/season-list';

import nextIcon from '../../assets/navigation-last-last-page-lastpage-right-next-icon-svgrepo-com.svg';
import previusIcon from '../../assets/navigation-before-first-page-firstpage-left-previous-icon-svgrepo-com.svg';
import listIcon from '../../assets/list-ul-alt-svgrepo-com (1).svg';
import backIcon from '../../assets/back-svgrepo-com.svg';

import playIcon from '../../assets/play-circle-svgrepo-com (1).svg';


const Detail = () => {
    const { category, id } = useParams();

    const [item, setItem] = useState(null);
    const [episode, setEpisode] = useState(null);
    const [season, setSeason] = useState(null);

    const [iframeSrc, setIframeSrc] = useState('');
    const [TitleCategory, setTitleCategory] = useState('');
    const [typeOfContent, setTypeOfContent] = useState('');


    
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



const addSandboxToIframe = () => {
    const iframeToAddSandbox = document.querySelector('body iframe');
    if (iframeToAddSandbox) {
        iframeToAddSandbox.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
    }
  };
  

  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('load', (event) => {
      if (event.target.tagName.toLowerCase() === 'iframe') {
        addSandboxToIframe();
      }
    }, true); 
  });

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);

            // Determinar la fuente del iframe
            const src = category === 'movie'
                ? `https://es.oceanplay.me/embeds/${id}`
                : '';

            const title = category === 'movie'
                ? `Ver Pelicula Online`
                : category === 'tv'
                ? `Ver Serie Online`
                : '';

            const typeOfContent = category === 'movie'
                ? `Pelicula`
                : category === 'tv'
                ? `Serie`
                : ''; 

            setIframeSrc(src);
            setTitleCategory(title);
            setTypeOfContent(typeOfContent);
        }
        getDetail();
    }, [category, id]);

        



    const [showSeasons, setShowSeasons] = useState(true);

    const [showEpisodes, setshowEpisodes] = useState(false);


    const showSeasonsFunction = () => {
        if (showSeasons === true) {
            // SE MUESTRA EL SERIES PLAYER

            setShowSeasons(false)
            setshowEpisodes(true)
            window.scrollTo(0,800);

        } else {
            // SE OCULTA EL SERIES PLAYER

            setShowSeasons(true)
            setshowEpisodes(false)
            setEpisodeNumber(1);

            window.scrollTo(0,800);
        }
    }


    const [seasonNumber, setSeasonNumber] = useState(1);
    const [episodeNumber, setEpisodeNumber] = useState(1);

    let episodeUrl = `https://es.oceanplay.me/embeds/${id}/${seasonNumber}/${episodeNumber}`;

    const nextEpisode = () => {
        setEpisodeNumber(episodeNumber + 1);
    }

    const previusEpisode = () => {
        setEpisodeNumber(episodeNumber - 1);
    }

    let isHidden = false;
    const listaEpisodios = document.getElementById('lista-episodios');

    const changeEpisode = (episodeNumber) => {
        setEpisodeNumber(episodeNumber);
        console.log(episodeNumber, "se seteo el episodio");
        isHidden = true;
        listaEpisodios.classList.add('hidden')
    }

    useEffect(() => {
        const getEpisodeDetail = async () => {
            const response = await tmdbApi.getEpisodeDetails(category, id, seasonNumber, episodeNumber, {params:{}});
            setEpisode(response);
            }
        getEpisodeDetail();
        }, [category, id, seasonNumber, episodeNumber]);

    const seasonNumberFunction = (seasonSelected) => {
        setSeasonNumber(seasonSelected);
    }

    useEffect(() => {
        const getSeasonDetails = async () => {
            const response = await tmdbApi.getSeasonDetails(category, id, seasonNumber, {params:{}});
            setSeason(response);
            }
            getSeasonDetails();
        }, [category, id, seasonNumber]);

    

    const changeIsHidden = () => {
        if(isHidden)
        {
            isHidden = false
            listaEpisodios.classList.add('hidden')
        } else {
            isHidden = true;
            listaEpisodios.classList.remove('hidden')
        }
    }



    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>

                                <div className='type-content'>
                                    <h2>{typeOfContent}</h2>
                                    
                                    {category === 'movie'
                                    ? <div className='movie-details'>
                                            <p><strong>Duracion: {item.runtime} min</strong></p> <h3>Fecha de estreno: {item.release_date}</h3>
                                        </div>
                                    : category === 'tv'
                                    ? <div className='tv-seasons-episodes'>
                                            <p><strong>Temporadas: {item.number_of_seasons}</strong></p>
                                            <p><strong>Episodios: {item.number_of_episodes}</strong></p>
                                            <h3>Fecha de estreno: {item.first_air_date}</h3>
                                        </div>
                                    : ''}
                                    
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Actores</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">

                            {category === 'movie'
                                ? 
                                <div className='movie-serie-player'>
                                <h2 className='titleCategory'>{TitleCategory}</h2>
                                <div className="section mb-3 pelicula">
                                    <iframe className='movie-iframe'
                                        src={iframeSrc} title={category}
                                        frameborder="0" 
                                        allowfullscreen="" 
                                        webkitallowfullscreen="" 
                                        mozallowfullscreen="" sandbox = "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation">
                                    </iframe>
                                </div>
                                </div>

                                : category === 'tv'
                                ?


                                
                                <div>
                                {showSeasons && 
                                    (
                                        <div className='episodes-container'>
                                            <h2 className='episodes-title'>Temporadas</h2>
                                            <div className='season-list'>
                                                <SeasonList seasonNumberFunction={seasonNumberFunction} showSeasonsFunction={showSeasonsFunction}></SeasonList>
                                            </div>
                                        </div>
                                        
                                    )
                                }

                                {showEpisodes &&
                                    (
                                        <div className='player-episode-container'>
                                            
                                            <div className='episode-info'>
                                                <p>Episodio {episode.episode_number}: "{episode.name}"</p>
                                                
                                                {season.season_number === 0
                                                ? 
                                                <p className='temporada'>{season.name}</p>
                                                : season.season_number !== 0
                                                ? 
                                                <p className='temporada'>Temporada {season.season_number}</p>
                                                : ''
                                                }
                                            </div>
                                            <div className='pelicula'>
                                                <iframe className='movie-iframe'
                                                    src={episodeUrl} title={category}
                                                    frameborder="0" 
                                                    allowfullscreen="" 
                                                    webkitallowfullscreen="" 
                                                    mozallowfullscreen="" sandbox = "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation">
                                                </iframe>
                                            </div>
                                            <div className='series-control-container'>
                                                <div className='control-up'>
                                                    
                                                    <button onClick={previusEpisode}><img src={previusIcon} alt=""/><p className='previus-button'>Episodio Anterior</p></button>
                                                    <div className='control-episode-list'>
                                                        <div className='episode-button'>
                                                            <button onClick={changeIsHidden}><p className='episode-list-button'>Lista de Episodios</p><img src={listIcon} alt="" /></button>


                                                            <div id='lista-episodios' className='episodes-list hidden scroll'>
                                                                {season.episodes.map(episode => (
                                                                    <div key={episode.id} onClick={() => changeEpisode(episode.episode_number)} className='episode-card' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${apiConfig.originalImage(episode.still_path)})`}}>
                                                                            <div className='episode-details'>
                                                                                <h2 className='season-name'>Episodio {episode.episode_number}:</h2>
                                                                                <h2 className='season-name'>{episode.name}</h2>
                                                                            </div>
                                                                            <img className='play-icon' src={playIcon} alt="" />
                                                                    </div>
                                                                ))}
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <button onClick={showSeasonsFunction} className='volver-button'><img src={backIcon} alt="" /> Elejir otra temporada</button>

                                                    <button onClick={nextEpisode}><p className='next-button'>Proximo Episodio </p><img src={nextIcon} alt=""/></button>

                                                </div>
                                                <div className='control-bottom'>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                </div>

                                : ''}




                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;
