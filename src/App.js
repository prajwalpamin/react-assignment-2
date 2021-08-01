import React, { Component } from 'react';
import './App.css';
import Card from "./components/cards/index"
import axios from 'axios';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      movies:[],
      moviesTemp:[],
      searchTerm:"",
      loader:true,
      
    }
  }
 
  componentDidMount(){
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
          .then(res=>{
            this.setState({movies:res.data.Search,loader:false});
        
          })
  }
  setSearchTerm=(e)=>{
     this.setState({searchTerm: e.target.value});
     
  }
  dynamicSearch(){
  
    console.log(this.state.searchTerm)
    this.state.moviesTemp=this.state.movies.filter(name=>name.Title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    console.log(this.state.moviesTemp)
  }
 
  render(){
  return (
    <div>
       
       <h2 className="Heading"style={{color:"grey"}}>Movies</h2>
       <div className="input-group rounded" >
                <input type="search" className="form-control rounded" value={this.state.searchTerm} onChange={this.setSearchTerm} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
               <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
                </span>
        </div>
        <div className="wrapper  ">
           
            {this.state.loader?(<h1>Loading...</h1>): (
             this.dynamicSearch(),
             this.state.moviesTemp.map((item)=>(
             <Card {...item} />
           ))
           )
           }
        </div>
    </div>
    
  );
}
}

export default App;
