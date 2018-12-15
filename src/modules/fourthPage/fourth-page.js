import React from 'react';
import './fourthPage.scss';

const fourthPage = () => {
    return (
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular tours
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    The Sea Explorer
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficult: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back--1">
                            back
                        </div>
                    </div>
                    col
                </div>
                <div className="col-1-of-3">
                    col
                </div>
                <div className="col-1-of-3">
                    col
                </div>
            </div>
        </section>
    );
}

export default fourthPage;