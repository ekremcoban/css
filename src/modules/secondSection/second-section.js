
import React from 'react';
import './secondSection.scss';
import Photo1 from '../../assets/img/nat-1-large.jpg';
import Photo2 from '../../assets/img/nat-2-large.jpg';
import Photo3 from '../../assets/img/nat-3-large.jpg';

const secondPage = () => {
    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Neden Kullanırız?</h3>
                            <p className="paragraph">
                                Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.
                            </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Nereden Bulabilirim?</h3>
                            <p className="paragraph">
                            Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={Photo1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={Photo2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={Photo3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default secondPage;