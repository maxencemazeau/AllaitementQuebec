import '../../../App';
import './App2.css'
import React, { Component } from "react";
import Chat from './chat';
import ListChat from './listChat';
import Header from '../../interfaces/Header';
import Body from '../../interfaces/Body';
import SideBar from '../../interfaces/SideBar';
// import Nav from '../../interfaces/Navbar'
export default class TableauDeBord extends Component {
  state = {
    idChatSelectionne: 7
  }
/*
 nom du fichier : TableauDeBordChatBenevole.jsx
 fonction: ce fichier contient une fonction et appel les 2 fichiers listChat et chat

 auteur : thanina adda.
 modification par :

*/
  
  // fonction qui permet de changer l'id du chat selectionee dans la liste proposee.
  ChangerId = (id) => {
    this.setState({ idChatSelectionne: id })
    console.log("chatid ", this.state.idChatSelectionne)

  }

  //fonction render
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <body>
            <div className="App2">
            <Header></Header>
              <ListChat changerId={this.ChangerId} />
              <Chat idChatSelectionne={this.state.idChatSelectionne} />
              
            </div>
          </body>
        </div>
      </React.Fragment>
    );
  }
}
