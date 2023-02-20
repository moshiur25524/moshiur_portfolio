
import './App.scss';
import Header from './Pages/Header';
import Banner from './Pages/Banner';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <About/>
     <Services/>
     <Projects/>
     <Team/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
