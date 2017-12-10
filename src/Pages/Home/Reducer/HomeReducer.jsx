'use strict';

export default function reducer(state={
  KeyWordSearchedMovies:[],
  deafultMovieList:[]
},action){
  if(action.type == 'ADD-KEY-WORD-SEARCHED-MOVIES'){
    state = {...state, KeyWordSearchedMovies: action.payload};
  }
  if(action.type == 'ADD-DEFAULT-MOVIES'){
    state = {...state, deafultMovieList: state.deafultMovieList.concat(action.payload)};
  }

  return state;
}
