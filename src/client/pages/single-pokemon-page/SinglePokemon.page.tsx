import React from "react";
import "./single-pokemon-page.css"
import SingleCard from "../../components/single-card/SingleCard.component";
import GoBack from "../../components/goBack/GoBack.component";

export default function SinglePokemonPage() {
    return (
        <div className="single-pokemon-page-container">
            <GoBack></GoBack>
            <SingleCard></SingleCard>
        </div>
    )
}