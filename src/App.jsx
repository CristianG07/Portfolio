import './App.css'

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Bot } from './components/Box';
import {Projects} from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Bot/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
