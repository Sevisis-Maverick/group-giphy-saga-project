import React, { Component } from 'react';
import {connect} from 

class Favorites extends Component {

    //axios GET needed here??

     state = {
        favoritesBar: '',
    };

    changeHandler = (event) => {
        this.setState({
            favoritesBar: event.target.value,
        });
        console.log(this.state);
    };

    onClick = () => {
        
    };
      render() {
        return (
            <div>
                <h1>(Search Area)</h1>

                <input type='text' placeholder='Giphy Favorites'></input>

                <button>Search Favorites</button>

            </div>
        );
    }

}

export default Favorites;
