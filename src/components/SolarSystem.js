import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" id="solar-system">
        <Title headline="Planetas" />
        { planets.map((planet, i) => {
          const { name, image } = planet;
          return <PlanetCard planetName={ name } planetImage={ image } key={ i } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
