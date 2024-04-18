import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const twitter = () => {
    window.open('https://twitter.com/itsztorm', '_blank');
};
const github = () => {
    window.open('https://github.com/ZTormDev', '_blank');
};

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/zetastreaming">ZETA STREAMING</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/zetastreaming">Inicio</Link>
                        <Link to="/zetastreaming/movie">Peliculas</Link>
                        <Link to="/zetastreaming/tv">Series</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/zetastreaming" onClick={twitter}>Sigueme en Twitter</Link>
                        <Link to="/zetastreaming" onClick={github}>Sigueme en GitHub</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/zetastreaming">Tienes que ver</Link>
                        <Link to="/zetastreaming">Lanzamientos Recientes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
