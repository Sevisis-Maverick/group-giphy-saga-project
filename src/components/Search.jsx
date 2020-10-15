import React, { Component } from 'react';


class Search extends Component {

    state = {
        search: '',
    };

    changeHandler = (event) => {
        this.setState({
            search: event.target.value,
        });
        console.log(this.state);
    };

    onClick = () => {

    };

    render() {
        return (
            <div>
                <h1>(Search Area)</h1>

                <input type='text' placeholder='Giphy search'></input>

            </div>
        );
    }

}

export default Search;
