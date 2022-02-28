import React from "react";
import { useNavigate } from 'react-router-dom';

export default function GoBack() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}
