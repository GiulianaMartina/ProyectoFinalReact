import React from 'react'
import "../style/styles.css"

class SearchContainer extends React.Component{
    
    render(){
        return (
            <div className="box">
                <h1 className="header-text title is-1"> Pokemon Searcher</h1>
                
                <div className="field ">
                                       
                    <div className="control">
                        <input className="input is-primary is-rounded" onChange={(event) => this.props.searchPokemon(event)}
                        type="text" placeholder="Search Pokemon..."></input>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SearchContainer