import React from 'react';
import logoHeader from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logoHeader } alt="sistema-solar" />
      </header>
    );
  }
}

export default Header;
