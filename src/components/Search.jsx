import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    state = {
        search: '',
        results: [] //want an array of URL strings
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.search);
        // this.props.dispatch({
        //     type: 'GET_GIPHY',
        //     payload: this.state.search
        // })

        axios.get(`api/search/`, {searchParameter: this.state.search}).then((response) => {
            console.log(response) // response.data will be an array containing string URLs
            this.setState({ results: response.data})
        })

        this.setState({
            search: ""
        })

        // this.props.history.push('/favorites');
    }

    render() {
        console.log(this.state.results);
        return (
            <div>
                <h1>(Search Area)</h1>
                <form onSubmit={this.onSubmit}>
                <input value={this.state.search} onChange={(event) => this.setState({search: event.target.value})} type='text' placeholder='Enter Giphy Search HERE'></input>
                <br />
                    <button type="submit" className="button">Search Giphy</button>
                    <img src='https://media0.giphy.com/media/dIVa0pwco4Mj5rQ7gy/giphy.gif?cid=cbffb75exdtm4zv7sgwcebta9y8lslcapoifysvlci7gf2iw&rid=giphy.gif' />
                </form>
            </div>
        );
    }

}

export default Search;
