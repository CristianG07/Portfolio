import './App.css'

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  );
}

export default App;
