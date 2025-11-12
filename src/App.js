import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNavbar from "./Pages/Navbar"
import Main from './Componants/Main';
import About from './Componants/About';
import Skills from './Componants/Skills';
import Tutorials from './Componants/Tutorials';
import Support from './Componants/Support';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <Main/>
   <About/>
   <Skills/>
   <Tutorials/>
   <Support/>
   <Footer/>
    </div>
  );
}

export default App;
