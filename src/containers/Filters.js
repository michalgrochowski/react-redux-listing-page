import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { showCategories, showColors, bagsChecked, beltsChecked, walletsChecked } from "../actions/index";

// Components
import DropdownCategory from '../components/DropdownCategory'
import DropdownColors from '../components/DropdownColors'

class Filters extends Component {
  constructor(props) {
    super(props)

    this.filterByCategory = this.filterByCategory.bind(this);
    this.filterByColors = this.filterByColors.bind(this);
    this.checkBags = this.checkBags.bind(this);
    this.checkBelts = this.checkBelts.bind(this);
    this.checkWallets = this.checkWallets.bind(this);
  }

  filterByCategory() {
    this.props.showCategories();
  }

  filterByColors() {
    this.props.showColors();
  }

  checkBags() {
    this.props.bagsChecked();
    console.log("123");
  }

  checkBelts() {
    this.props.beltsChecked();
    console.log("123");
  }

  checkWallets() {
    this.props.walletsChecked();
    console.log("123");
  }
  
  render() {
    return (
      <div className="filters-panel">
        <div className="filters-panel__filter">
          <button onClick={this.filterByCategory} className="filters-panel__button filters-panel__button--centered">Category</button>
          <DropdownCategory 
            isVisible={this.props.categoriesVisible.categoriesVisible} 
            bags={this.checkBags} 
            belts={this.checkBelts} 
            wallets={this.checkWallets} 
          />
        </div>
        <div className="filters-panel__filter">
          <button onClick={this.filterByColors} className="filters-panel__button filters-panel__button--centered">Color</button>
          <DropdownColors 
            isVisible={this.props.colorsVisible.colorsVisible} 
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categoriesVisible, colorsVisible, areBagsChecked, areBeltsChecked, areWalletChecked }) {
  return { categoriesVisible, colorsVisible, areBagsChecked, areBeltsChecked, areWalletChecked };
}

export default
  connect(mapStateToProps, {
    showCategories,
    showColors,
    bagsChecked,
    beltsChecked,
    walletsChecked
})(Filters)