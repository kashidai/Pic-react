import React from "react";
import axios from 'axios';
import SerchBar from "./SerchBar";

class App extends React.Component{
    onSearchSubmit(term){

    }

    render() {
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
        <SerchBar onSubmit={this.onSearchSubmit} />
    </div>
    );
    }
}

export default App;
