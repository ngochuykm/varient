import React from 'react';
import HomePageContainer from '../containers/HomePageContainer'

class PageBussiness extends React.Component {
  render() {
    return (
      <div className="HomePage">
          <HomePageContainer {...this.props}/>
      </div>
    );
  }
}

export default PageBussiness;