import React, { Component } from 'react';
import MovieApi from '../../../Services/MovieApi.js';
import { connect } from 'react-redux';
import $ from 'jquery';

@connect((store) => {
  return {...store.home};
})
class DropDownList extends Component {

    constructor() {
      super();
      this.state={};
    }
    render(){
        return (
          <ul>
            {this.props.KeyWordSearchedMovies.map((v,i) =>{

              let base = "https://image.tmdb.org/t/p/w300/"+v.poster_path
              return(
                <li key={i}>
                  <strong>{v.title}</strong><br/>
                  <img src={base} />
                </li>
              )
            })}
          </ul>

        );
    }
}

export default DropDownList
