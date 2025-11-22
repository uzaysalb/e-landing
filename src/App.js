import Accordion from './components/Accordion';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <Hero />
       <Pricing />
       <Accordion />
      </header>
    </div>
  );
}

export default App;
