import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Roles from './components/roles/Roles';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Roles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
