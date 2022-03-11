import React from "react";
import './Pokemon.css';

const PokemonList = (props) => {

    const {pokemonName, pokemonImgPath, cp, hp, defense, attack, type1, type2} = props.searchPokemon;

    return (
        
        <div className="container">
            <div className="product-card shadow-sm">
                <img className="product-img" src={pokemonImgPath} alt="" />
                <h5 className="title">{pokemonName}</h5>
                <h5 className="subtitle">CP : {cp}</h5>
                <h5 className="subtitle">HP : {hp}</h5>
                <h5 className="subtitle">Defense : {defense}</h5>
                <h5 className="subtitle">Attack : {attack}</h5>
                <h5 className="subtitle">Type 1 : {type1}</h5>
                <h5 className="subtitle">Type 2 : {type2}</h5>
            </div>
        </div>
    );
};

export default PokemonList;