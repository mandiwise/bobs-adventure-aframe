import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

import OutdoorScene from '../../scenes/Outdoors';
import LessonCamera from '../../components/LessonCamera';
import ObjModel from '../../components/ObjModel';

const voxelsDir = `${process.env.PUBLIC_URL}/assets/voxels`;
const imagesDir = `${process.env.PUBLIC_URL}/assets/images`;

const Lessons = ({goToLesson}) => {
  return (
    <OutdoorScene>
      {/* Asset management system */}
      <a-assets>
        {/* assets */}
        <a-asset-item id="bone_obj" src={`${voxelsDir}/bone/bone.obj`}></a-asset-item>
        <a-asset-item id="bone_mtl" src={`${voxelsDir}/bone/bone.mtl`}></a-asset-item>
        {/* mixins */}
        <a-mixin id="lesson_image" geometry="height: 6; width: 8; radius: 10; thetaLength: 50" position="0 3.5 -3"></a-mixin>
      </a-assets>

      {/* Camera */}
      <Entity position={[0, 1.6, -3]}>
        <LessonCamera />
      </Entity>

      {/* Scene entities */}
      <Entity onClick={() => { goToLesson('variables') }}>
        <a-curvedimage 
          mixin="lesson_image"
          src={`url(${imagesDir}/level_1.png)`}
          rotation="0 155 0"
        />
      </Entity>
      <Entity onClick={() => { goToLesson('functions') }}>
        <a-curvedimage 
          mixin="lesson_image"
          src={`url(${imagesDir}/level_2.png)`}
          rotation="0 82 0"
        />
      </Entity>
      <Entity onClick={() => { goToLesson('functions') }}>
        <a-curvedimage 
          mixin="lesson_image"
          src={`url(${imagesDir}/level_3.png)`}
          rotation="0 9 0"
        />
      </Entity>
      <Entity onClick={() => { goToLesson('functions') }}>
        <a-curvedimage 
          mixin="lesson_image"
          src={`url(${imagesDir}/level_4.png)`}
          rotation="0 -63 0"
        />
      </Entity>
      <Entity onClick={() => { goToLesson('functions') }}>
        <a-curvedimage 
          mixin="lesson_image"
          src={`url(${imagesDir}/level_5.png)`}
          rotation="0 -135 0"
        />
      </Entity>

      <ObjModel
        obj="#bone_obj"
        mtl="#bone_mtl"
        position={[4, 0, -9]}
        rotation={[0, 10, 0]}
        scale={[.15, .15, .15]}
      />
      
    </OutdoorScene>
  );
};

Lessons.propTypes = {
  goToLesson: PropTypes.func.isRequired
};

export default Lessons;
