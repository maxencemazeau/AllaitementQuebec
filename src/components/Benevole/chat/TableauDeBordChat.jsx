import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Chat2 from "./Chat2";

export default function TableauDeBordChat(){

    const session = JSON.parse(sessionStorage.getItem('benevole'));
    console.log(session);

    return(
        <div>
            <h1>Tableau de bord benevole</h1>
            <h1>{this.params.id}</h1>
            <Chat2/> 
        </div>
    );
}