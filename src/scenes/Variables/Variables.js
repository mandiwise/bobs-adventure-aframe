/* global AFRAME */
import React, { PropTypes } from 'react';
import {
  Entity,
  Scene
} from 'aframe-react';

import extras from 'aframe-extras';
AFRAME.registerComponent('touch-controls', extras.controls['touch-controls']);

import Camera from '../../components/Camera';
import Sky from '../../components/Sky';
import Plane from '../../components/Plane';
import Text from '../../components/Text';
import ObjModel from '../../components/ObjModel';
import Console from '../../components/Console';
import ConsolePanel from '../../components/ConsolePanel';

import { colors } from '../../styles/theme';

const Variables = ({ activePanel, goToNextPanel, goToPreviousPanel }) => {
  return (
    <Scene>
      {/* Asset management system */}
      <a-assets>
        <a-asset-item id="robotObj" src="./assets/voxels/robot/robot.obj"></a-asset-item>
        <a-asset-item id="robotMtl" src="./assets/voxels/robot/robot.mtl"></a-asset-item>
        <a-mixin id="console-text" text="font: sourcecodepro; color: white; width: 6; wrapCount: 40"></a-mixin>
      </a-assets>

      {/* Scene entities */}
      <Sky />

      <Entity position={[0, 1.6, 0]}>
        <Camera touch-controls="">
          <Entity
            position="0 0 -3"
            geometry="primitive: ring; radiusOuter: 0.06; radiusInner: 0.04;"
            material="color: magenta; shader: flat"
            cursor="maxDistance: 30; fuse: false"
          >
            <a-animation begin="click" easing="ease-in" attribute="scale"
              fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="200"></a-animation>
          </Entity>
        </Camera>
      </Entity>

      <Console
        position={[2.4, 2, -5.1]}
        height={3}
        width={6.5}
        goToNextPanel={goToNextPanel} 
      >
        <Plane
          position={[2.4, 2, -5.1]}
          height={3}
          width={6.5}
          material={{opacity: 0.8, color: 'black'}}
        />
        <ConsolePanel isActive={activePanel === 1 ? true : false}>
          <Text
            mixin="console-text"
            text={{ value: "Variables allow us store data in our programs to use later. For example:" }}
            position={[2.4, 3, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "$ let bestFriend = 'Megabyte';" }}
            position={[2.4, 2.25, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "$ " }}
            position={[2.4, 1.7, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "_" }}
            position={[2.7, 1.7, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
        <ConsolePanel isActive={activePanel === 2 ? true : false}>
          <Text
            mixin="console-text"
            text={{ value: "Now if we enter 'bestFriend' into our console, we can see what's stored our new variable:" }}
            position={[2.4, 2.85, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "$ bestFriend;" }}
            position={[2.4, 2, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: '$ "Megabyte"' }}
            position={[2.4, 1.45, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "$ " }}
            position={[2.4, 0.9, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "_" }}
            position={[2.7, 0.9, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
        <ConsolePanel isActive={activePanel === 3 ? true : false}>
          <Text
            mixin="console-text"
            text={{ value: "Save some new data in Bob's brain by dragging items you find around him onto the red square:" }}
            position={[2.4, 2.9, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "$ let favouriteThing = " }}
            position={[2.4, 2, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "_" }}
            position={[5.8, 2, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
        <ConsolePanel isActive={activePanel >= 4 ? true : false}>
          <Text
            mixin="console-text"
            text={{ value: "Now that we know how to put data into Bob's brain, let's store a reminder of where he last saw Megabyte:" }}
            position={[2.4, 2.9, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "$ let lastSawMB = 'Hiding a bone.'" }}
            position={[2.4, 2, -5]}
          />
         <Text
            mixin="console-text"
            text={{ value: "$ " }}
            position={[2.4, 1.4, -5]}
          />
          <Text
            mixin="console-text"
            text={{ value: "_" }}
            position={[2.7, 1.4, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
      </Console>

      <Entity 
        geometry={{primitive: 'box', depth: 1, height: 0.1, width: 1}} 
        material={{color: 'red'}}
        position={[-2.5, 0, -5]}
      />

      <ObjModel
        obj="#robotObj"
        mtl="#robotMtl"
        position={[-4.5, 0, -5]}
        rotation={[0, 60, 0]}
        scale={[.15, .15, .15,]}
      />

      <Plane
        color={colors.grassGreen}
        rotation={[-90, 0, 0]}
        scale={[100, 100, 1]}
      />
    </Scene>
  );
};

Variables.propTypes = {
  activePanel: PropTypes.number,
  goToNextPanel: PropTypes.func,
  goToPreviousPanel: PropTypes.func
};

export default Variables;
