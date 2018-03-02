// Core dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styles
import '../styles/index.css';

// Actions
import { fetchData } from "../actions/index";

// Static components
import MainHeader from "../components/MainHeader";
import Filters from "../components/Filters";
import ProductBox from "../components/ProductBox";


class App extends Component {
  constructor (props) {
    super(props);

    this.loadData = this.loadData.bind(this);
  }

  componentWillMount() {
    this.props.fetchData();
    /*const products = this.props.products.map(product => {
      return (
        <p key={product.name}>
          {product.name}
        </p>
      )
    })*/
    
  }

  loadData() {
    console.log(this.props);
  }

  render() {
    if (Object.keys(this.props.data).length === 0) {
      return (
        <div className="main-container">
          <MainHeader />
        </div>
      )
    } else if (Object.keys(this.props.data).length !== 0) {
      const products = this.props.data.data.map(product => {
        return (
          <ProductBox key={product.name} data={product} />
        )
      })
      return (
        <div className="main-container">
          <MainHeader />
          {products}
        </div>
      );
    }
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default
  connect(mapStateToProps, {
    fetchData
  })(App)