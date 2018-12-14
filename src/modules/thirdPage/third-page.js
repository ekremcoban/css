import React from 'react';
import './thirdPage.scss';
import { TiWorld, TiCompass, TiMap, TiHeart } from 'react-icons/ti';


const thirdPage = () => {
    return (
        <section className="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <div className="feature-box__icon">
                            <TiWorld color="green"/>
                        </div>
                        <h3 className="heading-tertiary">Explore the world</h3>
                        <p className="feature-box__text">
                            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <div className="feature-box__icon">
                            <TiCompass color="green"/>
                        </div>
                        <h3 className="heading-tertiary">Meet nature</h3>
                        <p className="feature-box__text">
                            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <div className="feature-box__icon">
                            <TiMap color="green"/>
                        </div>
                        <h3 className="heading-tertiary">Find your way</h3>
                        <p className="feature-box__text">
                            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <div className="feature-box__icon">
                            <TiHeart color="green"/>
                        </div>
                        <h3 className="heading-tertiary">Live a healthier life</h3>
                        <p className="feature-box__text">
                            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default thirdPage;