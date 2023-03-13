import './Connexion.css';
import imageBebe from "./images/image1.jpg";
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Connexion() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const inputLogin = useRef();
  const inputPassword = useRef();


  const Connecter = (e) => {
    e.preventDefault();
    const login = inputLogin.current.value;
    const password = inputPassword.current.value;
    console.log(login);
    console.log(password);
    axios.post("http://localhost:8080/connexionBenevole", { login, password }).then((response) => {
      sessionStorage.setItem('benevole', JSON.stringify(response.data));
      navigate('/TableauDeBordChatBenevole');
    });
    //navigate("/creerChat");
  }

  return (
    <div className="main">


      <div className="sub-main">
        <form action='post' onSubmit={Connecter}>
          <div className='input-div'>
            <h2>Connexion Parent</h2>

            <div >
              <input type="text" placeholder="Entrez Votre Login" className="input" ref={inputLogin} /><br></br>
              <input type="password" placeholder="Entrez Votre Mot de passe" className="input" ref={inputPassword} />
            </div>
            <div className="login-button">
              <button type='submit'>Connexion</button>
            </div>

            <p className="link">
              <a>s'inscrire</a>
            </p>


          </div>
        </form>
      </div>

      <div >
        < img className="sub-main2" src={imageBebe} alt="imageBebe" />
      </div>
    </div>
  );
}

export default Connexion;