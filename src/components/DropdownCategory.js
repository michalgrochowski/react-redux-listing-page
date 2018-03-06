import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { bagsChecked, beltsChecked, walletsChecked } from "../actions/index";

import CheckboxButton from '../containers/CheckboxButton'

const DropdownCategory = (props) => {
  if (props.isVisible === true) {
      return (
        <ul className="filters-panel__dropdown">
          <li className="filters-panel__option">
            <CheckboxButton value="Bags" onClick={props.bags} />
          </li>
          <li className="filters-panel__option">
            <CheckboxButton value="Belts" onClick={props.belts} />
          </li>
          <li className="filters-panel__option">
            <CheckboxButton value="Wallets" onClick={props.wallets} />
          </li>
        </ul>
      )
    } else if (props.isVisible === false) {
      return (
        null
      )
    }
}

/*class DropdownCategory extends Component {
  constructor(props) {
    super(props)

    this.checkBags = this.checkBags.bind(this);
    this.checkBelts = this.checkBelts.bind(this);
    this.checkWallets = this.checkWallets.bind(this);
  }

  checkBags() {
    this.props.bagsChecked();
  }

  checkBelts() {
    this.props.beltsChecked();
  }

  checkWallets() {
    this.props.walletsChecked();
  }

  render() {
    if (this.props.isVisible === true) {
      return (
        <ul className="filters-panel__dropdown">
          <li className="filters-panel__option">
            <CheckboxButton value="Bags" action={this.checkBags} />
          </li>
          <li className="filters-panel__option">
            <CheckboxButton value="Belts" action={this.checkBelts} />
          </li>
          <li className="filters-panel__option">
            <CheckboxButton value="Wallets"action={this.checkWallets}  />
          </li>
        </ul>
      )
    } else if (this.props.isVisible === false) {
      return (
        null
      )
    }
  }
}

function mapStateToProps({ areBagsChecked, areBeltsChecked, areWalletChecked }) {
  return { areBagsChecked, areBeltsChecked, areWalletChecked };
}

export default
  connect(mapStateToProps, {
    bagsChecked,
    beltsChecked,
    walletsChecked
})(DropdownCategory)*/

export default DropdownCategory;