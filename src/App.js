import React, { Component } from 'react';
import './App.scss';
import Header from './modules/header/header';
import Test1 from './modules/test/test1';
import GridTest from './modules/grid-test/grid-test';
import SecondSection from './modules/secondSection/second-section';
import ThirdSection from './modules/thirdSection/third-section';
import FourthSection from './modules/fourthSection/fourth-section';
import FifthSection from './modules/fifthSection/fifth-section';
import SixthSection from './modules/sixthSection/sixth-section';
import Footer from './modules/footer/footer';
import Navigation from './modules/navigation/navigation';
import Popup from './modules/popup/pop-up';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Header />
        {/* <Test1 />
        <GridTest/> */}
        <SecondSection />
        <ThirdSection />
        <FourthSection/>
        <FifthSection />
        <SixthSection />
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
