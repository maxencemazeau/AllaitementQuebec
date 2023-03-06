import { useNavigate, useLocation } from "react-router-dom";
import { Component, useState, state, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withRouter } from 'react-router-dom';
export class Chat2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      discussion: []
    }
  }

  componentDidMount() {
    // const { match } = this.props;
    // const { params } = match;
    // const { id } = params;
    // this.setState({ id });

    axios.get('http://localhost:8080/discussionBenevole/7')
      .then(res => {
        this.setState({
          discussion: res.data
        })
        console.log(res.data);

      })
  }


  render() {
    const { discussion } = this.state
    return (
      <body>
        <div className="main">
          <table>
            <h2>detail du chat:</h2>
            <tr>
              <th>message:</th>
            </tr>

            {discussion.map(discussions => <tr>
              <td>{discussions.message}</td>

            </tr>)}
          </table>

        </div>


        <div className="main">
          <form action="http://localhost:8080/chatBenevoleEnvoi" method="post">
            <input type="hidden" name="idBenevole" value="null"></input>
            <input type="text" name='message' placeholder="Entrez Votre message" className="input" />
            <input type='submit' value='envoyerMessage' />

          </form>
        </div>
      </body>
    )
  }
}

export default Chat2