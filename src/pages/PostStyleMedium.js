import React from 'react';
import PostStyleMediumContainer from '../containers/PostStyleMediumContainer'

class PostStyleMedium extends React.Component {
  render() {
    return (
      <div className="HomePage">
          <PostStyleMediumContainer {...this.props}/>
      </div>
    );
  }
}

export default PostStyleMedium;