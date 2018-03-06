import React, { Component} from 'react';
import { connect } from 'react-redux';

// Actions
import { bagsChecked, beltsChecked, walletsChecked } from "../actions/index";

const CheckboxButton = (props) => {
  if (props.value === "Bags") {
      return (
        <button onClick={props.onClick} className="filters-panel__button">
          <span className="filters-panel__checkbox"></span> {props.value}
        </button> 
      ) 
    } else if (props.value === "Belts") {
      return (
        <button onClick={props.onClick} className="filters-panel__button">
          <span className="filters-panel__checkbox"></span> {props.value}
        </button> 
      )
    } else if (props.value === "Wallets") {
      return (
        <button onClick={props.onClick} className="filters-panel__button">
          <span className="filters-panel__checkbox"></span> {props.value}
        </button> 
      ) 
    } else {
      return (
        <button className="filters-panel__button">
          <span className="filters-panel__checkbox"></span> {props.value}
        </button> 
      ) 
    }
}

/*class CheckboxButton extends Component {
  constructor(props) {
    super(props)

    this.checkBags = this.checkBags.bind(this);
    this.checkBelts = this.checkBelts.bind(this);
    this.checkWallets = this.checkWallets.bind(this);
  }

  checkBags () {
    this.props.bagsChecked();
  }

  checkBelts () {
    this.props.beltsChecked();
  }

  checkWallets () {
    this.props.walletsChecked();
  }

  render() {
    if (this.props.value === "Bags") {
      return (
        <button className="filters-panel__button">
          <span onClick={this.checkBags} className="filters-panel__checkbox"></span> {this.props.value}
        </button> 
      ) 
    } else if (this.props.value === "Belts") {
      return (
        <button className="filters-panel__button">
          <span onClick={this.checkBelts} className="filters-panel__checkbox"></span> {this.props.value}
        </button> 
      )
    } else if (this.props.value === "Wallets") {
      return (
        <button className="filters-panel__button">
          <span onClick={this.checkWallets} className="filters-panel__checkbox"></span> {this.props.value}
        </button> 
      ) 
    } else {
      return (
        <button className="filters-panel__button">
          <span className="filters-panel__checkbox"></span> {this.props.value}
        </button> 
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
})(CheckboxButton)*/

export default CheckboxButton;