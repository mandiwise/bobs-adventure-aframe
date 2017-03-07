import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';

import Text from './components/Text';
import ObjModel from './components/ObjModel';
import Plane from './components/Plane';
import Sky from './components/Sky';

export default class App extends Component {
  render () {
    return (
      <Scene>
        {/* Asset management system */}
        <a-assets>
          <a-asset-item id="robotObj" src="./voxels/robot/robot.obj"></a-asset-item>
          <a-asset-item id="robotMtl" src="./voxels/robot/robot.mtl"></a-asset-item>
        </a-assets>

        {/* Scene entities */}
        <Text 
          position={[2.1, 2, -5]}
          value="Hello, world!" 
        />
        <ObjModel
          obj="#robotObj"
          mtl="#robotMtl"
          position={[-2.5, 0, -5]}
          scale={[.15, .15, .15,]}
        />
        <Plane 
          color="#3AC833"
          rotation={[-90, 0, 0]} 
          scale={[100, 100, 1]}
        />
        <Sky />
      </Scene>
    );
  }
}
