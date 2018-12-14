import React, { Component } from 'react';
import './App.scss';
import Header from './modules/header/components/header';
import Test1 from './modules/test/test1';
import GridTest from './modules/grid-test/grid-test';
import SecondPage from './modules/secondPage/second-page';
import ThirdPage from './modules/thirdPage/third-page';
import FourthPage from './modules/fourthPage/fourth-page';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Test1 />
        <GridTest/> */}
        <SecondPage />
        <ThirdPage />
        <FourthPage/>
      </div>
    );
  }
}

export default App;
