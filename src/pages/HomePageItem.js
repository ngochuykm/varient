import React from 'react';
import HomePageItemContainer from '../containers/HomePageItemContainer'

class HomePageItem extends React.Component {
  render() {
    return (
      <div className="HomePage">
          <HomePageItemContainer {...this.props}/>
      </div>
    );
  }
}

export default HomePageItem;