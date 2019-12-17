import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images : [] };

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization:
                    'Client-ID 1e597489d067f19eb1b5ce980f4503ac1dde24d9366e00f3df9f5b97a6704a61'
            }
        });



        this.setState({images: response.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found:{this.state.images.length} images
            </div>
        );
    }
}

export default App;
