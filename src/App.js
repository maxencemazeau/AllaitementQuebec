import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Body } from './components/Body';
import { FaHome } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <div className="App">
 <nav class="navbar navbar-expand-lg navbar-light  " style={{backgroundColor: 'rgba(61, 72, 139, 1)',padding:"1.2%"}}> 
  <img src='./assets/img/allaitement/home.png' style={{width:"18px",position:"relative",left:"2%"}}></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https://allaitementquebec.org/a-propos/" style={{color:"white",position:"relative",left:"50%"}}>À PROPOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://allaitementquebec.org/services/" style={{color:"white",position:"relative",left:"50%"}}>SERVICES</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white",position:"relative",left:"20%"}}>
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
      <a class="nav-link" href="https://allaitementquebec.org/contact/" style={{color:"white",position:"relative",left:"50%"}}>CONTACT</a>
      </li>
      <li class="nav-item">
     <img src='./assets/img/allaitement/Logo.png' class="logoimage" alt="Logo" ></img>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="https://allaitementquebec.org/commentaire/"  style={{color:'white',position:"relative",left:"145%"}} >Laisser un commentaire</a>
      </li>
      <li style={{position:"relative",top:"8px",left:"28%"}}>
      <div class="line">
      </div>
      </li>
      <li>
     <img src='./assets/img/allaitement/phonepart.png'style={{width:"20px",height:"20px",position:"relative",left:"300px",top:"6px"}}></img>
     </li>
      <a class="nav-link" href="https://allaitementquebec.org/commentaire/"  style={{color:'white',position:"relative",left:"31%"}} >APPELER-NOUS : 418-623-097</a>
      <li style={{position:"relative",top:"8px",left:"33%"}}>
      <div class="line">
      </div>
      </li>
      <li>
        <img src='./assets/img/allaitement/facebook.png'style={{width:"20px",height:"20px",position:"relative",left:"340px",top:"6px"}}></img>
     </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    </form>
  </div>
</nav>
      <div className="layout overflow-hidden">
        <Header/>
        <SideBar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
