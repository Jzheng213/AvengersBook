import React from 'react';

export default class SearchBar extends React.Component {
  render(){
    return(
      <div className='search-bar-container'>
        <form className='search-bar'>
          <input className='search-bar-input' type='text' placeholder='Search'></input>
          <button className='search-bar-button'>
            <img className='search-img' src={window.navSearch} />
          </button>
        </form>
      </div>
    );
  }
}
