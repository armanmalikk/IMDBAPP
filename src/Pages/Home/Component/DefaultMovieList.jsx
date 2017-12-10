import React, { Component } from 'react';
import MovieApi from '../../../Services/MovieApi.js';
import { connect } from 'react-redux';
import $ from 'jquery';

@connect((store) => {
  return {...store.home};
})
class DefaultMovieList extends Component {

    constructor() {
      super();
      this.state={
        maxPageNumber:0,
        pageNumber:1
      };
    }

    componentWillMount(){

    }

    componentDidMount(){

      let that = this;
      MovieApi.getDefaultMovie('popular',this.state.pageNumber).done(function(res){
        console.log(res)
        that.props.dispatch({type:'ADD-DEFAULT-MOVIES',payload:res.results})
        that.setState({maxPageNumber:res.total_pages})
      })

      //=================>
      //======scroll=====>
      //=================>
      $(window).scroll(function() {
          if($(window).scrollTop() == $(document).height() - $(window).height()) {
              console.log('down')
              if(that.state.pageNumber < that.state.maxPageNumber){
                that.setState({pageNumber:that.state.pageNumber+1},function(){
                  MovieApi.getDefaultMovie('popular',that.state.pageNumber).done(function(res){
                    console.log(res)
                    that.props.dispatch({type:'ADD-DEFAULT-MOVIES',payload:res.results})
                    that.setState({maxPageNumber:res.total_pages})
                  })
                })

              } // check if page number is less than total page

          }// calcualte end scroll
      });// end scroll
    }


    render(){

        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p>Movie Sort by Popularity ascending order, Page {this.state.pageNumber}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                {this.props.deafultMovieList.map((v,i) =>{

                  let base = "https://image.tmdb.org/t/p/w300/"+v.poster_path
                  return (
                    <div key={i} className="movie-card">
                      <img height="300" width="200" src={base} />
                      <p className="info-danger">{v.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        );
    }


}

export default DefaultMovieList
