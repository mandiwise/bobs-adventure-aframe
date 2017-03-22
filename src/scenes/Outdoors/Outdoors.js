import React, { PropTypes } from 'react';
import { Scene } from 'aframe-react';

import Sky from '../../components/Sky';
import ObjModel from '../../components/ObjModel';

const voxelsDir = `${process.env.PUBLIC_URL}/assets/voxels`;

const Outdoors = (props) => {
  return (
    <Scene>
      {/* Asset management system */}
      <a-assets>
        <a-asset-item id="cloud_1_obj" src={`${voxelsDir}/cloud_1/cloud_1.obj`}></a-asset-item>
        <a-asset-item id="cloud_1_mtl" src={`${voxelsDir}/cloud_1/cloud_1.mtl`}></a-asset-item>
        <a-asset-item id="cloud_2_obj" src={`${voxelsDir}/cloud_2/cloud_2.obj`}></a-asset-item>
        <a-asset-item id="cloud_2_mtl" src={`${voxelsDir}/cloud_2/cloud_2.mtl`}></a-asset-item>
        <a-asset-item id="cloud_3_obj" src={`${voxelsDir}/cloud_3/cloud_3.obj`}></a-asset-item>
        <a-asset-item id="cloud_3_mtl" src={`${voxelsDir}/cloud_3/cloud_3.mtl`}></a-asset-item>
        <a-asset-item id="outdoor_scene_obj" src={`${voxelsDir}/outdoor_scene/outdoor_scene.obj`}></a-asset-item>
        <a-asset-item id="outdoor_scene_mtl" src={`${voxelsDir}/outdoor_scene/outdoor_scene.mtl`}></a-asset-item>
      </a-assets>

      {/* Scene entities */}
      <Sky />

      <ObjModel
        obj="#cloud_1_obj"
        mtl="#cloud_1_mtl"
        position={[-9, 18, -32]}
        rotation={[0, 25, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_2_obj"
        mtl="#cloud_2_mtl"
        position={[-6, 16, -30]}
        rotation={[0, 10, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_3_obj"
        mtl="#cloud_3_mtl"
        position={[10, 18, -32]}
        rotation={[0, -20, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_2_obj"
        mtl="#cloud_2_mtl"
        position={[32, 16, -10]}
        rotation={[0, -80, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_1_obj"
        mtl="#cloud_1_mtl"
        position={[38, 18, 6]}
        rotation={[0, 65, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_3_obj"
        mtl="#cloud_3_mtl"
        position={[8, 16, 32]}
        rotation={[0, 180, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_2_obj"
        mtl="#cloud_2_mtl"
        position={[-30, 16, 21]}
        rotation={[0, 125, 0]}
        scale={[.3, .3, .3]}
      />
      <ObjModel
        obj="#cloud_3_obj"
        mtl="#cloud_3_mtl"
        position={[30, 18, 24]}
        rotation={[0, 90, 0]}
        scale={[.3, .3, .3]}
      />

      {props.children}

      <ObjModel
        obj="#outdoor_scene_obj"
        mtl="#outdoor_scene_mtl"
        position={[0, -1.2, 0]}
        scale={[.3, .3, .3]}
      />
    </Scene>
  );
};

Outdoors.propTypes = {
  children: PropTypes.node,
};

export default Outdoors;
