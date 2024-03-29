/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ resetGame }) => {
  return (
    <header>
      <h2>
        <a>Pair Them Up!</a>
      </h2>
      <nav>
        <li>
          <a onClick={resetGame}>New Game</a>
        </li>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  resetGame: PropTypes.func.isRequired
};

export default Navbar;
