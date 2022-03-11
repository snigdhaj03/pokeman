import React, {  useState } from 'react';
import JsonData from '../data/data.json';
import PokemonList from './PokemonList';

const List = () => {

    const [searchPokemon, setPokemon] = useState("");

    return (
        
        <><div className="container-fluid d-flex">
            <input type="text" placeholder="search" className="form-control" 
                    onChange={(e) => { setPokemon(e.target.value);}} />
        </div>
        <div className="container-fluid d-flex">                
            <div className="col-lg-9 product-area border-right">
                {/* {product.map(pd => <Product product={pd}></Product>)} */}

                { JsonData.filter((val) => {

                    if (searchPokemon === "") {

                        return val;
                    }else if (val.pokemonName.toLowerCase().includes(searchPokemon.toLowerCase())){

                        return val;
                    }

                    return null;
                }).map(pd => <PokemonList searchPokemon={pd}></PokemonList>)}
            </div>
        </div></>
    );
};

export default List;