import React from 'react';
import './fifthSection.scss';
import Picture1 from '../../assets/img/nat-8.jpg';
import Picture2 from '../../assets/img/nat-9.jpg';
import Video1 from '../../assets/img/video.mp4';
import Video2 from '../../assets/img/video.webm';

const fifthSection = () => {
    return (
        <section className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={Video1} type="video/mp4"></source>
                    <source src={Video2} type="video/webm"></source>
                    Your browser is not supported!
                </video>
            </div>
            <div className="u-center-text u-margin-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={Picture1} alt="Person on a tour" className="story__img"></img>
                        <figcaption className="story__caption">Mary Smith</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week  ever with my family</h3>
                        <p>
                        Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={Picture2} alt="Person a tour" className="story__img"></img>
                        <figcaption className="story__caption">Jack Wilson</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week  ever with my family</h3>
                        <p>
                        Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Discover all tours</a>
            </div>
        </section>
    );
}

export default fifthSection;