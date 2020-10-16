import React, { Component } from 'react';
import { Grid, Box, Text } from "@chakra-ui/core";
import axios from 'axios';

class Search extends Component {

    state = {
        search: '',
        results: [] //want an array of URL strings
    };

    addToFav = (urlString) => {
        console.log(urlString);
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.search);
        // this.props.dispatch({
        //     type: 'GET_GIPHY',
        //     payload: this.state.search
        // })

        const searchParameter = this.state.search;
        axios.post(`api/search/`, {searchParameter}).then((response) => {
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
                </form>
                    
                    {/* this.state.results = ['URL1', 'URL2', 'URL3', ...] 
                    when we call the .map method on that array 
                    
                    for(let i=0; i < this.state.results; i++){
                        const urlString = this.state.reults[i]
                        <img src= urlString />
                    }
                    */}
                    <br />
                    <Grid
            bg="transparent"
            margin={4}
            justifyContent="center"
            alignItems="center"
            templateColumns="repeat(2, 1fr)"
            gap={2}
          >
                        {this.state.results.map((urlString) => <Box><img src={`${urlString}`} /><br /><button onClick={() => this.addToFav(urlString)}>favorite this!</button></Box>)}
                        {/*mapped over the results array that contains the images sent back from the 3rd party API */}
                        </Grid>
            </div>
        );
    }

}

export default Search;
