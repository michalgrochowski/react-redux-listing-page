import React, { Component} from 'react';
import { connect } from 'react-redux';

// Actions
import { bagsChecked, beltsChecked, walletsChecked } from "../actions/index";

class CheckboxButton extends Component {

  render() {
    return (
      <button className="filters-panel__button">
        <span className="filters-panel__checkbox"></span> {this.props.value}
      </button> 
    ) 
  }
}

function mapStateToProps({ bagsChecked, beltsChecked, walletsChecked }) {
  return { bagsChecked, beltsChecked, walletsChecked };
}

export default
  connect(mapStateToProps, {
    bagsChecked,
    beltsChecked,
    walletsChecked
})(CheckboxButton)