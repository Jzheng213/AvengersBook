//React
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//Components
import SearchBar from '../search/search_form'

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className='logged-in-nav-bar'>
        <nav className='logged-in-nav-bar-container'>
          <section className='left-section'>
            <div className='home-link-container'>
              <NavLink to={'/newsfeed'} className='home-link'>
                <span>A</span>
              </NavLink>
            </div>
            <SearchBar />
          </section>
          <section className='right-section'>

            <Link to={`/user/${this.props.currentUser.id}`} className='nav-link nav-profile-link'>
              <img className='nav-profile-pic' src={this.props.currentUser.profile_pic_url}/>
              <span>{`${this.props.currentUser.first_name}`}</span>
            </Link>

            <Link to={'/newsfeed'} className='nav-link nav-newsfeed-link'>
              <span>Home</span></Link>

            <nav className='util-container'>
              <button className='nav-button' href='#'>
                <img className='nav-img friend-request-img' src={window.navPeople} />
              </button>

              <button className='nav-button' href='#'>
                <img className='nav-img messenger-img' src={window.navMessenger} />
              </button>
              <button className='nav-button' href='#'>
                <img className='nav-img notification-img' src={window.navGlobe} />
              </button>
            </nav>
            <button className='nav-button' href='#'>
              <img className='nav-img quick-help-img' src={window.navHelp} />
            </button>
            <button className='nav-button dropdown-container' href='#'>
              <img className='nav-img settings-img' src={window.navDownArrow} />
              <div className='dropdown-content-container'>
                <div className='dropdown-content'>
                  <img className='upArrow' src={window.upArrow} />
                  <a href='#'>Create Page</a>
                  <a href='#'>Manage Page</a>
                  <button href='#' onClick={this.handleLogout}>Logout</button>
                </div>
              </div>
            </button>
            <button onClick={this.props.logout}>logout</button>

          </section>
        </nav>
      </nav>
    );
  }
}
