import React from 'react';
import { Link, NavLink } from 'react-router-dom';
class FriendRequestDropDown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: ''
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
  }

  executeAction(callback, e){
    e.preventDefault();
    if(callback) callback();
  }

  toggleShow(){
    this.setState(prevState => ({show: prevState.show === '' ? 'flexShow': ''}));
  }


  hide(e){
    if(e && e.relatedTarget && e.relatedTarget.tagName === 'A'){
      e.relatedTarget.click();
    }
    this.setState(() => ({show: ''}));
  }

  render(){
    let accept = this.props.accept;
    let reject = this.props.reject;
    return(
      <button className={'friend-request-button'} onBlur={this.hide} onClick={this.toggleShow} >
        <img className='dropdown-img' src={window.navPeople}/>
        {this.props.content}
        <div className={`${this.state.show || ''} friend-request-content`}>
          <header>Friend Requests</header>
          {
            Object.values(this.props.friendRequestors).map((requestor) =>{
              return (

                <div key={requestor.id} className={'requestor-item'}>
                  <div className='inner-container'>
                    <Link to={`/user/${requestor.id}`}><img className='friend-request-profile-pic' src={requestor.profile_pic_url}></img></Link>
                    <Link to={`/user/${requestor.id}`}>{requestor.full_name}</Link>
                  </div>
                  <div className='inner-container'>
                    <a href='#' className='button blue-button'
                      onClick={ this.executeAction.bind(
                        this, () => accept({
                          requestor_id: requestor.id,
                          receiver_id: this.props.currentUser.id,
                          request:false
                        })
                      )}
                    >Confirm</a>
                    <a href='#' className='button white-button'
                      onClick={ this.executeAction.bind(
                        this,() => reject({
                          requestor_id: requestor.id,
                          receiver_id: this.props.currentUser.id,
                          request:false
                        })
                      )}
                    >Delete Request</a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </button>
    )
  }
}

export default FriendRequestDropDown;
