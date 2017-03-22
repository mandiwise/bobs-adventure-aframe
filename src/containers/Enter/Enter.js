import React from 'react';
import { Scene } from 'aframe-react';

import ObjModel from '../../components/ObjModel';
import Sky from '../../components/Sky';
import Text from '../../components/Text';

const Enter = () => {
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

      {/* Scene entities */}
      <Sky />

      <ObjModel 
        obj="#cardboard_obj"
        mtl="#cardboard_mtl"
        rotation={[25, 40, 15]}
        position={[0, 2, -5]}
        scale={[.15, .15, .15]}
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
          value: 'Then say "start" or press Enter.'
        }}
        position={[0, -.75, -5]}
      />      
    </Scene>
  );
};

// Enter.propTypes = {};

export default Enter;
