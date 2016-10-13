import React, { Component } from 'react';
import Map from './Map'
import Places from './Places'
import superagent from 'superagent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    const url = `https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.742838,-73.9891297&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ`
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, data) => {
      const venues = data.body.response.venues;
      this.setState({
        venues: venues
      });
    });

  }

  render() {
    const venues = [];
    const coords = {
      lat: 40.742838,
      lng: -73.9891297
    }
    return (
      <div className="App">
        <div className="map-holder">
          <Map center={coords} markers={this.state.venues} />
        </div>
        <Places venues={this.state.venues} />
      </div>
    );
  }
}

export default App;
