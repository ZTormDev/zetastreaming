import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const twitter = 'https://twitter.com/itsztorm';
const github = 'https://github.com/ZTormDev';

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
                        <a href={twitter} target='_blank' rel='noreferrer'>Sigueme en Twitter</a>
                        <a href={github} target='_blank' rel='noreferrer'>Sigueme en GitHub</a>
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
