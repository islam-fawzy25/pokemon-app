import React from "react";
import "./go-back.css"
import { useNavigate } from 'react-router-dom';

export default function GoBack() {
    const navigate = useNavigate();
    return (
        <div >
            <button className="go-back-button" onClick={() => navigate('/')}>  	&lt; &nbsp; Back</button>
        </div>
    )
}
