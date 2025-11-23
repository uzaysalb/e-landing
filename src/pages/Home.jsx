import React from 'react';
import Accordion from '../../src/components/Accordion';
import Header from '../../src/components/Header';
import Hero from '../../src/components/Hero';
import Pricing from '../../src/components/Pricing';
import Contact from '../../src/components/Contact';
import '../style/global.scss';

function Home() {
  return (
    <div>
    <Header />
       <Hero />
       <Pricing />
       <Accordion />
       <Contact />
    </div>
  )
}

export default Home
