import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { showCategories, showColors } from "../actions/index";

// Components
import DropdownCategory from '../components/DropdownCategory'
import DropdownColors from '../components/DropdownColors'

class Filters extends Component {
  constructor(props) {
    super(props)

    this.filterByCategory = this.filterByCategory.bind(this);
    this.filterByColors = this.filterByColors.bind(this);
  }

  filterByCategory() {
    this.props.showCategories();
  }

  filterByColors() {
    this.props.showColors();
  }

  render() {
    return(
      <div className="filters-panel">
        <div className="filters-panel__filter">
          <button onClick={this.filterByCategory} className="filters-panel__button filters-panel__button--centered">Category</button>
          <DropdownCategory isVisible={this.props.categoriesVisible.categoriesVisible} />
        </div>
        <div className="filters-panel__filter">
          <button onClick={this.filterByColors} className="filters-panel__button filters-panel__button--centered">Color</button>
          <DropdownColors isVisible={this.props.colorsVisible.colorsVisible} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categoriesVisible, colorsVisible }) {
  return { categoriesVisible, colorsVisible };
}

export default
  connect(mapStateToProps, {
    showCategories,
    showColors
})(Filters)