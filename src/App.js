import ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/accueil';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  

      <Routes>
                 <Route exact path='/accueil' element={< Accueil />}></Route>
                
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
