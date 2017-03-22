import React, { PropTypes } from 'react';
import { Entity, Scene } from 'aframe-react';

import ObjModel from '../../components/ObjModel';
import Sky from '../../components/Sky';
import Text from '../../components/Text';

const Enter = ({ goToMenu }) => {
  return (
    <Scene>
      {/* Asset management system */}
      <a-assets>
        {/* assets */}
        <a-asset-item id="cardboard_obj" src="./assets/voxels/cardboard/cardboard.obj"></a-asset-item>
        <a-asset-item id="cardboard_mtl" src="./assets/voxels/cardboard/cardboard.mtl"></a-asset-item>
        {/* mixins */}
        <a-mixin id="enter_text" text="font: sourcecodepro; align: center; color: black; width: 4; wrapCount: 35"></a-mixin>
      </a-assets>

      {/* Camera */}
      <Entity position={[0, 1.5, 0]}>
        <Entity camera="" look-controls="" wasd-controls="" touch-controls="">
          <Entity
            position="0 0 -3"
            geometry="primitive: ring; radiusOuter: 0.06; radiusInner: 0.04;"
            material="color: magenta; shader: flat"
            cursor="fuse: false"
          >
            <a-animation begin="click" easing="ease-in" attribute="scale"
              fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="200"></a-animation>
          </Entity>
        </Entity>
      </Entity>

      {/* Scene entities */}
      <Sky />

      <ObjModel 
        obj="#cardboard_obj"
        mtl="#cardboard_mtl"
        rotation={[25, 40, 15]}
        position={[0, 2, -5]}
        scale={[.15, .15, .15]}
        id="cardboard"
        onClick={goToMenu}
      />

      <Text
        mixin="enter_text"
        text={{ 
          value: "Using a cardboard headset? Press the button in the lower right-hand corner of the screen and position your phone in your headset now." 
        }}
        position={[0, .25, -5]}
      /> 
      <Text
        mixin="enter_text"
        text={{ 
          value: 'Click the headset to start...'
        }}
        position={[0, -.75, -5]}
      />      
    </Scene>
  );
};

Enter.propTypes = {
  goToMenu: PropTypes.func.isRequired
};

export default Enter;
