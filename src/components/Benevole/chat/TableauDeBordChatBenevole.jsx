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

  //
  ChangerId = (id) => {
    this.setState({ idChatSelectionne: id })
    console.log("chatid ", this.state.idChatSelectionne)

  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          {/* <Nav /> */}
          <body>
            <div className="App2">
              <ListChat changerId={this.ChangerId} />
              <Chat idChatSelectionne={this.state.idChatSelectionne} />
              {/* <Header></Header>
            <SideBar></SideBar>
           
            <Body></Body> */}
            </div>
          </body>
        </div>
      </React.Fragment>
    );
  }
}

