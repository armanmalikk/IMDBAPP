'use strict';
import $ from 'jquery';

class MovieService {

  static getByKeyword(keyWord){
    return $.ajax({
      url: 'https://api.themoviedb.org/3/search/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&query='+keyWord+'&page=1&include_adult=false',
      type:'GET',
    })
  }

  static getDefaultMovie(type,pageNumber){
    return $.ajax({
      url: 'https://api.themoviedb.org/3/movie/'+type+'?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&page='+pageNumber,
      type:'GET',
    })
  }

}// end Class


export default MovieService;
