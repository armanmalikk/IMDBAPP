import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render(){
        return(
          <nav className="navbar">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand text-danger" href="#">Xooffer Movie Search</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          {/* Change from a to Link */}
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/cars">Top 10</Link></li>
                          <li><Link to="/about">Team</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
        );
    }
}


export default NavBar
