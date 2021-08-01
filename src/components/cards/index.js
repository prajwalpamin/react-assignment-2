import React, { Component } from 'react';
import reactDom from 'react-dom';
import "./index.css";


class card extends Component{
    constructor(props){
        super(props)
        // this.state={name:"movie"};
    const {Title,Year,imdbID,Type,Poster}= this.props;
    }
    render(){
        return(
            <div>
                <div className="movie-card " >
                   <img className="movie-poster" src={this.props.Poster} alt="poster"/>
                    <div className="transp-card">
                    <h2 className="movie-title">{this.props.Title}</h2>
                    <p>{this.props.Year}</p>
                    </div>
  
                </div>
            </div>
        )
    }
}
export default card;