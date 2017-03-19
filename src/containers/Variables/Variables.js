/* global AFRAME */
import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

import extras from 'aframe-extras';
AFRAME.registerComponent('touch-controls', extras.controls['touch-controls']);

import OutdoorScene from '../../scenes/Outdoors';
import Camera from '../../components/Camera';
import Plane from '../../components/Plane';
import Text from '../../components/Text';
import ObjModel from '../../components/ObjModel';
import Console from '../../components/Console';
import ConsolePanel from '../../components/ConsolePanel';

const Variables = ({ activePanel, goToNextPanel, goToPreviousPanel }) => {
  return (
    <OutdoorScene>
      {/* Asset management system */}
      <a-assets>
        {/* assets */}
        <a-asset-item id="robot_obj" src="./assets/voxels/robot/robot.obj"></a-asset-item>
        <a-asset-item id="robot_mtl" src="./assets/voxels/robot/robot.mtl"></a-asset-item>
        <a-asset-item id="macintosh_obj" src="./assets/voxels/macintosh/macintosh.obj"></a-asset-item>
        <a-asset-item id="macintosh_mtl" src="./assets/voxels/macintosh/macintosh.mtl"></a-asset-item>
        <a-asset-item id="mb_photo_obj" src="./assets/voxels/mb_photo/mb_photo.obj"></a-asset-item>
        <a-asset-item id="mb_photo_mtl" src="./assets/voxels/mb_photo/mb_photo.mtl"></a-asset-item>
        {/* mixins */}
        <a-mixin id="console_text" text="font: sourcecodepro; color: white; width: 6; wrapCount: 40"></a-mixin>
      </a-assets>

      {/* Camera */}
      <Entity position={[0, 1.6, 1]}>
        <Camera touch-controls="">
          <Entity
            position="0 0 -3"
            geometry="primitive: ring; radiusOuter: 0.06; radiusInner: 0.04;"
            material="color: magenta; shader: flat"
            cursor="fuse: false"
          >
            <a-animation begin="click" easing="ease-in" attribute="scale"
              fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="200"></a-animation>
          </Entity>
        </Camera>
      </Entity>

      {/* Console */}
      <Console
        rotation={[0, -10, 0]}
        goToNextPanel={goToNextPanel} 
      >
        <Plane
          position={[2.1, 2, -5.1]}
          height={3}
          width={6.5}
          material={{opacity: 0.8, color: 'black'}}
        />
        <ConsolePanel isActive={activePanel === 1 ? true : false}>
          <Text
            mixin="console_text"
            text={{ value: "Variables allow us to store data in our programs to use later. For example:" }}
            position={[2.1, 3, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "$ let bestFriend = 'Megabyte';" }}
            position={[2.1, 2.25, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "$ " }}
            position={[2.1, 1.7, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "_" }}
            position={[2.4, 1.7, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
        <ConsolePanel isActive={activePanel === 2 ? true : false}>
          <Text
            mixin="console_text"
            text={{ value: "Now if we enter 'bestFriend' into our console, we can see what's stored our new variable:" }}
            position={[2.1, 2.85, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "$ bestFriend;" }}
            position={[2.1, 2, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: '$ "Megabyte"' }}
            position={[2.1, 1.45, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "$ " }}
            position={[2.1, 0.9, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "_" }}
            position={[2.4, 0.9, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
        <ConsolePanel isActive={activePanel === 3 ? true : false}>
          <Text
            mixin="console_text"
            text={{ value: "Save some new data in Bob's brain by dragging items you find around him onto the red square:" }}
            position={[2.1, 2.9, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "$ let favouriteThing = " }}
            position={[2.1, 2, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "_" }}
            position={[5.5, 2, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
        <ConsolePanel isActive={activePanel >= 4 ? true : false}>
          <Text
            mixin="console_text"
            text={{ value: "Now that we know how to put data into Bob's brain, let's store a reminder of where he last saw Megabyte:" }}
            position={[2.1, 2.9, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "$ let lastSawMB = 'Hiding a bone.'" }}
            position={[2.1, 2, -5]}
          />
         <Text
            mixin="console_text"
            text={{ value: "$ " }}
            position={[2.1, 1.4, -5]}
          />
          <Text
            mixin="console_text"
            text={{ value: "_" }}
            position={[2.4, 1.4, -5]}
          >
            <a-animation attribute="text.opacity" from="1" to="0" repeat="indefinite"></a-animation>
          </Text>
        </ConsolePanel>
      </Console>

      {/* Voxel objects */}
      <ObjModel
        obj="#robot_obj"
        mtl="#robot_mtl"
        position={[-5, 0, -5]}
        rotation={[0, 60, 0]}
        scale={[.15, .15, .15,]}
      />
      <Entity 
        geometry={{primitive: 'box', depth: 1, height: 0.1, width: 1}} 
        material={{color: 'red'}}
        position={[-2.5, 0, -5]}
      />
      <ObjModel
        obj="#mb_photo_obj"
        mtl="#mb_photo_mtl"
        position={[5, 0, 7]}
        rotation={[0, -135, 0]}
        scale={[.15, .15, .15,]}
      />
      <ObjModel
        obj="#macintosh_obj"
        mtl="#macintosh_mtl"
        position={[-5, 0, 7]}
        rotation={[0, -215, 0]}
        scale={[.15, .15, .15,]}
      />
    </OutdoorScene>
  );
};

Variables.propTypes = {
  activePanel: PropTypes.number,
  goToNextPanel: PropTypes.func,
  goToPreviousPanel: PropTypes.func
};

export default Variables;
