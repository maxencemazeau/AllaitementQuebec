import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Body } from './components/Body';


function App() {
  return (
    <div className="App">
      <div className="layout overflow-hidden">
        <Header/>
      
        <SideBar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
