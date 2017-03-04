import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';

export default class App extends Component {
  render () {
    return (
      <Scene>
        <Entity 
          geometry={{primitive: 'sphere'}} 
          material="color: deepskyblue" 
          position={[0, 0, -5]} 
        />
        <Entity 
          text={{
            value: 'Hello, world!', 
            color: 'black', 
            font: 'sourcecodepro',
            width: 6
          }} 
          position={[2.1, 2, -5]} 
        />
      </Scene>
    );
  }
}
