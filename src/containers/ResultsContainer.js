import React from "react";
import PokeCard from '../components/PokeCard'

class ResultsContainer extends React.Component{
    
    render(){
        console.log(this.props)
        return (
            <div>
                <div className="results-container">
                    {this.props.pokemonArray.map(pokemon => {
                        return < PokeCard key={pokemon.id} pokemonObject={pokemon}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ResultsContainer