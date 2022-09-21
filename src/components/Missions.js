import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionCard />
      </div>
    );
  }
}

export default Missions;
