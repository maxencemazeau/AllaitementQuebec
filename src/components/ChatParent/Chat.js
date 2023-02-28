import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

export default function Chat (){ 

   

    const [data, setData] = useState([]);
    const [messages, setMessages] = useState([]);
    const input = useRef();
    

   useEffect(() =>{
       axios.get(`http://localhost:8080/discussion/${1}`)
        .then(res => setMessages(res.data))
        .catch(err => console.log(err));
    }, []); 
   
   

    
    const Envoie = () => {
        const message = input.current.value;
        setData([...data, message])
        
        console.log(message);
        sendData(message);
    }

    const sendData = (message) => {
        axios.post('http://localhost:8080/postDiscussion', {message})
    }
       
        return(
            <div>
                <p>Vous êtes dans le chat</p>
            <ul>
                {messages.map(messages => (
                <div key={messages.id}>
                    <p>{messages.message}</p>
                    <p></p>
                </div>
             ))}
            </ul>
                <ul>
        {data.map((datas, index) => (
          <li key={index}>{datas}</li>
        ))}
      </ul>
               
                    <input type="text" placeholder="Message" ref={input} />
                    <button type="submit" onClick={Envoie}>Envoie</button>
               
                
                
            </div>
        )
}
   



    