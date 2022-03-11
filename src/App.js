import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect  } from "react";
import JsonData from "./data/data.json"
import ReactPaginate from "react-paginate";
import Header from './component/Header';

function App() {

  const [pokemons, setPokemon] = useState(JsonData.slice(0, 50));
  const [searchPokemon, setPokemonData] = useState("");

  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(JsonData);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;

  const displayPokemons = filteredData
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((pk) => {
    return (
       <>

      <div className="container">
          <div className="product-card shadow-sm">
            <img className="product-img" src={pk.pokemonImgPath} alt="" />
            <div className="title">{pk.pokemonName}</div>
            <div className="subtitle">CP: {pk.cp}</div>
            <div className="subtitle">HP: {pk.hp}</div>
            <div className="subtitle">Defense: {pk.defense}</div>
            <div className="subtitle">Attack: {pk.attack}</div>
            <div className="subtitle">Type 1: {pk.type1}</div>
            <div className="subtitle">Type 2: {pk.type2}</div>
          </div>
        </div>
        </>
    );
  });

  const pageCount = Math.ceil(pokemons.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = JsonData.filter((data) => {
    return data.pokemonName.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
    }

  return (

    
    <div className="App">
      <Header></Header>
            <div className="container-fluid d-flex">
            <input type="text" placeholder="search" className="form-control" 
                    onChange={(e) => { handleSearch(e);}} />
        </div>

      
                {}
         
            
    {displayPokemons}
    <div style={{ height: 1000, width: '200%' }}>
      <h4>
        
      </h4>
    </div>
    <><br /><ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"} /></>
    
  </div>

  );
}

export default App;
