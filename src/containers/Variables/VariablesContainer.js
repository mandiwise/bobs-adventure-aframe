import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { incrementPanelId, decrementPanelId } from '../../redux/modules/variables'
import Variables from './Variables';

class VariablesContainer extends Component {

  static propTypes = {
    activePanel: PropTypes.number,
    goToNextPanel: PropTypes.func,
    goToPreviousPanel: PropTypes.func
  };

  render() {
    return (
      <Variables 
        activePanel={this.props.activePanel} 
        goToNextPanel={this.props.goToNextPanel} 
        goToPreviousPanel={this.props.goToPreviousPanel}
      />
    );
  }

}

const mapDispatchToProps = dispatch => ({
  goToNextPanel() {
    dispatch(incrementPanelId());
  },
  goToPreviousPanel() {
    dispatch(decrementPanelId());
  }
});

const mapStateToProps = state => ({
  activePanel: state.variables.activePanel
});

export default connect(mapStateToProps, mapDispatchToProps)(VariablesContainer);
