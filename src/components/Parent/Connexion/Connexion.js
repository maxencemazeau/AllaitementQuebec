import './Connexion.css';
import imageBebe from "./images/image1.jpg";



function Connexion() {
  return (
    <div className="main">


          <div className="sub-main">
            <div className='input-div'>
              <h2>Connexion cote Parent</h2>
              <div >
                <input type="text" placeholder="Entrez Votre Email" className="input" /><br></br>
                <input type="password" placeholder="Entrez Votre Mot de passe" className="input" />
              </div>
              <div className="login-button">
                <button>Connexion</button>
              </div>

              <p className="link">
                 <a>s'inscrire</a> 
              </p>


            </div>
            
          </div>

          <div >
              < img className="sub-main2" src={imageBebe} alt="imageBebe" />
          </div>
    </div>
  );
}

export default Connexion;