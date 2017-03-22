import React, { Component } from 'react';

import Lessons from './Lessons';
import { history } from '../../redux/store';

class LessonsContainer extends Component {
  // static propTypes = {};

  render() {
    return(
      <Lessons goToLesson={this.goToLesson} />
    );
  }

  goToLesson(lessonName) {
    history.push(`/lessons/${lessonName}`)
  }
}

export default LessonsContainer;
