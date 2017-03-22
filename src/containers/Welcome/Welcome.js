import React from 'react';
import { Link } from 'react-router';

import './styles.css';
import images from '../../config/images';

const Welcome = () => {
  return (
    <div className="container">
      <header id="masthead" className="site-title">
        <div className="title-banner">
          <img src={images.title} alt="Bob's Amazing Programming Adventure banner" />
        </div>
      </header>
      <div className="site-content">
        <section id="introduction">
          <img src={images.bob} className="bob-2d-rendering" alt="Rendering of Bob, a little grey voxel robot with bright yellow eyes" />
          <p>This is Bob the Robot. He has problem, but you can help him solve it.</p>
          <p>Bob's best dog pal Megabyte has run off. Megabyte does that sometimes when he finds a juicy bone and wants to hide it away somewhere for later. When this happens Bob usually has a hard time finding Megabyte because he doesn't have a program in his robot brain to help with this.</p>
          <img src={images.megabyte} className="mb-2d-rendering" alt="Megabyte of Megabyte, Bob's dog friend" />
          <p>Luckily, Bob's brain runs on JavaScript. You can help Bob find Megabyte by learning a bit of JavaScript and then creating a program to help him look for and find Megabyte.</p>
          <p>You'll have to learn about variables, data structures, function, conditional statements, and loops to help Bob. By solving the challenges in each of the levels, you'll create a new program step-by-step using JavaScript that Bob can use to find Megabyte now, or any other time his dog pal runs off again in the future!</p>
        </section>
        <section id="instructions">
          <h2>Instructions</h2>
          <p>Some info about how to use the game...like voice controls...</p>
          <div className="cta">
            <Link to="/enter">
              <img src={images.startButton} className="start-button" alt="Pixelated button that says start on it" />
            </Link>
          </div>
        </section>
      </div>
      <footer className="site-footer">
        <div className="colophon">
          <p>© 2017 Mandi Wise 🤖</p>
        </div>
      </footer>
    </div>
  );
};

// Welcome.propTypes = {};

export default Welcome;