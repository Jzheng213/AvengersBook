//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Components
import PostItem from './post_item';

class Post extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.match.params.userId){
      this.props.requestPosts(this.props.match.params.userId);
    }else{
      this.props.requestFriendsPosts(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.userId){
      if(this.props.match.params.userId !== newProps.match.params.userId){
        this.props.requestPosts(newProps.match.params.userId);
      }
    }
  }

  render(){
    return(
      <div>
        <ul>
          {
            this.props.posts.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Post);
