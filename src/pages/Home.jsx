import React from 'react';
import Accordion from '../../src/components/Accordion';
import Header from '../../src/components/Header';
import Hero from '../../src/components/Hero';
import Pricing from '../../src/components/Pricing/Pricing';
import '../style/global.scss';

function Home() {
  return (
    <div>
    <Header />
       <Hero />
       <Pricing />
       <Accordion />
    </div>
  )
}

export default Home
