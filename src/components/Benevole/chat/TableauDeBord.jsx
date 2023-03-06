import '../../../App';
import React, { Component } from "react";
import Chat from './chat';
import ListChat from './listChat';
// import Nav from '../../interfaces/Navbar'
export default class TableauDeBord extends Component {
  state = {
    idChatSelectionne: 7
  }

  //
  ChangerId = (id) => {
    this.setState({idChatSelectionne : id})
    console.log("chatid ", this.state.idChatSelectionne)
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          {/* <Nav /> */}
          <body>
            <ListChat changerId={this.ChangerId} />
            <Chat idChatSelectionne={this.state.idChatSelectionne}/>
          </body>
        </div>
      </React.Fragment>
    );
  }
}

