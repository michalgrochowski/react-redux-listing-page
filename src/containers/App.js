// Core dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import '../styles/index.css';

// Actions
import { fetchData } from "../actions/index";

// Static components
import MainHeader from "../components/MainHeader";
import Filters from "../containers/Filters";
import ProductBox from "../components/ProductBox";


class App extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    if (Object.keys(this.props.data).length === 0) {
      return (
        <div className="main-container">
          <MainHeader />
          <Filters />
        </div>
      )
    } else if (Object.keys(this.props.data).length !== 0) {
      const products = this.props.data.data.map(product => {
        return (
          <ProductBox key={product.name} name={product.name} data={product.variants} photo={product.photo} />
        )
      })
      return (
        <div className="main-container">
          <MainHeader />
          <Filters click={this.props.fetchData}/>
          <div className="main-container__products">
            {products}
          </div>
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