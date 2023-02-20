import './Creation.css';
import imageBebe from "./images/image1.jpg";



function Creation() {
  return (
    <div className="main">


          <div className="sub-main">
            <div className='input-div'>
              <h2>Creation Activite</h2>
              <form action="http://localhost:8080/creerActivite" method="post">
              <div className='input-nomprenom' >
                <div className='input-nom'>
                <input type="text" name='nomEvent' placeholder="Entrez le Nom" className="input" /><br></br>
                </div>

                <div className='input-prenom'>
                <input type="text" name='description' placeholder="Entrez Votre description" className="input" />
                </div>
              </div>
              

              <div >
                <input type="text"  name='tarif' placeholder="Entrez Votre tarif" className="input" /><br></br>
                <input type="text"  name='platforme' placeholder="Entrez Votre platforme" className="input" />
                <input type="text"  name='lieu' placeholder="Entrez Votre lieu" className="input" />
                <input type="text"  name='LienZoom' placeholder="Entrez Votre LienZoom" className="input" />
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
              {/* < img className="sub-main2" src={imageBebe} alt="imageBebe" /> */}
          </div>
    </div>
  );
}

export default Creation;