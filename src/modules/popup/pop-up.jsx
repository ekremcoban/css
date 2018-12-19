import React from 'react';
import './popUp.scss';
import Picture1 from '../../assets/img/erik.jpg'
import Picture2 from '../../assets/img/zeyad.jpg';

const popup = () => {
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={Picture1} alt="erik" className="popup__img"></img>
                    <img src={Picture2} alt="zeyid" className="popup__img"></img>
                </div>
                <div className="popup__right">
                    <a href="section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash;bla bla ba</h3>
                    <p className="popup__text">
                        Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    );
}

export default popup