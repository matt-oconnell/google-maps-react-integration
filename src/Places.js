import React, { Component } from 'react';

class Places extends Component {
  render() {
    const venueList = this.props.venues.map((venue, i) => {
      return (
        <li>{venue.name}</li>
      )
    })
    return (
      <div className="Places">
        <ul>
          {venueList}
        </ul>
      </div>
    );
  }
}

export default Places;
