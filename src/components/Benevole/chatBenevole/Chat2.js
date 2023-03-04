import {  useNavigate, useLocation} from "react-router-dom";
import { Component, useState, state ,Fragment} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
   
export class Chat2 extends Component {

  constructor(props){
    super(props);
    this.state ={
      discussion: []
    }
  }
  

    componentDidMount()
  {
    

    axios.get(`http://localhost:8080/discussionBenevole/6`)
    .then(res =>{
      this.setState({ discussion : res.data
    })
    console.log(res.data);
    
    })
  }


  render() {
    const {discussion} = this.state
    return (
      <body>
        <div className="main">
          <table>
            <h2>{this.props.id}</h2>
            <h2>detail du chat:</h2>
            <tr>
            <th>message:</th>
            </tr>
            
          {discussion.map(discussions=> <tr>
          <td>{discussions.message}</td>
        
          </tr>)}
          </table>
          
      </div>


      <div className="main">
          <form action="http://localhost:8080/chatBenevoleEnvoi" method="post">
         
            <input type="text"  name='message' placeholder="Entrez Votre message" className="input" />
            <input type='submit' value='envoyerMessage'/>

          </form>
          </div>
        </body>
    )
  }
}

export default Chat2