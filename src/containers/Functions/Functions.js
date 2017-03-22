import React from 'react';
import { Entity } from 'aframe-react';

import OutdoorScene from '../../scenes/Outdoors';
import LessonCamera from '../../components/LessonCamera';
import ObjModel from '../../components/ObjModel';
import Text from '../../components/Text';

const voxelsDir = `${process.env.PUBLIC_URL}/assets/voxels`;

const Functions = () => {
  return (
    <OutdoorScene>
      {/* Asset management system */}
      <a-assets>
        {/* assets */}
        <a-asset-item id="heart_obj" src={`${voxelsDir}/heart/heart.obj`}></a-asset-item>
        <a-asset-item id="heart_mtl" src={`${voxelsDir}/heart/heart.mtl`}></a-asset-item>
        <a-asset-item id="robot_obj" src={`${voxelsDir}/robot/robot.obj`}></a-asset-item>
        <a-asset-item id="robot_mtl" src={`${voxelsDir}/robot/robot.mtl`}></a-asset-item>
        <a-asset-item id="megabyte_obj" src={`${voxelsDir}/megabyte/megabyte.obj`}></a-asset-item>
        <a-asset-item id="megabyte_mtl" src={`${voxelsDir}/megabyte/megabyte.mtl`}></a-asset-item>
        <a-asset-item id="bone_obj" src={`${voxelsDir}/bone/bone.obj`}></a-asset-item>
        <a-asset-item id="bone_mtl" src={`${voxelsDir}/bone/bone.mtl`}></a-asset-item>
        {/* mixins */}
        <a-mixin id="console_text" text="font: sourcecodepro; color: white; width: 6; wrapCount: 40"></a-mixin>
      </a-assets>

      {/* Camera */}
      <Entity position={[0, 1.6, 1]}>
        <LessonCamera />
      </Entity>

      <Text
        text={{ 
          value: 'To be continued...',
          font: 'sourcecodepro',
          color: 'black',
          width: 5,
          wrapCount: 18
        }}
        position={[0, 5.25, -5]}
      />

      {/* Voxel objects */}
      <ObjModel
        obj="#heart_obj"
        mtl="#heart_mtl"
        position={[0, 2.75, -5]}
        rotation={[0, 0, 0]}
        scale={[.15, .15, .15]}
      />
      <ObjModel
        obj="#robot_obj"
        mtl="#robot_mtl"
        position={[-1.5, 0, -5]}
        rotation={[0, 40, 0]}
        scale={[.15, .15, .15]}
      />
      <ObjModel
        obj="#megabyte_obj"
        mtl="#megabyte_mtl"
        position={[1.5, 0, -5]}
        rotation={[0, -40, 0]}
        scale={[.15, .15, .15]}
      />
      <ObjModel
        obj="#bone_obj"
        mtl="#bone_mtl"
        position={[.4, 0, -4]}
        rotation={[0, 10, 0]}
        scale={[.15, .15, .15]}
      />
    </OutdoorScene>
  );
};

// Functions.propTypes = {};

export default Functions;
