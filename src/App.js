import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Body } from './components/Body';
import { FaHome } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";



import InscriptionParent from '../src/components/Parent/Inscription/Inscription';
import ConnexionUtilisateur from '../src/components/Connexion/Connexion';
import InscriptionBenevole from '../src/components/Benevole/Inscription/Inscription';
import CreationActivite from '../src/components/Activite/CreationActivite/Creation';
import CreerChat from './components/ChatParent/CreerChat';
import Chat from './components/ChatParent/Chat';
import Chat2 from './components/Benevole/chatBenevole/Chat2';
import Connexion from '../src/components/Connexion/Connexion';
import TableauDeBord from './components/Benevole/chatBenevole/TableauDeBord';
import TableauDeBordChat from './components/Benevole/chatBenevole/TableauDeBordChat';
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
      <nav class="navbar navbar-expand-lg navbar-light  " style={{ backgroundColor: 'rgba(61, 72, 139, 1)', padding: "1.2%" }}>
        <img src='./assets/img/allaitement/home.png' style={{ width: "18px", position: "relative", left: "2%" }}></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://allaitementquebec.org/a-propos/" style={{ color: "white", position: "relative", left: "50%" }}>À PROPOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://allaitementquebec.org/services/" style={{ color: "white", position: "relative", left: "50%" }}>SERVICES</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white", position: "relative", left: "20%" }}>
                ACTIVITÉS D'INFORMATIONS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://allaitementquebec.org/contact/" style={{ color: "white", position: "relative", left: "50%" }}>CONTACT</a>
            </li>
            <li class="nav-item">
              <img src='./assets/img/allaitement/Logo.png' class="logoimage" alt="Logo" ></img>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://allaitementquebec.org/commentaire/" style={{ color: 'white', position: "relative", left: "145%" }} >Laisser un commentaire</a>
            </li>
            <li style={{ position: "relative", top: "8px", left: "28%" }}>
              <div class="line">
              </div>
            </li>
            <li>
              <img src='./assets/img/allaitement/phonepart.png' style={{ width: "20px", height: "20px", position: "relative", left: "300px", top: "6px" }}></img>
            </li>
            <a class="nav-link" href="https://allaitementquebec.org/commentaire/" style={{ color: 'white', position: "relative", left: "31%" }} >APPELER-NOUS : 418-623-097</a>
            <li style={{ position: "relative", top: "8px", left: "33%" }}>
              <div class="line">
              </div>
            </li>
            <li>
              <img src='./assets/img/allaitement/facebook.png' style={{ width: "20px", height: "20px", position: "relative", left: "340px", top: "6px" }}></img>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          </form>
        </div>
      </nav>
      <div className="layout overflow-hidden">
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/Chat2" element={<Chat2 />}></Route>
          <Route path="/Connexion" element={<Connexion />}></Route>  
          <Route path="/CreerChat" element={<CreerChat />}></Route>
          <Route path="/TableauDeBord" element={<TableauDeBord />}></Route>
          <Route path="/TableauDeBordChat" element={<TableauDeBordChat />}></Route>
        </Routes>
         
      </div>
    </Router>
        
      </div>
    </div>
  );
}

export default App;
