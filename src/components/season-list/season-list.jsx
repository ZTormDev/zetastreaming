import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importa Link
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './season-list.scss';
import playIcon from '../../assets/play-circle-svgrepo-com (1).svg';

const SeasonList = ({ showSeasonsFunction , seasonNumberFunction}) => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await tmdbApi.detail(category, id, { params: {} });
                setItem(response);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Puedes manejar el error aquí, por ejemplo, estableciendo un estado de error
            }
        };
        getDetail();
    }, [category, id]);

    let SeasonCard = null;



    if (item && item.seasons) {
        SeasonCard = item.seasons.map(season => (
            <div key={season.id} onClick={() => { showSeasonsFunction(); seasonNumberFunction(season.season_number);}} className='season-card' style={{backgroundImage: `url(${apiConfig.originalImage(season.poster_path)})`}}>
                <div className='details-container'>
                    
                    <div className='text-container'>
                        {season.season_number === 0
                        ? 
                        <h2 className='season-name'>{season.name}</h2>
                        : season.season_number !== 0
                        ? 
                        <h2 className='season-name'>Temporada {season.season_number}</h2>
                        : ''
                        }
                        
                        <p>Episodios: {season.episode_count}</p>
                    </div>
                    <img className='play-icon' src={playIcon} alt="" />
                </div>
            </div>
        ));
    }

    return (
        <>{SeasonCard}</>
    );
};

export default SeasonList;
