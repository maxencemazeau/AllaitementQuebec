import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';


export default function Chat (){ 

    const [data, setData] = useState([]);
    const [messages, setMessages] = useState([]);
    const input = useRef();
    const parent = JSON.parse(sessionStorage.getItem('parent'));
    const idParent = JSON.stringify(parent.id);;

   useEffect(() =>{
       const fetch = async() =>{
        const res =  await axios.get('http://localhost:8080/dernierChat');
        console.log(res.data[0].id);
        const idChat = res.data[0].id;
        sessionStorage.setItem('chat', idChat);
       } 
       fetch();
       
        axios.get(`http://localhost:8080/discussion/${idParent}`)
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
        const idChat = sessionStorage.getItem('chat');
        console.log(idChat);
        axios.post('http://localhost:8080/postDiscussion', {message, idParent, idChat})
    }
       
        return(
            <div>
                <p>Vous êtes dans le chat</p>
            <ul>
                {messages.map(messages => (
                <div key={messages.id}>
                    <p>{messages.message}</p>
                    <p>{new Date(messages.moment).toLocaleTimeString()}</p>
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
   



    