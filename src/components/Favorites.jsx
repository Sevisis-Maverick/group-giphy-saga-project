import React, { Component } from 'react';
import axios from 'axios';

class Favorites extends Component {

    //axios GET needed here
    //axios PUT

     state = {
        allFavorites: [],
    };

    changeHandler = (event) => {
        this.setState({
            favoritesBar: event.target.value,
        });
        console.log(this.state);
    };

    componentDidMount() {
        //GET HERE.
        //get data from backend and render to the DOM.
        // arrofUrlStrings
        axios.get('api/favorite/')
            .then((response)=>{
                const allFavorites = response.data;
                console.log(allFavorites);
               this.setState({ allFavorites });
            })
        .catch((error)=> console.log(error));
    };

//     getData = () => {
//     axios
//       .get("/gallery/")
//       .then((res) => {
//         const allFavorites = res.data;
//         this.setState({ allFavorites });
//       })
//       .catch((err) => console.log(err));
//   };

    onClick = () => {
        
    };



      render() {
          console.log(this.state.allFavorites);
        return (
            <div>
                <h1>Favorites</h1>

                <form>
                <label for="gifGenre">Genre:</label>
                    <br />
                    
                <select name="gifGenre" id="gifGenre">
                    <option value="funny">Funny</option>
                    <option value="cohort">Cohort</option>
                    <option value="nsfw">Nsfw</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="meme">Meme</option>
                </select>
                </form>
            </div>
        );
    }

}
{/* <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">
    Dropdown
  </button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>; */}
export default Favorites;
