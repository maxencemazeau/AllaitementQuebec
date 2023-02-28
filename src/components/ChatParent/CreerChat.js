import React, { Component, useState } from 'react'
import axios from 'axios'
import {  
    useNavigate
  } from "react-router-dom";


export default function CreerChat(){

    
    const idParent = {
        idParent : 1
    } 

    const navigate = useNavigate();


    const creerChat = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:8080/creerChat/`, idParent);
        console.log(res);
        navigate("/Chat");
    }

    return(
        <div>
            
            <form onSubmit={creerChat}>
                <button type="submit">Commencer un chat</button>
            </form>
            

        </div>
    )
} 