import React from 'react';
import './navigation.scss';

const navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>02</span>Your Benefits</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>03</span>Popular Tours</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>05</span>Book Now</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default navigation