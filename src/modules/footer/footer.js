import React from 'react';
import './footer.scss';
import Picture from '../../assets/img/logo-green-2x.png';

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={Picture} alt="Full logo" className="footer__logo"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built my <a href="#" className="footer__link">Jonas Schmedtmann </a>for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a> Copyright &copy; by Jonas Schmedtmann
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default footer;