import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { filterItems } from "../actions/index";

// Components
import DropdownCategory from '../components/DropdownCategory'

class Filters extends Component {
  constructor(props) {
    super(props)

    this.filterByCategory = this.filterByCategory.bind(this);
  }

  filterByCategory() {
    this.props.filterItems();
  }

  render() {
    return(
      <div className="filters-panel">
        <div className="filters-panel__category">
          <button onClick={this.filterByCategory} className="">Category</button>
          <DropdownCategory isVisible={this.props.options} />
        </div>
        <div className="filters-panel__colors">
          <button className="">Color</button>
          <DropdownCategory isVisible={this.props.options} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ options }) {
  return { options };
}

export default
  connect(mapStateToProps, {
    filterItems
})(Filters)