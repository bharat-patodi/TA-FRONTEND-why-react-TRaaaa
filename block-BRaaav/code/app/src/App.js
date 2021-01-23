import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock} from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Hero />
      <About />
      <Blog />
      <Work />
      <Contact />
    </main>
    <Footer />
    </div>
  );
}

export default App;
