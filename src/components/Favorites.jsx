import React, { Component } from 'react';
import { Grid, Box } from "@chakra-ui/core";
import axios from 'axios';

class Favorites extends Component {

    //axios GET needed here
    //axios PUT

     state = {
         allFavorites: [],
         category: ''
    };

    // changeHandler = (event) => {
    //     this.setState({
    //         favoritesBar: event.target.value,
    //     });
    //     console.log(this.state);
    // };

    getData() {
        axios.get('api/favorite/')
                .then((response)=>{
                    const allFavorites = response.data;
                this.setState({ allFavorites });
                })
            .catch((error)=> console.log(error));
    }

    componentDidMount() {
        //GET HERE.
        //get data from backend and render to the DOM.
        // arrofUrlStrings
        this.getData();
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

    handleCategoryChange(id, category) {
        const categoryMapper = {
            'funny': 1,
            'cohort': 2,
            'cartoon': 3,
            'nsfw': 4,
            'meme': 5,
        }
        let category_id = categoryMapper[category];
        axios
        .put(`/api/favorite/${id}`, { category, category_id })
        .then(() => this.getData())
        .catch((err) => console.log(err));
    }



      render() {
        return (
          <div className='FavHeader'>
            <h1>Favorites</h1>
           <Grid
            bg="transparent"
            margin={4}
            justifyContent="center"
            alignItems="center"
            templateColumns="repeat(2, 1fr)"
            gap={2}
          >
                    {/*           displays favorites on the dom, need the .url because it returns an object so you have to grab the key */}
                
                    {this.state.allFavorites.map((imgDataObj) => {
                        return (
                            <Box key={imgDataObj.id}>
                        <img src={`${imgDataObj.url}`} />
                        <br />
                        <label htmlFor="gifGenre">Pick a Category!</label>
                        <br />
                                <button onClick={(event) => this.handleCategoryChange(imgDataObj.id, 'funny')}>funny</button>
                                <button onClick={(event) => this.handleCategoryChange(imgDataObj.id, 'cohort')}>cohort</button>
                                <button onClick={(event) => this.handleCategoryChange(imgDataObj.id, 'nsfw')}>nsfw</button>
                                <button onClick={(event) => this.handleCategoryChange(imgDataObj.id, 'cartoon')}>cartoon</button>
                                <button onClick={(event) => this.handleCategoryChange(imgDataObj.id, 'meme')}>meme</button>
                                <div>You set it to: {imgDataObj.category ? imgDataObj.category : 'Nothing'}</div> 
                        <br />
                        </Box>
                        )
                    })}
            </Grid>
            {/*mapped over the allFavorites array that contains the images sent back from the 3rd party API */}
          </div>
        );
    }

}
export default Favorites;
