//React
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//Components
import SearchBar from '../search/search_form';
import DropDown from '../util/drop_down';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.settingsContents = {'Create Page': null,'Manage Page': ()=>{console.log('whatever');}, 'Log Out': this.props.logout};
    this.helpContents = {'Adding a Cover': null, 'Activity Log': null, 'starring and hiding stories': null}
    this.defaultContents = {'feature working in progess': null}
  }

  componentDidMount(){
    document.addEventListener('mousedown', this.handleClickInside);
    this.props.requestPendingFriendRequests(this.props.currentUser.id);
  }

  componentWillReceiveProps(){

  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickInside);
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
              <span>Home</span>
            </Link>
            <nav className='nav-button-container'>
              <nav className='util-container'>
                <DropDown customClass='nav-button' list={this.defaultContents} img={window.navPeople} />
                <DropDown customClass='nav-button' list={this.defaultContents} img={window.navMessenger} />
                <DropDown customClass='nav-button' list={this.defaultContents} img={window.navGlobe} />
              </nav>
              <DropDown customClass='nav-button' list={this.helpContents} img={window.navHelp} />
              <DropDown customClass='nav-button' list={this.settingsContents} img={window.navDownArrow} />
            </nav>
          </section>
        </nav>
      </nav>
    );
  }
}
