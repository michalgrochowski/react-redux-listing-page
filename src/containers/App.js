// Core dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styles
import '../styles/index.css';

// Actions
import { fetchData } from "../actions/index";

// Static components


class App extends Component {
  componentWillMount() {
    this.props.fetchData();
    /*const products = this.props.products.map(product => {
      return (
        <p key={product.name}>
          {product.name}
        </p>
      )
    })*/
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);