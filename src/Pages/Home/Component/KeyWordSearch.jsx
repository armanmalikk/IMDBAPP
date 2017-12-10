import React, { Component } from 'react';
import MovieApi from '../../../Services/MovieApi.js';
import { connect } from 'react-redux';
import $ from 'jquery';

@connect((store) => {
  return {...store.home};
})
class KeyWordSearch extends Component {

    constructor() {
      super();
      this.state={};
      this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e){
      let keyWord = e.target.value;
      let that = this;
      if(keyWord){
        let call1 = MovieApi.getByKeyword(keyWord).done((res) =>{
          console.log(res);

          that.props.dispatch({type:"ADD-KEY-WORD-SEARCHED-MOVIES",payload:res.results})
        })
      }else{
        that.props.dispatch({type:"ADD-KEY-WORD-SEARCHED-MOVIES",payload:[]})
      }


    }
    render(){
        return (
          <div>
            <input type="text" id="searchInput"
            className="searchBar" onChange={this.onSearch} placeholder="Search a movie" required="" />
          </div>

        );
    }
}

export default KeyWordSearch
