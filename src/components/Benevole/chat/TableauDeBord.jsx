import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ObtenirChat2 from "./obtenirChat2";
import Chat2 from "./Chat2";

export default function TableauDeBord(){

    const session = JSON.parse(sessionStorage.getItem('benevole'));
    console.log(session);


    return(
        <div>
            <h1>Tableau de bord benevole</h1>
           <ObtenirChat2/>
           <Chat2/>
        </div>
    );
}