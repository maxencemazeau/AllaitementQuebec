
import React, { Component, useStat, useEffect } from 'react'
import axios from 'axios'
import {  useNavigate, useLocation} from "react-router-dom";
import { propTypes } from 'react-bootstrap/esm/Image';

export default class ObtenirChat extends Component {

  constructor(props){
    super(props);
    this.state ={
      chat: []
    };
  }

  componentDidMount()
  {
    axios.get('http://localhost:8080/obtenirChat')
    .then(res =>{
      this.setState({ chat : res.data
    })
    console.log(res.data);
    
    })
  }

  //  getId = (id) => 
  // {
  //   console.log(id);
  //    const navigate = useNavigate();
  //   const idChat = id; // replace with the id you want to send
  //   navigate(`/TableauDeBordChat/${idChat}`);
  //  }

  render(){
    const {chat} = this.state
    return (
      <body>
        
      <div className="main">
          <table>
            <h2>liste des chats:</h2>
            <tr>
            <th>id:</th>
            <th>date:</th>
            </tr>
            
          {chat.map(chats=> <tr>
          <td><a href='/TableauDeBordChat'>{chats.id}</a></td>
          {/* <td><a href={'/TableauDeBordChat?id='+chats["id"]}>{chats.id}</a></td>  */}
           {/* <td><button onClick={this.ChangerId(chats.id)}>{chats.id}</button></td>  */}
          
          <td>{chats.dateDebut}</td>
          </tr>)}
          </table>

          
      </div>
      
      </body>


    );
  }
}
