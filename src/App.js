import React from 'react';

import { Blog,Features,Header,WhatStd_att} from './containers';
import { CTA,Brand,Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />

      </div>
      <Brand />
      <WhatStd_att />
      <Features />
      <CTA />
      <Blog />

    </div>
  )
}

export default App