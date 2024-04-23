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
                        <Link to="/">ZETA STREAMING</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/peliculas">Peliculas</Link>
                        <Link to="/series">Series</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link onClick={twitter}>Sigueme en Twitter</Link>
                        <Link onClick={github}>Sigueme en GitHub</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Tienes que ver</Link>
                        <Link to="/">Lanzamientos Recientes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
