import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">ZETA MOVIES</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/">Peliculas</Link>
                        <Link to="/">Series de TV</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Sigueme en Twitter</Link>
                        <Link to="/">Sigueme en GitHub</Link>
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
