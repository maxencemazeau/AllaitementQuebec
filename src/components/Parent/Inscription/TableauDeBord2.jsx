import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import CreerChat from "../../ChatParent/CreerChat";

export default function TableauDeBord(){

    const session = JSON.parse(sessionStorage.getItem('parent'));
    console.log(session);

    return(
        <div>
            <h1>Tableau de bord parent</h1>

           <CreerChat />
        </div>
    );
}