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
    this.props.requestPosts();
  }

  render(){
    return(
      <div>
        <ul>
          {
            this.props.posts.map((post) => {
              return <PostItem key={post.id} post={post} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Post);
