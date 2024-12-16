import React from 'react';
import {Header , Carousel} from './components/header'
import Forcheck from './components/forcheck';
import Company from './components/aboutcompany';
import Owner from './components/owner';
import Services from './components/service';
import Team from './components/team';


function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Forcheck/>
      <Company/>
      <Owner/>
      <Services/>
      <Team/>
    </>
  );
}

export default App;
