import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    state = {
        search: '',
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'GET_GIPHY',
            payload: this.state.search
        })
        this.setState({
            search: ""
        })

        this.props.history.push('/favorites');
    }

    render() {
        return (
            <div>
                <h1>(Search Area)</h1>
                <form onSubmit={this.onSubmit}>
                <input type='text' placeholder='Enter Giphy Search HERE'></input>
                <br />
                <button className="button">Search Giphy</button>
            
                </form>
            </div>
        );
    }

}

export default Search;
