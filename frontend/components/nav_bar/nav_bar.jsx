//React
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//Components
import SearchBar from '../search/search_form';
import DropDown from '../util/drop_down';
import FriendRequestDropDown from '../notification/notification';


export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.settingsContents = {'Log Out': this.props.logout};
  }

  componentWillMount(){
    this.props.requestPendingFriendRequests(this.props.currentUser.id);

  }
  componentDidMount(){
    document.addEventListener('mousedown', this.handleClickInside);
    this.props.requestPendingFriendRequests(this.props.currentUser.id);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickInside);
  }

  render(){
    this.friendRequest = this.props;
    return(
      <nav className='logged-in-nav-bar'>
        <nav className='navbuffer' />
        <nav className='logged-in-nav-bar-container'>
          <section className='left-section'>
            <div className='home-link-container'>
              <NavLink to={'/newsfeed'} className='home-link'>
                <span>A</span>
              </NavLink>
            </div>

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
              <FriendRequestDropDown
                accept={this.props.accept}
                reject={this.props.reject}
                currentUser ={this.props.currentUser}
                friendRequestors={this.props.pendingFriendRequests}
                img={window.navPeople}
              />
              <DropDown customClass='nav-button' list={this.settingsContents} img={window.navDownArrow} />
            </nav>
          </section>
        </nav>
      </nav>
    );
  }
}
