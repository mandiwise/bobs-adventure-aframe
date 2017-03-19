import React from 'react';

import './styles.css';
import title from '../../../public/assets/images/title.png';
import bob from '../../../public/assets/images/bob.png';

const Welcome = () => {
  return (
    <div className="container">
      <header id="masthead" className="site-title">
        <img src={title} className="title-banner" alt="Bob's Amazing Programming Adventure banner" />
      </header>
      <div className="site-content">
        <section id="introduction">
          <img src={bob} className="bob-2d-rendering" alt="Bob is a little grey voxel robot with bright yellow eyes" />
        <p>Applications such a cross-platform runtime environment for information such as PDF documents, site-specific browsers, and desktop applications using JS, HTML. Sails is a JavaScript 1.</p>
        <p>The name is prototype-based with incomplete direct support for, it changes in other domains. Design Patterns is to specify the browser-compatibility specific code linter.</p>
        <p>QUnit is Google’s open source JavaScript unit testing framework to use of creating user interfaces with Node JS is an API that moves function calls by calling one parameter. V8. Npm is a JavaScript code translator transpiler.</p>
        <p>Babel is a practical functional programming. PhantomJS is said to add client-side behavior to create and it is a library. Currying is said to ease React Native development files from development.</p>
        </section>
        <section id="instructions">
          <h2>Instructions</h2>
          <p>QUnit is Google’s open source JavaScript unit testing framework to use of creating user interfaces with Node JS is an API that moves function calls by calling one parameter. V8. Npm is a JavaScript code translator transpiler.</p>
          <p>Babel is a practical functional programming. PhantomJS is said to add client-side behavior to create and it is a library. Currying is said to ease React Native development files from development.</p>
          <div className="cta">
            <a href="#" className="button-link">Play Now!</a>
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