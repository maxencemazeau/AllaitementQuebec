import './Inscription.css';
import imageBebe from "./images/image1.jpg";



function Inscription() {
  return (
    <div className="main">


          <div className="sub-main">
            <div className='input-div'>
              <h2>Inscription cote Parent</h2>
              <form action="http://localhost:8080/creerParent" method="post">
              <div className='input-nomprenom' >
                <div className='input-nom'>
                <input type="text" name='nom' placeholder="Entrez Votre Nom" className="input" /><br></br>
                </div>

                <div className='input-prenom'>
                <input type="text" name='prenom' placeholder="Entrez Votre Prenom" className="input" />
                </div>
              </div>
              

              <div >
                <input type="text"  name='courriel' placeholder="Entrez Votre Email" className="input" /><br></br>
                <input type="text"  name='password' placeholder="Entrez Votre Mot de passe" className="input" />
              </div>
              <div className="login-button">
                <input type='submit' value='sinscrire'/>
              </div>
              </form>
              <p className="link">
                 <a>se connecter</a> 
              </p>


            </div>
            
          </div>

          <div >
              < img className="sub-main2" src={imageBebe} alt="imageBebe" />
          </div>
    </div>
  );
}

export default Inscription;