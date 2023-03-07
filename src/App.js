import logo from './logo.svg';
import './App.css';
import Header from './components/interfaces/Header';
import Navbar from './components//interfaces/Navbar';
import SideBar from './components//interfaces/SideBar';
import { Body } from './components/interfaces/Body';
import { FaHome } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import axios from "axios";
import InscriptionParent from '../src/components/Parent/Inscription/Inscription';
import ConnexionUtilisateur from '../src/components/Connexion/Connexion';
import InscriptionBenevole from '../src/components/Benevole/Inscription/Inscription';
import CreationActivite from '../src/components/Activite/CreationActivite/Creation';
import Connexion from '../src/components/Connexion/Connexion';
import TableauDeBordChatBenevole from './components/Benevole/chat/TableauDeBordChatBenevole';



function App() {

  const id = 66;
  const Deconnexion = () => {
    axios.put(`http://localhost:8080/chatFini/${id}`);
    sessionStorage.clear();
    window.location.href = '/Connexion';
    console.log("Session clear");
  }

  return (
    <div className="App">
      <div >
        <Navbar />
        {/* <Header/>
        <SideBar/>
        <Body/> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/Connexion">Connexion</Link></li>
                <button onClick={Deconnexion}>Deconnexion</button>
              </ul>
            </nav>

            <Routes>
             
              <Route path="/Connexion" element={<Connexion />}></Route>
              <Route path="/TableauDeBordChatBenevole" element={<TableauDeBordChatBenevole />}></Route>
             
            </Routes>

          </div>
        </Router>
      </div>
    </div>
  );
}
export default App;
