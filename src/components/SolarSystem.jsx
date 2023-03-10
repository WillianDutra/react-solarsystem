import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="planet-card">
          { planets.map((planet, i) => {
            const { name, image } = planet;
            return <PlanetCard planetName={ name } planetImage={ image } key={ i } />;
          })}
        </div>
        <hr />
      </div>
    );
  }
}

export default SolarSystem;
