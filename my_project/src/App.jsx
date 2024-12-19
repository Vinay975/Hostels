import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Carousel } from './components/header';
import Forcheck from './components/forcheck';
import Company from './components/aboutcompany';
import Owner from './components/owner';
import Services from './components/service';
import Team from './components/team';
// import OwnerSide from './ower-user-container/ownerPurpose';
// import { MainOwnerclass } from './ower-user-container/ownerPurpose';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Forcheck />
                <Company />
                <Owner />
                <Services />
                <Team />
              </>
            }
          />
          {/* <Route path="/owner-side" element={<MainOwnerclass/>} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
