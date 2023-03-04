import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

export default function Chat (){ 

    const [data, setData] = useState([]);
    const [messages, setMessages] = useState([]);
    const input = useRef();
    // const parent = JSON.parse(sessionStorage.getItem('parent'));
    // const idParent = JSON.stringify(parent.id);;

//    useEffect(() =>{
//        axios.get(`http://localhost:8080/discussion/${idParent}`)
//         .then(res => setMessages(res.data))
//         .catch(err => console.log(err));

//     }, []); 

    
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
   



    