import React from "react";
import Categories from "./Categories";
import Items from "./Items";
import { toggleCart } from "../store/cart";
import { connect } from "react-redux";
import Cart from "./Cart";

function App(props) {
  const { selectedCategoryId, toggleCart } = props;
  return (
    <div className="app">
      <div className="app-header">
        <Categories />
        <div className="app-header-cart">
          <button className="button is-inverted" onClick={toggleCart}>
            Cart
          </button>
        </div>
      </div>
      <div className="app-body">
        <Items key={selectedCategoryId} categoryId={selectedCategoryId} />
      </div>
      <Cart />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedCategoryId: state.categories.selectedCategoryId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
