import React, { Component, useStat, useEffect } from 'react'
import axios from 'axios'
import {  
    useNavigate, useLocation
  } from "react-router-dom";


export default function CreerChat(){

    const location = useLocation();
    const parent = JSON.parse(sessionStorage.getItem('parent'));
    console.log(parent.id);
    const idParent = JSON.stringify(parent.id);;
    const navigate = useNavigate();

   
    

    const creerChat = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/creerChat`, { idParent });
        
        navigate("/Chat");
    }

    return(
        <div>
            <p></p>
            <form onSubmit={creerChat}>
                <button type="submit">Commencer un chat</button>
            </form>
            

        </div>
    )
} 