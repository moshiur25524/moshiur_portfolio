
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Pages/Header';
import Banner from './Pages/Banner';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { AnimatePresence } from 'framer-motion';
import SocialIcons from './Pages/components/SocialIcon';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <About />
        <SocialIcons/>
        {/* <Banner /> */}
        <Services />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
