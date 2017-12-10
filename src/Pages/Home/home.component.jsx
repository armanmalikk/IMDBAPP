import React, { Component } from 'react';
import NavBar from '../../Common/Component/NavBar.jsx';
import KeyWordSearch from './Component/KeyWordSearch.jsx';
import DropDownList from './Component/DropDownList.jsx';
import DefaultMovieList from './Component/DefaultMovieList.jsx';
class Home extends Component {

  constructor() {
    super();
    this.state={};
  }

    render(){
        return (
          <div>
            <NavBar />
            <div className="row">
              <div className="col-sm-12">
                <KeyWordSearch />
              </div>
              <div className="col-sm-12 dropDownList">
                <DropDownList />
              </div>
            </div>
            <div className="row">
            <div className="col-sm-12 dropDownList">
              <DefaultMovieList />
            </div>
            </div>
          </div>

        );
    }
}

export default Home
