import React from 'react';

export default class SearchBar extends React.Component {
  render(){
    return(
      <form className='search-bar'>
        <input className='search-bar-input' type='text' placeholder='Search'></input>
        <button className='search-bar-button'>
          <img className='search-img' src={window.navSearch} />
        </button>
      </form>
    );
  }
}
