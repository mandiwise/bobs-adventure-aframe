import { Entity } from 'aframe-react';
import React from 'react';

const LessonCamera = (props) => (
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
);

export default LessonCamera;
