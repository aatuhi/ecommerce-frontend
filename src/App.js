import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import { productInitialization } from "./reducers/productReducer";

class App extends Component {
  async componentDidMount() {
    this.props.productInitialization();
  }
  render() {
    return (
      <Container>
        <NavBar />
        <h1>Ecommerce application</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { productInitialization }
)(App);
