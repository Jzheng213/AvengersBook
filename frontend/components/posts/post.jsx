//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Components
import PostItem from './post_item';
import Comment from '../comments/comment';

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
              return(
                <div key={post.id}>
                  <PostItem post={post}
                    currentUser={this.props.currentUser}
                    deletePost={this.props.deletePost}
                    toggleEditPostModal={this.props.toggleEditPostModal}
                  />
                  <Comment postId={post.id} />
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Post);
