import SearchContainer from '../src/containers/SearchContainer'
import ResultsContainer from '../src/containers/ResultsContainer'
import PokeCard from './components/PokeCard';

import React from 'react';

class App extends PokeCard {
  state = {
    loading:true,
    error: null,
    data: {
      info: {},
      results: {}
    },

  }
  
searchPokemon = (event) => {
    this.setState({
searchText: event.target.value
    })
  }

  componentDidMount(){
    getPersonajes = async ()=> {
      this.setState({loading:true, error:null}),
    fetch("https://pokeapi.co/api/v2/ability/{id or name}/")
    .then(response => response.json())
    .then(data => {
      this.setState({
        allPokemon: data.data.pokemon
      })
    })
  }


  render() { 
      return (
      <div className="App">
        < SearchContainer searchPokemon={this.searchPokemon}/> 
        < ResultsContainer pokemonArray={this.state.allPokemon.filter(pokemon => pokemon.pokemon.toLowerCase().includes(this.state.searchText)).slice(0, 30)}/>
      </div>
    );
  }
}
}

export default App;